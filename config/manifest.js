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
    //{
      //plugin: "hapi-config"
    //},
    {
      plugin: {
        register: "hapi-bookshelf-models",
        options: require("./db")
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
