#!/usr/bin/node

const req = require('request');

if (process.argv.length !== 3) {
    console.error('Usage: node 0-statuscode.js <URL>');
    process.exit(1);
  }

const url = process.argv[2];
console.log(url)

const specificMovieId = 18;

req.get(url, (error, response, movie) => {
    if (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  
    if (response.statusCode !== 200) {
      console.error(`Error: Status code ${response.statusCode}`);
      process.exit(1);
    }
    try {
        const dataResults =JSON.parse(movie).results;
        console.log(dataResults)
        const movieWithSpecificId = dataResults.filter((movie) =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/films/${specificMovieId}/`)
        );
        console.log(movieWithSpecificId)
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
      process.exit(1);
    }
  });


