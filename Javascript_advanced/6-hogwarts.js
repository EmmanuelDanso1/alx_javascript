#!/usr/bin/node
// private methods with closure

const studentHogwarts = () => {
    // Private variables
    let privateScore = 0;
    let name = null;
  
    // Private method to change the score
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    // Public methods accessible via the returned object
    return {
      setName: (newName) => {
        name = newName;
      },
      rewardStudent: () => {
        changeScoreBy(1);
      },
      penalizeStudent: () => {
        changeScoreBy(-1);
      },
      getScore: () => {
        return `${name}: ${privateScore}`;
      },
    };
  };
  
  // Create an instance of studentHogwarts for Harry
  const harry = studentHogwarts();
  harry.setName("Harry");
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); 
  
  // Create an instance of studentHogwarts for Draco
  const draco = studentHogwarts();
  draco.setName("Draco");
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); 
  