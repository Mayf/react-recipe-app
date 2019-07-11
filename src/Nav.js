import React from 'react'
import './Nav.css'

class Nav extends React.Component {
    static defaultProps = {
        onNewRecipe() {}
    }
    render() {
        return (
            <header>
                <h2><a href='#top'>Recipe App</a></h2>
                <nav>
                    <li><a href='#top' onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li><a href='#top'>Home</a></li>
                    <li><a href='#top'>About</a></li>
                    <li><a href='#top'>Contact Us</a></li>
                </nav>
            </header>       
        )
    }
}

export default Nav;