import _ from 'lodash';

import React, { useState } from 'react';

import Header from './header';
import List from './list';
import Footer from './footer';

import './index.css';

function TodoMain() {
  const [todoList, setTodoList] = useState([{ id: 1, name: 'test', isComplete: false }, { id: 2, name: 'test2', isComplete: true }]);

  // Create Todo Item
  const onCreateTodoItem = (todoName) => {
    if (todoName === '') return;

    let find = todoList.find(todoItem => todoItem.name === todoName);

    if (find) return;

    const list = [...todoList, { name: todoName, isComplete: false }];

    setTodoList(list);

    alert('[알림] 성공적으로 할 일을 추가하였습니다.');
  }

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

      <Footer
        onCreate={onCreateTodoItem}
      />
    </div>
  )
}

export default TodoMain;