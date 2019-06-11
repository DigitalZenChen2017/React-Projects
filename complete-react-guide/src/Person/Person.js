import React from 'react';

// Functional Component
// Stateless or "Dumb" or "Presentational" Component
const person = (props) => {
  return (
  <div>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
  </div>
  )
};

export default person;