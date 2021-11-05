import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function Input(){
  return (
    <input type="text" id="name" name="name" required  size="10" />
  );
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
  const yo = useRef();
  
  function addText(){
    setText("wakanda")
  }
  return (<div>
            <Text name={text}/>
            <Input ref={yo} />
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
