/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';

import './menu-form.sass';

export default class MenuForm extends Component {
    
    render() {

        let element = [];
        let id = 1;
        const {category} = this.props;

        for (let key in category) {
            if(category[key]){
                element.push(key);
            };
        };

        const elements = element.map((item) => {
            if(item == 'breakfast'){
                item = 'Завтрак';
            } ;
            if(item == 'lunch'){
                item = 'Обед';
            };
            if(item == 'dinner'){
                item = 'Ужин';
            };

            return (
                <option key = {id++} value = {item} >{item}</option>
            );
        });


        return(
            <div className = "input-group menu-form">
                <select className = "form-select">
                    <option selected>Прием еды</option>
                    {elements}
                </select>
                <input type="text" className = "form-control"  placeholder='Порции'/>
                <button className = "btn btn-outline-secondary" 
                    type="button"
                    onClick = {() => this.props.onAdd('hhi')} 
                    >Добавить</button>
            </div>
        );
    };
};

