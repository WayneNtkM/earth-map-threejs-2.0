/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NINJAS_APIKEY: process.env.NINJAS_APIKEY,
    N2YO_APIKEY: process.env.N2YO_APIKEY,
  },
  compiler: {
    styledComponents: true
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
