import React, { Component } from 'react';

import MenuList from '../menu-list';
import MyRecipes from '../my-recipes';

import './app.sass';

export default class App extends Component {

    state = {
		menuData : [
			{ label: 'Омлет', recepie:'Пожарить яйца', ingridients: {Яйца: 10, Помидор:300, Лук:200}, category:['Завтрак', 'Ужин'], id: 1 },
			{ label: 'Суп', recepie:'В воду кинуть овощи',ingridients: {Картофель: 100, Лук:3, Морковь:2},category:['Обед', 'Ужин'], id: 2 },
			{ label: 'Рис', recepie:'Стушить рис',ingridients: {Рис: 100, Морковь:30, Филе:200},category:['Завтрак'], id: 3 },
		  ]
    }

	render() {
		return (
			<div className = 'menu-app'>
				<MenuList  menu={this.state.menuData} />
				<MyRecipes/>
			</div>
		);
	}
};


