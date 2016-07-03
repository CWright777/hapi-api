"use strict";

module.exports = {
  connections: [
    {
      host: "localhost",
      port: 8000,
      labels: ["api"],
      routes: {
        cors: true
      }
    }
  ],
  registrations: [
    {
      plugin: {
        register: "dogwater",
        options: require("./db")
      }
    },
    {
      plugin: {
        register: 'bedwetter',
        options: {}
      }
    }, {
      plugin: {
        register: "hapi-routes",
        options: {
          dir: "api/routes"
        }
      }
    }
  ]
};
//{
    //{
      //"plugin": "dogwater",
      //"options": 

    //},
    //{
      //"plugin": "./api",
      //"options": {
        //"routes": {
          //"prefix": "/api"
        //}
      //}
    //},
    //{
      //"plugin": {
        //"register": "good",
        //"options": {
          //"ops": {
            //"interval": 60000
          //},
          //"reporters": {
            //"console": [
              //{
                //"module": "good-console",
                //"args": [
                  //{
                    //"events": {
                      //"response": "*"
                    //}
                  //}
                //]
              //},
              //"stdout"
            //]
          //}
        //}
      //}
    //}
  //]
//}
