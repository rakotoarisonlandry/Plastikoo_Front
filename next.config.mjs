/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '13.38.147.124', // add the IP address
            port: '', // leave this empty unless a specific port is used
            pathname: '/uploads/**', // adjust the pathname to match your image path
          },
        ],
      },
};

export default nextConfig;
