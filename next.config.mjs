/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dnd5eapi.co',
                port:'',
                pathname: '/api/images/**',
            },
        ],
    },
};

export default nextConfig;
