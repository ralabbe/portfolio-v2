/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    env: {
        BASE_PATH: process.env.BASE_PATH
    },
};

export default nextConfig;
