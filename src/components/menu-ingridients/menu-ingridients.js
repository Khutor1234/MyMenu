
import React from 'react';

import './menu-ingridients.sass';

// eslint-disable-next-line react/prop-types
const MenuIngridients = ({ingrid}) => {
    let elements;
        
    if(ingrid) {
        // eslint-disable-next-line react/prop-types
        elements = ingrid.map((item) => {
            const {name, weight, id} = item;

            return (
                // eslint-disable-next-line react/jsx-key
                <li key = {id} className = 'ingrid'>
                  	<div className = 'ingrid-name'>{name}</div> 
                  	<span className = 'ingrid-calc'>{weight} г</span>
                </li>
            );
        });
    };

    return(
        <ul className = "list-group list-group-flush menu-ingridients">
        	{elements}
      	</ul>
    )
}

export default MenuIngridients;