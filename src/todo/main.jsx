import _ from 'lodash';

import React, { useState, useEffect } from 'react';

import Header from './header';
import List from './list';
import Footer from './footer';

import './index.css';

function TodoMain() {
  const [todoList, setTodoList] = useState([]);

  // Mounted
  useEffect(() => {
    if (localStorage.todoList) {
      setTodoList(JSON.parse(localStorage.todoList));
    }
  }, [])

  // Create Todo Item
  const onCreateTodoItem = (todoName) => {
    if (todoName === '') return;

    let find = todoList.find(todoItem => todoItem.name === todoName);

    if (find) return;

    const list = [...todoList, { name: todoName, isComplete: false }];

    setTodoList(list);
    onSaveLocalStorage(list);

    alert('[알림] 성공적으로 할 일을 추가하였습니다.');
  }

  // Toggle Complete Todo Item
  const onToggleComplete = (index) => {
    let list = _.cloneDeep(todoList);
    list[index].isComplete = !list[index].isComplete;

    setTodoList(list);
    onSaveLocalStorage(list);
  }

  // On Save in Localstorage
  const onSaveLocalStorage = (list) => {
    localStorage.todoList = JSON.stringify(list);
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