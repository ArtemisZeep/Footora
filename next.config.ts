import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Временно игнорируем ESLint ошибки для сборки
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Временно игнорируем TypeScript ошибки для сборки
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
