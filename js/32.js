const obj = {
  birthday: '2nd July'
}

const student = {
  name: 'Davide',
  number: '123456',
  birthday: '3rd July'
}

Object.assign(obj, student, {
  birthday: '4th July'
})

console.log(obj)
// { name: 'Davide', number: '123456', birthday: '4th July' }


