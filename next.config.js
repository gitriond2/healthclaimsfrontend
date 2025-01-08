// healthclaimsfrontend/next.config.js
const withImages = require('next-images')

module.exports = withImages({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://healthclaimsbackend.railway.internal/api/:path*'
      }
    ];
  }
})


