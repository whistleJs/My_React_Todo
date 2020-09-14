import React from 'react';

function TodoItem({ item, onToggleComplete }) {
  return (
    <div className="flex align-items-center main__item">
      <div
        className={`
          flex
          align-items-center
          justify-content-center
          main__item-checkbox
          ${item.isComplete ? 'checked' : ''}
        `}
        onClick={onToggleComplete}
      ></div>

      <div
        className={`
          main__item-name
          ${item.isComplete ? 'completed' : ''}
        `}>
        {item.name}
      </div>
    </div>
  )
}

export default TodoItem;