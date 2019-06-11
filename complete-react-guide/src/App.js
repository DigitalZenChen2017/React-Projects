import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

// Functional-Based Component or "stateless" component
const App = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: 'Boris', age: 28},
        {name: 'Alan', age: 28},
        {name: 'Zhi', age: 29}
      ],
      otherState: 'some other value'
  });

  const [otherState] = useState('some other value');

  console.log(personsState, otherState);
  
  const switchNameHandler = (newName) => {
    // console.log("This button has been clicked!");
    // DONT DO THIS personsState.persons[0].name = 'Borisella';
    setPersonsState({
      persons: [
        {name: newName, age: 28},
        {name: 'Alan', age: 28},
        {name: 'Zhi', age: 34}
      ],
      otherState: otherState
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Boris', age: 28},
        {name: event.target.value, age: 28},
        {name: 'Zhi', age: 29}
      ],
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  const [ userState, setUsersState ] = useState({
    users: [
      {userName:'DigitalZenChen2017'},
      {userName:'developmentpowerlifter2019'},
      {userName:'bunsandguns25'}
    ],
    otherState: 'some other valuezzzz'
});

  // // Method to manipulate State
  // const userNameChangeHandler = () => {
  //   setUsersState({
  //     users: [
  //       {userName:'DigitalZenChen2019'},
  //       {userName:'DEVlifterfitness2025!'},
  //       {userName:'bunsandguns28'}
  //     ],
  //     otherState: 'some other valuezzzz'
  //   }
  // )
  // }
  
  // Method to manipulate State
  const inputChangeHandler = (event) => {
    setUsersState({
      users: [
        {userName: event.target.value},
        {userName: 'test'},
        {userName:'bunsandguns28'}
      ],
      otherState: 'some other valuezzzz'
    }
  )
  } 

  return (
    <div className="App">
      <h1>This is a React Application! I'm feeling good.</h1>
      <p>Awesome! This is really working.</p>
      <button 
        style={style}
        onClick={() => switchNameHandler('Borisella!!')}>Switch Name</button>
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age}/>
      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      click={switchNameHandler.bind(this, 'Boris!')}
      changed={nameChangedHandler}>My Hobbies: Racing</Person>
      <Person 
      name={personsState.persons[2].name}  
      age={personsState.persons[2].age}/>
      <UserInput
      changed={inputChangeHandler}/>
      <UserOutput
      userName={userState.users[0].userName}
      ></UserOutput>
      <UserOutput
      userName={userState.users[1].userName}
      ></UserOutput>
      <UserOutput
      userName={userState.users[2].userName}></UserOutput>
    </div>
    );
  }

export default App;