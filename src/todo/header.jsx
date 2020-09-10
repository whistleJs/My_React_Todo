import moment from 'moment';
import 'moment/locale/ko';

import React, { useState, useEffect } from 'react';

import './index.css';

function TodoHeader() {
  const [Today, setToday] = useState(moment);

  // mounted
  useEffect(() => {
    // 날짜 갱신
    const timeInterval = setInterval(() => {
      setToday(moment());
    }, 1000 * 60);

    return () => {
      clearInterval(timeInterval);
    }
  });

  return (
    <div className="main__header flex align-items-center justify-content-between">
      {/* Date */}
      <div className="main__header-date flex align-items-center">
        <div className="main__header-date-day flex align-items-center">
          {Today.format('DD')}
        </div>

        <div className="flex column">
          <div className="main__header-date-month flex align-items-center">
            {Today.format('MMMM')}
          </div>
          <div className="main__header-date-year flex align-items-center">
            {Today.format('YYYY')}
          </div>
        </div>
      </div>
      {/* //Date */}

      <div className="main__header-week">
        {Today.format('dddd')}
      </div>
    </div>
  )
}

export default TodoHeader;