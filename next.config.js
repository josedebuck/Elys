/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.comnpm"]
    }
}

module.exports = nextConfig
