#!/usr/bin/node
const requests = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 0-statuscode.js <URL>');
    process.exit(1);
  }

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

requests.get(url, (error, response, data) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }
  try {
    const object = JSON.parse(data);
    console.log(object.title);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
    process.exit(1);
  }
});
