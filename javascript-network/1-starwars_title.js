#!/usr/bin/node
const requests = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 0-statuscode.js <URL>');
    process.exit(1);
  }

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

requests.get(url, {encoding:'utf-8'}).on('data', (data) =>{
    //  console.log(data)
    const object = JSON.parse(data)
     console.log(object.title);
    
})
 