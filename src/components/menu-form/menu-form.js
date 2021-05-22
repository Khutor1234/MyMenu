/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';

import './menu-form.sass';

export default class MenuForm extends Component {
    
    render() {

        let elements;
        let id = 1;
        const {category} = this.props;

        if(category){
            elements = category.map((item) => {
                const {breakfast, lunch, dinner} = item;
                console.log('breakfast',breakfast);
                console.log('item: ', item);

                // for(let key in item){
                //     console.log(item[key])
                //     if(item[key]){
                //         return (
                //             <option >{item}</option>
                //         ); 
                //     }
                // }        
            });
        }
        


        return(
            <div className = "input-group menu-form">
                {<select className = "form-select">
                    <option selected>Прием еды</option>
                    {elements}
                </select>}
                <input type="text" className = "form-control"  placeholder='Порции'/>
                <button className = "btn btn-outline-secondary" 
                    type="button"
                    onClick = {() => this.props.onAdd('hhi')} 
                    >Добавить</button>
            </div>
        );
    };
};

