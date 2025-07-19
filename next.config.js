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
      {
        source: "/join-2024",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfeiw1gEi50dhyFuxfNosJI_SDrOAF-ez6BP9hnxDnIEyg7ig/viewform?usp=sf_link",
        permanent: false,
      },
      {
        source: "/crowdfunding",
        destination: "https://crowdfunding.bu.edu/campaigns/lobstah-bots",
        permanent: false,
      },
      {
        source: "/donate",
        destination: "https://give.bu.edu/campaigns/56409/donations/new?designation_id=9300010620",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
