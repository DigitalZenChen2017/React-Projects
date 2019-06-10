import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

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

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    // console.log("This button has been clicked!");
    // DONT DO THIS personsState.persons[0].name = 'Borisella';
    setPersonsState({
      persons: [
        {name: 'Borisella', age: 28},
        {name: 'Alan', age: 28},
        {name: 'Zhi', age: 34}
      ],
      otherState: setOtherState
    });
  };

  return (
    <div className="App">
      <h1>This is a React Application! I'm feeling good.</h1>
      <p>Awesome! This is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name}  age={personsState.persons[2].age}/>
    </div>
    );
  }

export default App;