
module.exports = {
  adapters:{
     postgresql: 'sails-postgresql'
  },
  connections: {
    postgresql : {
      adapter: 'postgresql',
        database: process.env.DB_NAME,
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: 5432,
        poolSize: 10,
        ssl: false
    }
  },
  models: [require("../api/models/user.js")]
}
