import './App.css';
import React, { useState, useRef } from 'react';


class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = {text: "Please, enter the text."};
    this.handleChange = this.handleChange.bind(this) 
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }
  render() {
    return (
      <input type="text" value={this.state.text} onChange={this.handleChange}  size="10" />
    );
  }
}

function Text(pros) {
  return (
    <div className="blackBorder">
      {pros.name}
    </div>
  );
}

function TextBoard(){
  const [text, setText] = useState("Please, enter the text.");
  const inputRef = useRef();
  
  function addText(){
    setText(inputRef.current.state.text);
  }
  return (<div>
            <Text name={text}/>
            <Input ref={inputRef} />
            <button onClick={addText}>Add</button>
          </div>
  );
}

function App() {
  return (
    <div className="App">
      <TextBoard />
    </div>
  );
}

export default App;
