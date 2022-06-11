import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from './Component';

let propCount = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));
const propButton = document.getElementById('btn-prop');
const countButton = document.getElementById('btn-count');

propButton.addEventListener('click', function (e) {
  e.preventDefault();
  propCount++;
  renderComponent();
});

function renderComponent() {
  root.render(<Component
      propCount={propCount}
      element={countButton}
    />);
}

renderComponent();