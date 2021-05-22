import React from 'react';

// eslint-disable-next-line react/prop-types
const AddIngrid = ({onIngridChange, onWeightChange, valueWeight, valueIngrid}) => {
    return(
        <div className = 'add-new-recipe_ingrid'>
            <input type = 'text' 
                className = 'form-control' 
                placeholder = 'Название ингридиента'
                onChange = {onIngridChange}
                value = {valueIngrid} ></input>
            <input type = 'text' 
                className = 'form-control' 
                placeholder = 'Кол-во'
                onChange = {onWeightChange}
                value = {valueWeight} ></input> 
            <div className = 'add-new-recipe_gram'>грамм</div>
    </div>
    )
}

export default AddIngrid;