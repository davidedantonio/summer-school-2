function Mammal (name) {
  this.name = name
}

Mammal.prototype.introduceYourself = function () {
  console.log(`Hello I'm a ${this.type} and my name is: ${this.name}`)
}

function Cat (name) {
  this.type = 'cat'
  this.noise = 'meow'
  Mammal.call(this, name)
}

Cat.prototype.meow = function () {
  console.log(`Io ${this.noise}: MEEEEOOOOW`)
}

Object.setPrototypeOf(Cat.prototype, Mammal.prototype)

function Dog (name) {
  this.type = 'dog'
  this.noise = 'bark'
  
  Mammal.call(this, name)
}

Dog.prototype.woof = function () {
  console.log(`Io ${this.noise}: WOOF WOOF`)
}

Object.setPrototypeOf(Dog.prototype, Mammal.prototype)

const fuffy = new Cat('Fuffy')
fuffy.introduceYourself()
fuffy.meow()

const bobby = new Dog('Bobby')
bobby.introduceYourself()
bobby.woof()



typeof class Mammal {} // "function"