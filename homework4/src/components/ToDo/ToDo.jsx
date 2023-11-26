import React from 'react';
import './ToDo.css'

const ToDo = ({todo}) => {
  return (
    <div>{ todo.id + '. '+todo.title}</div>
  )
}

export default ToDo