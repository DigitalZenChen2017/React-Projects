import React from 'react';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>My Username is: {props.userName}</p>
      <p>I'm in the Username Output Component</p>
    </div>
  )
};

export default UserOutput;