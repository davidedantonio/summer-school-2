import Component from "./Component.js";
import { render } from "./react.js";

const propBtn = document.getElementById('btn-prop');
const countBtn = document.getElementById('btn-count');

let propCount = 0;

propBtn.addEventListener('click', function() {
  propCount++;
  renderComponent();
});

function renderComponent () {
  render(
    Component,
    { 
      propCount: propCount,
      element: countBtn
    },
    document.getElementById('root')
  );
}

renderComponent();