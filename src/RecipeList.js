import React from 'react'
import Recipe from './Recipe'
import PropTypes from 'prop-types'
import './RecipeList.css'


class RecipeList extends React.Component {
    static defaultProps = { 
        recipes: [{
            title: 'Spaghetti',
            ingredients: ['flour', 'water'],
            instructions: 'MIX IT',
            img: 'spaghetti.jpg'
          },{
            title: 'Milkshake',
            ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
            instructions: 'Combine ice cream and milk. Blend until creamy.',
            img: 'milkshake.jpg'
          },{
            title: 'Avocado Toast',
            ingredients: ['2 slices of bread', '1 avocado','pepper'],
            instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.',
            img: 'avocado-toast.jpg'
        }]
      }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.Object)
    }
    render() {
        const recipeList = this.props.recipes.map((r,index) => <Recipe key = {index} {...r}/>)
        return(
            <div class="recipe-list">
              {recipeList}
            </div>
        )
    }
}

export default RecipeList;