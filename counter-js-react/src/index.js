import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Component';

let propCount = 0
const root = ReactDOM.createRoot(document.getElementById('root'));

document.getElementById("btn-prop").addEventListener("click", () => {
  propCount++
  renderComponent();
});


function renderComponent () {
  root.render(
    <Component 
      propCount={propCount}
      buttonElem={document.getElementById('btn-count')}
    />
  );
}

renderComponent();
