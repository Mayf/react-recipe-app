import React from 'react'
import Recipe from './Recipe'
import PropTypes from 'prop-types'
import './RecipeList.css'


class RecipeList extends React.Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.Object)
    }
    render() {
        const {onDelete} = this.props;
        const recipeList = this.props.recipes.map((r,index) => <Recipe key = {r.id} {...r} onDelete={onDelete} />)
        return(
            <div className="recipe-list">
              {recipeList}
            </div>
        )
    }
}

export default RecipeList;