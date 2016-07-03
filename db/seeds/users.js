
exports.seed = function(knex, Promise) {
  return knex('users').insert([{
    first_name: 'Joe',
    last_name: 'Smith',
    email: 'jsmith@test.net',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    first_name: 'Mike',
    last_name: 'Danner',
    email: 'mdanner@test.net',
    created_at: new Date(),
    updated_at: new Date()
  
  }]);
};
