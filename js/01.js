var teacher = 'Davide';
var twitter = '@davidedantonio';
var age = '38';

function whoAmI (myName, myNickname, myAge) {
  console.log(`
    Hello, I'm ${myName} (aka ${myNickname}),
    and I'm ${myAge} years old!
  `)
}

whoAmI(teacher, twitter, age);