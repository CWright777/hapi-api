const bedwetterOptions = {};

exports.routes = (server) => {
  server.route([
    {
      // return all message items
      path: '/message',
      method: 'GET',
      config: {
        handler: {
          bedwetter: bedwetterOptions,
        },
      },
    }, {
      // return a specific message by id
      path: '/user/{id}/message',
      method: 'GET',
      config: {
        handler: {
          bedwetter: bedwetterOptions,
        },
      },
    }, {
      // create a new message
      path: '/user/{id}/message',
      method: 'POST',
      config: {
        handler: {
          bedwetter: bedwetterOptions,
        },
      },
    //}, {
      //udpate an existing message by id
      //path: '/user/{id}/messages/{childId}',
      //method: ['PATCH', 'POST'],
      //config: {
        //handler: {
          //bedwetter: bedwetterOptions
        //}
      //}
    //}, {
      //// remove a message by id
      //path: '/user/{id}/message/{childId}',
      //method: 'DELETE',
      //config: {
        //handler: {
          //bedwetter: bedwetterOptions
        //}
      //}
    },
  ]);
};
