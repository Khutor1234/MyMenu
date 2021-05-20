/* eslint-disable react/prop-types */
import React from 'react';

import MenuListItem from '../menu-list-item';
import './menu-list.css';

// eslint-disable-next-line react/prop-types
const MenuList = ({ todos }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <MenuListItem {...itemProps } />
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default MenuList;
