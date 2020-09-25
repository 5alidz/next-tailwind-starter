const withOffline = require('next-offline');
const workboxConfig = require('./next-workbox-config');

const GlobalConfig = {
  pwaEnabled: false,
  darkModeEnabled: false,
};

const NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = !GlobalConfig.pwaEnabled
  ? NextConfig
  : withOffline({
      ...NextConfig,
      workboxOpts: workboxConfig.config,
      async rewrites() {
        return [workboxConfig.rewrites];
      },
    });
