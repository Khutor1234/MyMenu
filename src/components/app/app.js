import React, { Component } from 'react';

import MenuList from '../menu-list';
import MyRecipes from '../my-recipes';
import AddNewRecipe from '../add-new-recipe';

import './app.sass';

export default class App extends Component {

	maxId = 100;

    state = {
		menuData : [
			{ label: 'Омлет', recepie:'Пожарить яйца', ingridients: {Яйца: 10, Помидор:300, Лук:200}, category:['Завтрак', 'Ужин'], id: 1 },
			{ label: 'Суп', recepie:'В воду кинуть овощи',ingridients: {Картофель: 100, Лук:3, Морковь:2},category:['Обед', 'Ужин'], id: 2 },
			{ label: 'Рис', recepie:'Стушить рис',ingridients: {Рис: 100, Морковь:30, Филе:200},category:['Завтрак'], id: 3 },
		  ]
    }


	addItem = (text) => {
		console.log(text);
	}

	AddNewRec = (text) => {
		console.log(text);
		const newItem = {
			label: 'Рис', 
			recepie:'Стушить рис',
			ingridients: {Рис: 100, Морковь:30, Филе:200},
			category:['Завтрак'], 
			id: this.maxId++
		};

		console.log(this.maxId);

		this.setState(({menuData}) => {
			const newArr = [
				...menuData,
				newItem
			];
			return{
				menuData: newArr
			}
		});
	};

	render() {
		return (
			<div className = 'menu-app'>
				<MenuList  
					menu={this.state.menuData}
					onAdd = {this.addItem} />
				<AddNewRecipe
					onAddNewRecipe = {this.AddNewRec} />
				<MyRecipes/>
			</div>
		);
	}
};


