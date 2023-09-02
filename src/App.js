import './App.css';
import { useState } from 'react';

const App = () => {

  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddList = () => {
    if (inputText.trim() !== '') {
      setList([...list, inputText]);
      setInputText('');
    }
  };

  const handleRemove = (index) => {
    let newListArray = [...list];
    newListArray.splice(index, 1);
      setList(newListArray);
  }

  return (
    <div>
      <h1>My To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddList}>Add...</button>
        <button onClick={handleRemove}>Remove</button>
   ,   </div>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
