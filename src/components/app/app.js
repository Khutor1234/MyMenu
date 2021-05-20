import React from 'react';

import MenuList from '../menu-list';

import './app.sass';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', recepie:'dsfdfsdf', ingridients: {a: 10, aa:3, aaa:2}, id: 1 },
    { label: 'Make Awesome App', recepie:'dsfdfsdf',ingridients: {b: 10, bb:3, bbb:2}, id: 2 },
    { label: 'Have a lunch', recepie:'dsfdfsdf',ingridients: {c: 10, cc:3, ccc:2}, id: 3 },
    { label: 'Drink Coffee', recepie:'dsfdfsdf', ingridients: {a: 10, aa:3, aaa:2, aaaa: 20}, id: 4 },
    { label: 'Drink Coffee', recepie:'dsfdfsdf', ingridients: {a: 10, aa:3, aaa:2, aaaa: 20}, id: 4 },
    { label: 'Drink Coffee', recepie:'dsfdfsdf', ingridients: {a: 10, aa:3, aaa:2, aaaa: 20}, id: 6 },
    { label: 'Drink Coffee', recepie:'dsfdfsdf', ingridients: {a: 10, aa:3, aaa:2, aaaa: 20}, id: 7 },
  ];

  return (
    <div className = 'menu-app'>
      <MenuList  todos={todoData} />
    </div>
  );
};

export default App;
