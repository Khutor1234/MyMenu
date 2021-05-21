/* eslint-disable react/prop-types */
import React, { Component } from 'react';
 
import './add-new-recipe.sass';

export default class AddNewRecipe extends Component{

    state = {
        label: '',
        recipe: ''
    }


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onRecipeChange= (e) => {
        this.setState({
            recipe: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddNewRecipe(this.state.label, this.state.recipe);
        this.setState({
            label: '',
            recipe: ''
        });
    };

    render() {
        return(
            <form
                onSubmit = {this.onSubmit} >
                <input type = 'text' 
                    className = 'form-control' 
                    placeholder = 'Название'
                    onChange = {this.onLabelChange}
                    value = {this.state.label} ></input>
                <input type = 'text' 
                    className = 'form-control' 
                    placeholder = 'Рецепт'
                    onChange = {this.onRecipeChange}
                    value = {this.state.recipe} ></input>
                <button className = 'btn btn-outline-secondary'>Добавить рецепт</button>
            </form>
        )
    }
}