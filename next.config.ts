import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:all*(svg|jpg|jpeg|png|gif|webp)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
