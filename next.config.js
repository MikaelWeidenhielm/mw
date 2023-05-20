/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {


                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/MikaelWeidenhielm/site-content/main/images/**',
            }
        ]
    }
}

module.exports = nextConfig
