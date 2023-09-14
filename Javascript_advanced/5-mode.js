#!/usr/bin/node
// changes mode of background to specific mode color

function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    // Creating closures for different modes
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    // Adding a paragraph and buttons to the body
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    document.body.appendChild(spookyButton);
  
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    document.body.appendChild(darkModeButton);
  
    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    document.body.appendChild(screamModeButton);
  
    // Adding event listeners to change the mode when buttons are clicked
    spookyButton.addEventListener('click', spooky);
    darkModeButton.addEventListener('click', darkMode);
    screamModeButton.addEventListener('click', screamMode);
  }
  
  // Calling the main function to set up the page
  main();
  