import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/3d_printing',
        permanent: true,
      },
      {
        source: '/crm',
        destination: '/crm/dashboard',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    // Добавляем игнорирование предупреждений
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /typeorm/ },
      {
        module: /app-root-path/,
        message: /the request of a dependency is an expression/,
      },
    ];

    return config;
  },
};

export default nextConfig;
