import React, { Component } from 'react';

import MenuList from '../menu-list';
import MyRecipes from '../my-recipes';
import AddNewRecipe from '../add-new-recipe';

import './app.sass';

export default class App extends Component {

	maxId = 1;

    state = {
		menuData : [
			this.createTodoItem('Омлет', 'Пожарить яйца', {Яйца: 10, Помидор:300, Лук:200}, ['Завтрак', 'Ужин']),
			this.createTodoItem('Суп', 'В воду кинуть овощи', {Картофель: 100, Лук:3, Морковь:2},['Обед', 'Ужин']),
			this.createTodoItem('Рис', 'Стушить рис', {Рис: 100, Морковь:30, Филе:200},['Завтрак'])
		  ]
    }

	createTodoItem(label, recepie, ingridients, category){
		return {
			label, 
			recepie, 
			ingridients, 
			category,
			id: this.maxId++
		}	
	}


	addItem = (text) => {
		console.log(text);
	}

	AddNewRec = (text) => {
		console.log(text);
		const newItem = this.createTodoItem(text, 'Пожарить яйца', {Яйца: 10, Помидор:300, Лук:200}, ['Завтрак', 'Ужин']);

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


