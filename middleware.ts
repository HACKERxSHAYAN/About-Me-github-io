import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Security middleware - runs before each request
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Get client IP for rate limiting
  const clientIP = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';

  // Rate limiting - simple in-memory implementation
  // In production, use Redis or similar
  const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
  const RATE_LIMIT = 100; // requests per window
  const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

  // Check rate limit
  const clientData = rateLimitMap.get(clientIP);
  const now = Date.now();

  if (clientData) {
    if (now < clientData.resetTime) {
      if (clientData.count >= RATE_LIMIT) {
        // Rate limit exceeded
        return new NextResponse('Too Many Requests', {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((clientData.resetTime - now) / 1000)),
            'X-RateLimit-Limit': String(RATE_LIMIT),
            'X-RateLimit-Remaining': '0',
          },
        });
      }
      clientData.count++;
    } else {
      // Reset rate limit
      rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }
  } else {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
  }

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Prevent information leakage
  response.headers.set('Server', 'Security-Hardened');
  response.headers.set('X-Powered-By', 'Next.js');

  // Add rate limit headers
  const remaining = RATE_LIMIT - (clientData?.count || 1);
  response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT));
  response.headers.set('X-RateLimit-Remaining', String(Math.max(0, remaining)));

  // Check for suspicious patterns in URL
  const url = request.url.toLowerCase();
  const suspiciousPatterns = [
    /<script>/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /eval\(/i,
    /document\.cookie/i,
    /window\.location/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(url)) {
      // Log suspicious activity (in production, use proper logging)
      console.warn(`[SECURITY] Suspicious pattern detected from ${clientIP}: ${url}`);
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // Prevent open redirect attacks
  const redirectURL = request.nextUrl.searchParams.get('redirect');
  if (redirectURL && !redirectURL.startsWith('/')) {
    return new NextResponse('Invalid redirect', { status: 400 });
  }

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
