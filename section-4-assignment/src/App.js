import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  // listOfChars =
  //   this.state.userInput.map(letter) => {
  //     return <Char letter={letter} key={index}/>
  //   }
  // }

  // Creates a brand new array stores in charList and returns each character of the string
  render() {
  const charList = this.state.userInput.split('').map((ch, index) => {
    return <Char 
    character={ch} 
    key={index}
    clicked={() => this.deleteCharHandler(index)}/>;
  })

  return (
    <div className="App">
      <h1>Section 4: Conditionals and Lists Assignment</h1>
      <ol>
      <li>Create Input Field in AppComponent w/change listener that outputs length of entered text below (e.g. in a paragraph)
      </li>
      <li>Create New Component (=> ValidationComponent) which receives text length as a prop</li>
      <li>Inside the ValidationComponent, either output “Text too short” or “Text long enough” depending on the text length (e.g. take 5 as a minimum length).</li>
      <li>Create another component (CharComponent) and style it as an inline box</li>
      <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
      <li>When you click a CharComponent, it should be removed from the entered text!</li>
      </ol>
      <hr></hr>
      <input 
      type="text" 
      onChange={this.inputChangedHandler} 
      value={this.state.userInput}/>
      <Validation textLength={this.state.userInput.length}/>
      {charList}
    </div>
  );
}

}

export default App;