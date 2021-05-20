/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';

import './menu-form.sass';

export default class MenuForm extends Component {
    
    render() {

        const {category} = this.props;
        const elements = category.map((item) => {

            return (
                <option value={item}>{item}</option>
            );
        });

        return(
            <div className = "input-group menu-form">
                {<select className = "form-select">
                    <option selected>Прием еды</option>
                    {elements}
                </select>}
                <input type="text" className = "form-control"  placeholder='Порции'/>
                <button className = "btn btn-outline-secondary" 
                    type="button"
                    onClick = {() => {console.log('hello')}} 
                    >Добавить</button>
            </div>
        );
    };
};

