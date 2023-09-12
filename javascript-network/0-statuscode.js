#!/usr/bin/node

if (process.argv.length !== 3) {
    console.error('Usage: node 0-statuscode.js <URL>');
    process.exit(1);
  }

// getting the url from the internet
const req = require('request');

const url = process.argv[2];

// accepting the api request
req.get(url, {encoding: 'utf-8'}).on('data', (data)=>{
    console.log(data)
}).on('error', (error)=>{
    console.log(error)
}).on('response', response => {
    console.log('code:', response.statusCode)
})
