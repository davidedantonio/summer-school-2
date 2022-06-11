import ReactDOM from 'react-dom/client';
import { Component } from './Component';

const root = ReactDOM.createRoot(document.getElementById('root'));
let propCount = 0;

const elementCount = document.getElementById('btn-count');
const propElement = document.getElementById('btn-prop');

propElement.addEventListener('click', () => {
  propCount++;
  renderComponet();
})

function renderComponet() {
  root.render(<Component
    propCount={propCount}
    element={elementCount}
  />)
}

renderComponet();