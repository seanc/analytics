module.exports = require('rc')('analytics', {
  token: '',
  rethink: {
    host: 'localhost',
    port: 28015,
    db: 'analytics'
  }
});
