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
		  ],
		myMenuData: [],
		ingridData: {
			'огурец': 200,
			'морковь': 300, 
			'филе курицы': 500,
			'яблоко': 20,
		}
    }

	createTodoItem(label, recipe, ingridients, category){
		return {
			label, 
			recipe, 
			ingridients, 
			category,
			id: this.maxId++
		}	
	}


	addItem = (text) => {
		console.log(text, 'dsfdsf');
	}

	AddNewRec = (text, recipe, ingridientName, ingridientWeight) => {

		const newItem = this.createTodoItem(text, recipe, {ingridientName: ingridientWeight}, ['Завтрак', 'Ужин']);

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


