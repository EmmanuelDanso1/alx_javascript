#!/usr/bin/node
// script that prints the number of movies
// where the character “Wedge Antilles” is present
const request = require('request');

// Checking if the API URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node wedge_antilles_movies.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Defining a function to fetch data from the API
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

// Main function to count the number of movies with Wedge Antilles
async function specificNameWedgeAntillesMovies() {
  try {
    const filmsData = await fetchData(apiUrl);
    // getting data

    if (filmsData.results) {
      const moviesWithWedgeAntilles = filmsData.results.filter((film) => {
        return film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/');
      });

      console.log(`${moviesWithWedgeAntilles.length}`);
    } else {
      console.log('No film data found in the API.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// executng main function
specificNameWedgeAntillesMovies();
