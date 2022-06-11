let tesla = 'MODEL S'

function printModels() {
  let f8 = 'F8 Tributo'
  
  if (f8 === 'F8 Tributo') {
    let monza = 'Monza SP2'
  }

  console.log(f8) // F8 Tributo
  console.log(tesla) // MODEL S
  console.log(monza) // Reference Error
}

console.log(tesla) // MODEL S
printModels()

