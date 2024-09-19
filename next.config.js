/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images.mailchimp.com",
        port: "",
        pathname: "/icons/social-block-v3/block-icons-v3/*.png",
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/mm24f1", // Merrimack 2024 Flyer #1
        destination: "/mm24",
        permanent: false,
      },
      {
        source: "/mm24",
        destination: "https://www.buacademy.org/stuco/9-14-mayhem-in-merrimack/",
        permanent: false,
      },
      {
        source: "/qr/2",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfeiw1gEi50dhyFuxfNosJI_SDrOAF-ez6BP9hnxDnIEyg7ig/viewform?usp=sf_link",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
