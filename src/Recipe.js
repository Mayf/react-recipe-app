import React from 'react'
import './Recipe.css'

class Recipe extends React.Component {
    render() {
        const {title, img, instructions, id, onDelete} = this.props;
        const ingredients = this.props.ingredients.map((ing,index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={img} alt={title} />  
                </div>
                
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                    <button onClick={() => onDelete(id)} type="button">delete</button>       
                </div>

                   
            </div>
        );
    }
}

export default Recipe;