/* eslint-disable react/prop-types */
import React from 'react';

import MenuListItem from '../menu-list-item';
import './menu-list.sass';

// eslint-disable-next-line react/prop-types
const MenuList = ({ menu }) => {

  const elements = menu.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <MenuListItem {...itemProps } />
      </li>
    );
  });

  return (
    <ul className = 'menu-list'>
      { elements }
    </ul>
  );
};

export default MenuList;
