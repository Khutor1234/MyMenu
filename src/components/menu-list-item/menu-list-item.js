import React from 'react';

import MenuForm from '../menu-form';
import MenuIngridients from '../menu-ingridients';

import './menu-list-item.sass';

// eslint-disable-next-line react/prop-types
const MenuListItem = ({ label,recepie, ingridients }) => {

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

			<MenuForm />

		</div>
		
	);
};

export default MenuListItem;
