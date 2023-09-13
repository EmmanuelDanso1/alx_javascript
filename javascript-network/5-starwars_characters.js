#!/bin/usr/node
// script that prints all characters of a Star Wars movie
const request = require('request');

// Check if the Movie ID is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node star_wars_characters.js <Movie_ID>');
  process.exit(1);
}

const id = process.argv[2];

// Define the base URL for the Star Wars API
const apiUrl = `https://swapi.dev/api/films/${id}/`;

// Define a function to fetch data from the API
function fetchData(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

// Main function to print all character names for the specified movie
async function characterNames() {
  try {
    const movieData = await fetchData(apiUrl);

    if (movieData.characters) {
      for (const characterUrl of movieData.characters) {
        const characterData = await fetchData(characterUrl);
        console.log(characterData.name);
      }
    } else {
      console.log('No character data found for this movie.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Run the main function
characterNames();
