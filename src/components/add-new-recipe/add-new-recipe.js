/* eslint-disable react/prop-types */
import React, { Component } from 'react';
 
import './add-new-recipe.sass';

export default class AddNewRecipe extends Component{

    state = {
        label: '',
        recipe: '',
        ingridientName: '',
        ingridientWeight: ''
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

    onIngridChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ingridientName: e.target.value
        })
    }

    onWeightChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ingridientWeight: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddNewRecipe(this.state.label, this.state.recipe, this.state.ingridientName, this.state.ingridientWeight);
        this.setState({
            label: '',
            recipe: '',
            ingridientName: '',
            ingridientWeight: ''
        });
    };

    render() {
        return(
            <div className = 'add-new-recipe'>
                <h1>Добавить новый рецепт</h1>
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
                    <div>Введите ингридиенты:</div>
                    <div className = 'add-new-recipe_ingrid'>
                        <input type = 'text' 
                            className = 'form-control' 
                            placeholder = 'Название ингридиента'
                            onChange = {this.onIngridChange}
                            value = {this.state.ingridientName} ></input>
                        <input type = 'text' 
                            className = 'form-control' 
                            placeholder = 'Кол-во'
                            onChange = {this.onWeightChange}
                            value = {this.state.ingridientWeight} ></input> 
                        <div className = 'add-new-recipe_gram'>грамм</div>
                    </div>
                    <div className = 'add-new-recipe_cross'>
                            <span></span>
                            <span></span>
                    </div>
                    <button className = 'btn btn-outline-secondary'>Добавить рецепт</button>
                </form>
            </div> 
        );
    };
}