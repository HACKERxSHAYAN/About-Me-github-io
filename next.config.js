/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Add trailing slash for GitHub Pages
  trailingSlash: true,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Enable strict React mode
  reactStrictMode: true,
  
  // Experimental features
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Secure image handling (unoptimized for static export)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
