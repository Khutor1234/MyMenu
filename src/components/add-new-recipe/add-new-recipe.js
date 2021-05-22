/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import AddName from './add-name';
import AddText from './add-text';
import AddIngrid from './add-ingrid';
import AddCheck from './add-check';
 
import './add-new-recipe.sass';

export default class AddNewRecipe extends Component{

    id = 0;

    state = {
        label: '',
        recipe: '',
        ingridientName: '',
        ingridientWeight: '',
        count: 0,
        breakfast: false, 
        lunch: false, 
        dinner: false,
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

    onCheck = (e) =>{
        console.log(e.target.value);
        const {name, value, type, checked} = e.target;
        console.log('name',name, 'value', value, 'type', type, 'chec', checked);

        console.log(name, checked)
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    AddIngrid = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAddNewRecipe(this.state.label, this.state.recipe, this.state.ingridientName, this.state.ingridientWeight, this.state.breakfast, this.state.lunch, this.state.dinner);
        this.setState({
            label: '',
            recipe: '',
            ingridientName: '',
            ingridientWeight: ''
        });
    };

    render() {
        const {count} = this.state;


        return(
            <div className = 'add-new-recipe'>
                <h1>Добавить новый рецепт</h1>
                <form onSubmit = {this.onSubmit}>
                    <AddName 
                        onLabelChange = {this.onLabelChange} 
                        value = {this.state.label}/>
                    <AddText 
                        onRecipeChange = {this.onRecipeChange} 
                        value = {this.state.recipe}/>
                    <div>Введите ингридиенты:</div>
                    <AddIngrid 
                        onIngridChange = {this.onIngridChange}
                        onWeightChange = {this.onWeightChange}
                        valueIngrid = {this.state.ingridientName}
                        valueWeight = {this.state.ingridientWeight} />
                    <div className = 'add-new-recipe_cross'
                        onClick = {this.AddIngrid}>
                            <span></span>
                            <span></span>
                    </div>
                    <AddCheck 
                        onCheck = {this.onCheck} 
                        checkedBreakfast = {this.state.breakfast}
                        checkedDinner = {this.state.dinner}
                        checkedLunch = {this.state.lunch} />
                    <button className = 'btn btn-outline-secondary'>Добавить рецепт</button>
                </form>
            </div> 
        );
    };
}