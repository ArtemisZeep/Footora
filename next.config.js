/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['localhost'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
  },

  // Compression
  compress: true,
  
  // Headers для оптимизации
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      // Preload critical resources
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</images/logo_footura.png>; rel=preload; as=image'
          }
        ],
      },
    ]
  },
  
  // Настройки для продакшена
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig 