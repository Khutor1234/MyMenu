/* eslint-disable react/prop-types */
import React, { Component } from 'react';
 
import './add-new-recipe.sass';

export default class AddNewRecipe extends Component{

    state = {
        label: ''
    }


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddNewRecipe(this.state.label);
        this.setState({
            label: ''
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
                <button className = 'btn btn-outline-secondary'>Добавить рецепт</button>
            </form>
        )
    }
}