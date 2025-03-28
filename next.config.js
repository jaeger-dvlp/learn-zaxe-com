/* eslint-disable prefer-destructuring */
/** @type {import('next').NextConfig} */
const CDNURL_NEXTCONFIG = process.env.CDNURL_NEXTCONFIG;
const CDNURL = process.env.CDNURL;
const APIURL = process.env.APIURL;
const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    CDNURL,
    APIURL,
  },
  images: {
    domains: [CDNURL_NEXTCONFIG],
  },
  webpack: (config) => {
    const newConf = config;
    newConf.plugins = config.plugins || [];
    newConf.optimization.providedExports = true;
    newConf.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return newConf;
  },
};

module.exports = nextConfig;
