/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import MenuForm from '../menu-form';
import MenuIngridients from '../menu-ingridients';

import './menu-list-item.sass';

export default class MenuListItem extends Component {

	state = {
		img: true,
	}

	onToggleImg = () => {
		this.setState({
			img: !this.state.img
		})
	}

	render() {
		const { label,recipe, ingridients, category, onAdd } = this.props;
		const {img} = this.state;
	
		let toggleImg = <div>img</div>
		if(!img){
			toggleImg = <div><p className = "card-text">{recipe}</p></div>
		}

		return (
			<div className = 'menu-list-item'>
				<div className = 'card'>
					<div className = 'cover'
						onClick = {this.onToggleImg}>
						{toggleImg}
					</div>
					<div className = "card-body">
						<h5 className = "card-title">{label}</h5>
					</div>

					<MenuIngridients ingrid = {ingridients} />
				</div>

				<MenuForm 
					category = {category}
					onAdd = {onAdd} />

			</div>
			
		);
	}
};

