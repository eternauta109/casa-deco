/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['laromanatoponomastica.weebly.com',
            'it.wikipedia.org', 'upload.wikimedia.org', 'www.ciclostazionefrattini.it'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',

            },
        ],
    },
};

export default nextConfig;
