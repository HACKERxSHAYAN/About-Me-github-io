/**
 * Security Utilities - Input Validation & Sanitization
 * Implements OWASP Top 10 mitigations
 */

// Sanitize HTML to prevent XSS attacks
export function sanitizeHTML(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validate name (prevent XSS and SQL injection patterns)
export function isValidName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;
  
  // Check length
  if (name.length < 2 || name.length > 100) return false;
  
  // Only allow letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name);
}

// Validate message length and content
export function isValidMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;
  
  // Check length (min 10, max 5000 characters)
  if (message.length < 10 || message.length > 5000) return false;
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /onload=/i,
    /eval\(/i,
    /document\.cookie/i,
    /window\.location/i,
    /&#x/i,
    /&#/i,
    /\$_GET/i,
    /\$_POST/i,
    /\$_REQUEST/i,
    /union\s+select/i,
    /select\s+from/i,
    /insert\s+into/i,
    /delete\s+from/i,
    /drop\s+table/i,
  ];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(message)) return false;
  }
  
  return true;
}

// Sanitize input - remove dangerous characters
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/[<>]/g, '') // Remove angle brackets
    .substring(0, 5000); // Limit length
}

// Rate limiting - simple in-memory implementation
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 5; // Max requests per window
const WINDOW_MS = 60 * 1000; // 1 minute window

export function checkRateLimit(identifier: string): { allowed: boolean; remainingTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  
  if (!record) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true, remainingTime: 0 };
  }
  
  if (now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true, remainingTime: 0 };
  }
  
  if (record.count >= MAX_REQUESTS) {
    return { allowed: false, remainingTime: record.resetTime - now };
  }
  
  record.count++;
  return { allowed: true, remainingTime: 0 };
}

// Generate CSRF token (for future API implementation)
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(array);
  } else {
    // Fallback for server-side
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Validate URL to prevent open redirect attacks
export function isValidURL(url: string): boolean {
  try {
    const parsed = new URL(url);
    // Only allow relative URLs or same-origin URLs
    return parsed.origin === window.location.origin || url.startsWith('/');
  } catch {
    // If URL parsing fails, check if it's a relative path
    return url.startsWith('/') && !url.startsWith('//');
  }
}

// Escape regex special characters
export function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Sanitize filename (prevent path traversal)
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '')
    .replace(/\.\./g, '')
    .substring(0, 255);
}
