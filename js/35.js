function introduceYourself () {
  console.log(`My name is ${this.name}`)
}

const person1 = { 
  name: 'Paul',
  introduceYourself: introduceYourself
};

const person2 = {
  name: 'Steve',
  introduceYourself: introduceYourself
};

person1.introduceYourself();
person2.introduceYourself();


