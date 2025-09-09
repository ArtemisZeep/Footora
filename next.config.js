/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Современные форматы изображений
    formats: ['image/avif', 'image/webp'],
    
    // Использовать remotePatterns вместо устаревшего domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
    
    // Размеры для responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Минимальный кэш для изображений
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
    
    // Отключить статическую оптимизацию для внешних изображений
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Сжатие ответов
  compress: true,
  
  // Оптимизация производительности
  poweredByHeader: false,
  
  // Экспериментальные функции для лучшей производительности
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'lucide-react',
      '@headlessui/react'
    ],
    // Предварительная загрузка критических изображений
    optimizeServerReact: true,
  },
  
  // Настройки webpack для оптимизации
  webpack: (config) => {
    // Оптимизация для изображений
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images/',
          outputPath: 'static/images/',
        },
      },
    });
    
    return config;
  },
  
  // Headers для лучшего кэширования
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).jpg',
        headers: [
          {
            key: 'Cache-Control', 
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 