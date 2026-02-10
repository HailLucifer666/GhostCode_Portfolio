/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Image optimization
    images: {
        unoptimized: false,
        formats: ['image/avif', 'image/webp'],
    },
    // Compression
    compress: true,
    // Remove trailing slashes
    trailingSlash: false,
    // Generate sitemap
    generateEtags: true,
    // PoweredBy header
    poweredByHeader: false,
    // Production source maps
    productionBrowserSourceMaps: false,
    // Optimized packages
    optimizeFonts: true,
    // Header security
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

