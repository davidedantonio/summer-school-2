const tesla = 'MODEL S'

function printModels() {
  const f8 = 'F8 Tributo'
  
  if (f8 === 'F8 Tributo') {
    const monza = 'Monza SP2'
  }

  console.log(f8)
  console.log(monza) // ReferenceError: monza is not defined
}

console.log(tesla)
printModels()


