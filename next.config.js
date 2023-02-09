/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales:["tr","en"],
    defaultLocale:"en",
    // localeDetection:false
  }
}

module.exports = nextConfig
