// healthclaimsfrontend/next.config.js
const withImages = require('next-images')
const withSass = require('next-sass')

module.exports = withImages(withSass({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://healthclaimsbackend.railway.internal/api/:path*'
      }
    ];
  }
}))
