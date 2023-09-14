#!/usr/bin/node
// nested functions in closure

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
    // creating an array for the student
    const students = [];
    // iterating over the numberOfStudents a for loop
    for (let i = 0; i < numberOfStudents; i++) {
      const student = studentSeat(i + 1);
      students.push(student());
    }
  
    return students;
  }
  
  // Creating a closure classRoom by calling createClassRoom with 10 students
  const classRoom = createClassRoom(10);
  
  console.log(classRoom);
  