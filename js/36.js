function introduceYourself () {
  console.log(`My name is ${this.name}`);
}

const person = { name: 'Paul' };
introduceYourself.call(person);
// My name is Paul

