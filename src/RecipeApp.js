import React from 'react';
import RecipeList from './RecipeList'
import Nav from './Nav'
import RecipeInput from './RecipeInput'
import './RecipeApp.css';

class RecipeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: 'Spaghetti',
          ingredients: ['flour', 'water'],
          instructions: 'MIX IT',
          img: 'spaghetti.jpg'
        },
        {
          id: 2,
          title: 'Milkshake',
          ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
          instructions: 'Combine ice cream and milk. Blend until creamy.',
          img: 'milkshake.jpg'
        },
        {
          id: 3,
          title: 'Avocado Toast',
          ingredients: ['2 slices of bread', '1 avocado','pepper'],
          instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.',
          img: 'avocado-toast.jpg'
        }
      ],
      nextRecipeId: 3,
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes} />
      </div>
    )
  }
}

export default RecipeApp;
