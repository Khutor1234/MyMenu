import React from 'react';

// eslint-disable-next-line react/prop-types
const AddText = ({onRecipeChange, value}) =>{
    return(
        <input type = 'text' 
            className = 'form-control' 
            placeholder = 'Рецепт'
            onChange = {onRecipeChange}
            value = {value} >
        </input>
    )
};

export default AddText;

