const dbConfig = require('./db');

module.exports = {
  connections: [
    {
      host: 'localhost',
      port: 8000,
      labels: ['api'],
      routes: {
        cors: true,
      },
    },
  ],
  registrations: [
    {
      plugin: 'blipp',
    },
    {
      plugin: {
        register: 'dogwater',
        options: dbConfig,
      },
    },
    {
      plugin: {
        register: 'bedwetter',
        options: {},
      },
    }, {
      plugin: {
        register: 'hapi-routes',
        options: {
          dir: 'api/routes',
        },
      },
    },
  ],
};
