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
        { id: 'bc69', name: 'Boris', age: 28},
        { id: 'ac28', name: 'Alan', age: 28},
        { id: 'zwvu18', name: 'Zhi', age: 29}
      ],
      otherState: 'some other value',
      showPersons: false
  });

  const [otherState] = useState('some other value');

  console.log(personsState, otherState);
  
  const  deletePersonHandler = (personIndex) => {
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons]; // SPREAD OPERATOR - creates copy of original array
    persons.splice(personIndex, 1);
    setPersonsState({persons: persons});
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Boris', age: 28},
        {name: event.target.value, age: 28},
        {name: 'Zhi', age: 29}
      ],
    });
  }

  const [showState, setShowState] = useState(false);

  const togglePersonsHandler = () => {
    setShowState(!showState);
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
  const inputChangedHandler = (event) => {
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
  
  let persons = null;

  // Outputting Lists in React
  if (showState) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => { 
          return <Person 
            name={person.name} 
            age={person.age}
            click={() => deletePersonHandler(index)}
            key={person.id}/>
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>This is a React Application! I'm feeling good.</h1>
      <p>Awesome! This is really working.</p>
      <button 
        style={style}
        onClick={togglePersonsHandler}>Toggle Show State</button>
      {persons}
      <UserInput
      changed={inputChangedHandler}
      currentName={userState.users[0].userName}/>
      <UserOutput
      userName={userState.users[0].userName}/>
      <UserOutput
      userName={userState.users[1].userName}/>
      <UserOutput
      userName={userState.users[2].userName}/>
    </div>
    );
  }

export default App;