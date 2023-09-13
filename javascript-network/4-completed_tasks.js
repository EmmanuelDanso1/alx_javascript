#!/usr/bin/node

const request = require('request');

// Check if the API URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrlFetching = process.argv[2];

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

// Main function to compute the number of completed tasks by user ID
async function completedTasks() {
  try {
    const todos = await fetchData(apiUrlFetching);

    // Initialize an object to store the count of completed tasks per user
    const completedTasks = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasks[todo.userId]) {
          completedTasks[todo.userId]++;
        } else {
          completedTasks[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasks);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Runing the main function
completedTasks();
