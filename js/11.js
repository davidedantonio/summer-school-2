const students = [ 'Davide', ...'Paolo' ];

while (students.length > 0) {
  let student = students.pop();
  greetStudent(student);
}

