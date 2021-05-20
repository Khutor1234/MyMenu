/* eslint-disable react/prop-types */
import React, { Component } from 'react';
 
import './add-new-recipe.sass';

export default class AddNewRecipe extends Component{

    render() {
        return(
            <div >
                <input type = 'text' 
                    className = 'form-control' 
                    placeholder = 'Название' ></input>
                <button className = 'btn btn-outline-secondary'
                    // eslint-disable-next-line react/prop-types
                    onClick = {() => this.props.onAddNewRecipe('dsdfsd')} >Добавить рецепт</button>
            </div>
        )
    }
}