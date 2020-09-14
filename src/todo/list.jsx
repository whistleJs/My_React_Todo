import React from 'react';

import Item from './item';

function TodoList({ list, onToggleComplete }) {
  return (
    <div className="main__body flex column">
      {
        list.map((todoItem, key) => (
          <Item
            key={key}
            item={todoItem}
            onToggleComplete={() => onToggleComplete(key)}
          />
        ))
      }
    </div>
  )
}

export default TodoList;