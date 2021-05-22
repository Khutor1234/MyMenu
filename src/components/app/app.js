import React, { Component } from 'react';

import MenuList from '../menu-list';
import MyRecipes from '../my-recipes';
import AddNewRecipe from '../add-new-recipe';

import './app.sass';

export default class App extends Component {

	idMenu = 1;
	idIngrid = 1000000;

    state = {
		menuData : [
			this.createMenuItem('Омлет', 'Пожарить яйца', 
				[this.createMenuIngrid('Помидор', 300),
				this.createMenuIngrid('Яйца', 10),
				this.createMenuIngrid('Сыр',250)], 
				[{breakfast: false, lunch: true, dinner: true}]
				),
			this.createMenuItem('Рис', 'Стушить рис', 
				[this.createMenuIngrid('Рис', 200),
				this.createMenuIngrid('Мясо', 100),
				this.createMenuIngrid('Сыр',50)], 
				[{breakfast: true, lunch: true, dinner: true}]
				),
			this.createMenuItem('Суп', 'Сварить овощи', 
				[this.createMenuIngrid('Картофель', 100),
				this.createMenuIngrid('Перец', 100),
				this.createMenuIngrid('Морковь',50)], 
				[{breakfast: true, lunch: false, dinner: true}]
				),
		],
		myMenuData: [],
		ingridData: {
			'огурец': 200,
			'морковь': 300, 
			'филе курицы': 500,
			'яблоко': 20,
		}
    }

	createMenuItem(label, recipe, ingridients, category){
		return {
			label, 
			recipe, 
			ingridients, 
			category,
			id: this.idMenu++
		}	
	}

	createMenuIngrid(name, weight){
		return{
			name,
			weight,
			id: this.idIngrid++
		}
	}



	addItem = (text) => {
		console.log(text, 'dsfdsf');
	}

	AddNewRec = (text, recipe) => {

		const newItem = this.createMenuItem(text, recipe);

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
				{/* <AddNewRecipe
					onAddNewRecipe = {this.AddNewRec} /> */}
				<MyRecipes/>
			</div>
		);
	}
};


