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
        options: require("../config/db")
      }
    }
    //{
      //plugin: {
        //register: "hapi-bookshelf-models",
        //options: { knex: require("../db/knexfile.js") }
      //}
    //},{
      //plugin: {
        //register: 'bedwetter',
        //options: {} 
      //}
    //}
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
