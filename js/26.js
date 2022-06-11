if (!!studensInputElement.value) {
  numStudents = Number(studensInputElement.value);
}

while (newStudents.length > 0) {
  enrolledStudents(newStudents.pop());
}

