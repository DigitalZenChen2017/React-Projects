import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>I'm in the Username Output Component</p>
    </div>
  )
};

export default userOutput;