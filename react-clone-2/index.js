import { render } from "./react.js";
import Component from "./Component.js"

let countProp = 0;

document.getElementById('btn-prop').addEventListener('click', function () {
  countProp++;
  renderComponent();
});

function renderComponent () {
  render(
    Component,
    { countProp, btn: document.getElementById('btn-count') },
    document.getElementById('root')
  )
}

renderComponent();