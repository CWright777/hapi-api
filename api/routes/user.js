var bedwetterOptions = {}

exports.routes = (server) => {
  server.route([
    {
      // return all user items
      path: '/user',
      method: 'GET',
      config: {
        handler: {
          bedwetter: bedwetterOptions
        }
      }
    }, {
      // return a specific user by id
      path: '/user/{id}',
      method: 'GET',
      config: {
        handler: {
          bedwetter: bedwetterOptions
        }
      }
    }, {
      // create a new user
      path: '/user',
      method: 'POST',
      config: {
        handler: {
          bedwetter: bedwetterOptions
        }
      }
    }, {
      // udpate an existing user by id
      path: '/user/{id}',
      method: ['PATCH', 'POST'],
      config: {
        handler: {
          bedwetter: bedwetterOptions
        }
      }
    }, {
      // remove a user by id
      path: '/user/{id}',
      method: 'DELETE',
      config: {
        handler: {
          bedwetter: bedwetterOptions
        }
      }
    }
  ])
};
