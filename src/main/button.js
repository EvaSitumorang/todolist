import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const Button = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Todo List</h1>
      <button type="button" onClick={() => setShow(!show)}>
        {show === true ? 'Cancel' : 'Add Now'}
      </button>
      {show && <TodoList />}
    </div>
  );
};

export default Button;
