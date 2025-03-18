/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: ['res.cloudinary.com', 'aceternity.com', 'assets.aceternity.com'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/models/',
            publicPath: '/_next/static/models/',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
