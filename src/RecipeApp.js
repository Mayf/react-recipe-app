import React from 'react';
import Recipe from './Recipe'
import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe title='pasta' ingredients={['flower','water']} />
    </div>
  );
}

export default RecipeApp;
