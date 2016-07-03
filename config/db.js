module.exports = {
  knex: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 5432
    },
    plugins: ['registry'],
    models: '../api/models'
      //collections: '../path/to/collections/directory',
      //base: {
        //model: require('../"ath/to/model/base'), // optional 
        //collection: require('../path/to/collection/base') // optional 
      //}
  }
}
