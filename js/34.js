const student = {
  name: 'Davide',
  number: '123456'
}
  
Object.defineProperty(student, 'birthday', {
  enumerable: true,
  writable: true,
  value: '4th July'
})

console.log(Object.keys(student)) 
// [ 'name', 'number', 'birthday' ]
console.log(student.birthday) 
// 4th July

student.birthday = 'Another date'
console.log(student.birthday)
// Another date


