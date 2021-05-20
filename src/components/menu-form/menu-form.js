import React from 'react';

import './menu-form.sass';

const MenuForm = () => {
    return(
        <div className = "input-group menu-form">
            <select className = "form-select">
                <option selected>Прием еды</option>
                <option value="1">Завтрак</option>
                <option value="2">Обед</option>
                <option value="3">Ужин</option>
            </select>
            <input type="text" className = "form-control"  placeholder='Порции'/>
            <button className = "btn btn-outline-secondary" type="button">Добавить</button>
        </div>
    )
}

export default MenuForm;