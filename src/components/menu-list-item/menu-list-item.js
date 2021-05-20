/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import MenuForm from '../menu-form';
import MenuIngridients from '../menu-ingridients';

import './menu-list-item.sass';

export default class MenuListItem extends Component {

	render() {
		const { label,recepie, ingridients, category } = this.props;
	
		return (
			<div className = 'menu-list-item'>
				<div className = 'card'>
					<div className = 'img'>img</div>
					<div className = "card-body">
						<h5 className = "card-title">{label}</h5>
						<p className = "card-text">{recepie}</p>
					</div>

					<MenuIngridients ingrid = {ingridients} />
				</div>

				<MenuForm category = {category}/>

			</div>
			
		);
	}
};

