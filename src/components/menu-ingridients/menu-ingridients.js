import React from 'react';

import './menu-ingridients.sass';

// eslint-disable-next-line react/prop-types
const MenuIngridients = ({ingrid}) => {

    const elem = Object.entries(ingrid);

    // eslint-disable-next-line react/prop-types
    const elements = elem.map((item) => {

        return (
          // eslint-disable-next-line react/jsx-key
          <li >
            <div>{item[0]}</div> 
            <span>{item[1]} г</span>
          </li>
        );
      });

    return(
        <ul className = "list-group list-group-flush menu-ingridients">
			{elements}
		</ul>
    )
}

export default MenuIngridients;