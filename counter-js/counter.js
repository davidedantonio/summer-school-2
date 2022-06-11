let state = 0;
let propCount = 0;
let propCountDoubled = 0;

function renderComponent () {
  document.getElementById(
    "root"
  ).innerHTML = `State ${state} Prop: ${propCount} Prop Doubled: ${propCountDoubled}`;
}

function incrementPropCount (e) {
  e.preventDefault();
  propCount++;
  propCountDoubled = propCount * 2;

  renderComponent();
}

function incrementState (e) {
  e.preventDefault();
  state++;

  renderComponent();
}

document
  .getElementById("btn-prop")
  .addEventListener("click", incrementPropCount);
document.getElementById("btn-count").addEventListener("click", incrementState);

renderComponent();
