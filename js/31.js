const obj = {}
const student = {
  name: 'Davide',
  number: '123456'
}

Object.assign(obj, student, {
  birthday: '4th July'
})

console.log(obj)
// { name: 'Davide', number: '123456', birthday: '4th July' }

