const students = [ 'Davide', ...'Paolo' ];

for (let i = 0; i < students.length; i++) {
  greetStudent(students[i]);
}

for (const student of students) {
  greetStudent(student);
}


