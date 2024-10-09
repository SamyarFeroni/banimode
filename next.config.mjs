/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { protocol: "http", hostname: "10.36.18.91" },
          { protocol: "https", hostname: "eanjoman.ir" },
          { protocol: "https", hostname: "www.banimode.com" },
          { protocol: "https", hostname: "banimode.com" },
        ],
        unoptimized: true, 
      },
};

export default nextConfig;
