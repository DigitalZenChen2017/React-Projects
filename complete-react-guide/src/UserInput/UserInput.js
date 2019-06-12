import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const inputStyle = {
    font: 'inherit',
    border: '1px solid #eee',
    boxShadow: '0 5px 5px #ccc',
    padding: '7px',
    cursor: 'pointer'
  }
  return (
    <div>
      Username: 
      <input
      style={inputStyle} 
      type="text" 
      onChange={props.changed} 
      value={props.currentName}/>
    </div>
  )
};

export default userInput;