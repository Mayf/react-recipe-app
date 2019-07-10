import React from 'react';
import RecipeList from './RecipeList'
import Nav from './Nav'
import './RecipeApp.css';

class RecipeApp extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <RecipeList />
      </div>
    )
  }
}

export default RecipeApp;
