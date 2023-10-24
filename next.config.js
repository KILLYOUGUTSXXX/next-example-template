/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  env: {
    APPNAME: process.env.APP_NAME
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
