const timeRemaining = function (timeElapsed, endTime) {
  return endTime - timeElapsed;
}

const time = timeRemaining(42, 240);
console.log(time); // 198

