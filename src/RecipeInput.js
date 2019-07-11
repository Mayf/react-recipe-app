import React from 'react'
import './RecipeInput.css'

class RecipeInput extends React.Component {
    static defaultProps = {
        onClose() {},
        onSave() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            instructions: '',
            ingredients: [''],
            img:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleNewIngredient(event) {
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }

    handleChangeIng(event) {
        const index = Number(event.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing,i) => (
            i === index ? event.target.value : ing
        ));
        this.setState({ingredients});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title:'',
            instructions: '',
            ingredients: [''],
            img:''
        })
    }

    render() {
        const {title, instructions, ingredients, img} = this.state;
        const {onClose} = this.props;
        let inputs = ingredients.map((ing,i) => (
            <div
                className="recipe-form-line"
                key={`ingredient-${i}`}
            >
                <label>{i+1 + '. '}
                    <input 
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder="Ingredient"
                        onChange={this.handleChangeIng} />
                </label>
            </div>
        ))
        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >
                        X
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor='recipe-title-input'>Title</label>
                        <input 
                            id='recipe-title-input'
                            key='title'
                            name='title'
                            type='text'
                            value={title}
                            size={42}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    <label htmlFor='recipe-instructions-input' style={{marginTop: '5px'}}>Instructions</label>
                    <textarea
                        key='instructions'
                        id='recipe-instructions-input'
                        type='Instructions'
                        name='instructions'
                        rows='8'
                        cols='50'
                        autoComplete='off'
                        value={instructions}
                        onChange={this.handleChange}
                    />
                    {inputs}
                    <button 
                        type='button'
                        onClick={this.handleNewIngredient}
                        className='buttons'
                    >
                        +
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor='recipe-img-input'>Image Url</label>
                        <input 
                            id='recipe-img-input'
                            name='img'
                            type='text'
                            placeholder=''
                            value={img}
                            size={36}
                            autoComplete='off'
                            onChange={this.handleChange} />
                    </div>
                    <button 
                        type='submit'
                        style={{alignSelf: 'flex-end', marginRight: 0}}
						className='buttons'
                    >
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default RecipeInput