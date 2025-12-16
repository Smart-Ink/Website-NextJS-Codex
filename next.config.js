/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/account', destination: '/account.html', permanent: false },
      { source: '/dashboard', destination: '/dashboard.html', permanent: false },
      { source: '/logout', destination: '/logout.html', permanent: false },
      { source: '/hcm/success', destination: '/hcm/success/index.html', permanent: false },
      { source: '/srm/success', destination: '/srm/success/index.html', permanent: false }
    ];
  }
};

export default nextConfig;
