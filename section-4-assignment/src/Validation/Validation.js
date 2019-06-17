import React from 'react';
import './Validation.css';

const Validation = (props) => {
  let validationMessage = 'Text long enough!!! :)'

  if(props.textLength < 5) {
    validationMessage = "Text is too short!";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
};

export default Validation;