/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'footura.cz',
      },
      {
        protocol: 'https', 
        hostname: 'cdn.sanity.io',
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Оптимизация качества для разных размеров
    loader: 'default',
    path: '/_next/image',
    unoptimized: false,
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
      // Cache оптимизация для изображений
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Preload critical resources
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</images/logo_footura.png>; rel=preload; as=image, </critical.css>; rel=preload; as=style'
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