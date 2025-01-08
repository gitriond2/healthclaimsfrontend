module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://healthclaimsbackend.railway.internal/api/:path*'
        }
      ];
    }
  };
  