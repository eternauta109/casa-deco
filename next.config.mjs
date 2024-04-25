/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['laromanatoponomastica.weebly.com', 'images.unsplash.com',
            'it.wikipedia.org', 'upload.wikimedia.org', 'www.ciclostazionefrattini.it'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',

            },
            {
                protocol: 'https',
                hostname: 'laromanatoponomastica.weebly.com',
                port: '',

            },
        ],
    },
};

export default nextConfig;
