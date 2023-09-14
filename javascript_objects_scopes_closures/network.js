#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = `https://swapi.dev/api/people/${id}`;

req.get(url, {encoding:'utf-8'}).on('data', (data)=>{
    // console.log(data); 
    const object = JSON.parse(data);
    console.log(object)
}).on('error',(error)=>{
    console.log(error);
}).on('response', (response)=>{
    console.log('status code:', response.statusCode)
})