#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Checking if the URL and file path are provided as arguments
if (process.argv.length !== 4) {
  console.error('Usage: node fetch_and_store.js <URL> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Sending a GET request to the provided URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  // Writing the response body to the specified file
  fs.writeFile(filePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error('Error writing to file:', writeError.message);
      process.exit(1);
    }

    console.log(`Contents of ${url} have been saved to ${filePath}`);
  });
});
