/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
          {
            source: "/",
            destination: "/home",
            permanent: false,
            basePath: false,
          },
        ];
      },
};

export default nextConfig;
