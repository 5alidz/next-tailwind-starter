module.exports = {
  config: {
    swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  rewrites: {
    source: '/service-worker.js',
    destination: '/_next/static/service-worker.js',
  },
};
