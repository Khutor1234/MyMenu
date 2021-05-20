import React from 'react';

import './menu-list-item.css';

// eslint-disable-next-line react/prop-types
const MenuListItem = ({ label,recepie }) => {

  return (
    <span>
      <span>
        {label}
      </span>

      <div>{recepie}</div>
    </span>
  );
};

export default MenuListItem;
