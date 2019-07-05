import React from 'react'

class Recipe extends React.Component {
    render() {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing,index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div>
                <div>Recipe {title}</div>
                <ul>
                    {ingredients}
                </ul>
                
            </div>
        );
    }
}

export default Recipe;