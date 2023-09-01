import './App.css';
import { useState } from 'react';
function App() {

  const[inputText,setInputText] = useState("");

  const changeHandler = (event) => {
    setInputText(event.target.value)
  }

  return (
    <div className="App">
      <h1> My To do List!</h1>
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
