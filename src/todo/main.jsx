import _ from 'lodash';

import React, { useState } from 'react';

import Header from './header';
import List from './list';

import './index.css';

function TodoMain() {
  const [todoList, setTodoList] = useState([{ id: 1, name: 'test', isComplete: false }, { id: 2, name: 'test2', isComplete: true }]);

  // Toggle Complete Todo Item
  const onToggleComplete = (index) => {
    let list = _.cloneDeep(todoList);
    list[index].isComplete = !list[index].isComplete;

    setTodoList(list);
  }

  return (
    <div className="main flex column">
      <Header />

      <List
        list={todoList}
        onToggleComplete={onToggleComplete}
      />
    </div>
  )
}

export default TodoMain;