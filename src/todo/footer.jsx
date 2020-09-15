import React, { useState, useEffect } from 'react';

import './index.css';

function TodoFooter({ onCreate }) {
  const [isOpenCreatePopup, setIsOpenCreatePopup] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState(false);
  const [name, setName] = useState('');

  // Mounted
  useEffect(() => {
    const onCloseForESC = (event) => {
      let { keyCode } = event;

      if (keyCode === 27) {
        setIsOpenCreatePopup(false);
        setName('');
      }
    }

    window.addEventListener('keydown', onCloseForESC);

    return () => {
      window.removeEventListener('keydown', onCloseForESC);
    }
  }, []);

  // On Toggle Create Popup Open & Close
  const onToggleCreatePopup = () => {
    const value = !isOpenCreatePopup;

    setIsOpenCreatePopup(value);

    if (!value) {
      setName('');
    }
  }

  // On Focus Input
  const onFocusInput = () => {
    setIsFocusInput(true);
  }

  // On Focus Blur
  const onBlurInput = () => {
    setIsFocusInput(false);
  }

  // On Input Value
  const onChangeValue = (event) => {
    setName(event.target.value);
  }

  // On Create Item
  const onCreateItem = (event) => {
    const { type, keyCode } = event;

    if (type === 'click' || (type === 'keydown' && keyCode === 13)) {
      onCreate(name);
      setName('');
    }
  }

  return (
    <div className="main__footer">
      <div
        className={`
          main__footer-popup
          ${isOpenCreatePopup ? 'show' : ''}
        `}
      >
        <div
          className={`
            flex
            column
            justify-content-between
            main__footer-popup-body
          `}
        >
          <div
            className={`
              main__footer-input
              ${isFocusInput ? 'focus' : ''}
            `}
          >
            <input
              placeholder="할 일을 입력해주세요."
              value={name}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
              onChange={onChangeValue}
              onKeyDown={onCreateItem}
            />
          </div>

          <div
            className={`
              flex
              align-items-center
              justify-content-center
              main__footer-popup-button
            `}
            onClick={onCreateItem}
          >
            추가하기
          </div>
        </div>
      </div>

      <div
        className={`
          flex
          align-items-center
          justify-content-center
          main__footer-create-button
          ${isOpenCreatePopup ? 'active' : ''}
        `}
        onClick={onToggleCreatePopup}
      ></div>
    </div>
  )
}

export default TodoFooter;