import React from 'react';

import MenuList from '../menu-list';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', recepie:'dsfdfsdf', id: 1 },
    { label: 'Make Awesome App', recepie:'dsfdfsdf', id: 2 },
    { label: 'Have a lunch', recepie:'dsfdfsdf', id: 3 }
  ];

  return (
    <div>
      <MenuList todos={todoData} />
    </div>
  );
};

export default App;
