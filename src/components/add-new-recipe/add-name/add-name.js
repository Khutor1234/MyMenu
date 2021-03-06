import React from 'react';

// eslint-disable-next-line react/prop-types
const AddName = ({onLabelChange, value}) => {

    return(
        <input type = 'text' 
            className = 'form-control' 
            placeholder = 'Название'
            onChange = {onLabelChange}
            value = {value} >
        </input>
    )
}

export default AddName;