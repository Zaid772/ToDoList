import './App.css';
import { useState } from 'react';

const App = () => {

  const [list, setlist] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddList = () => {
    if (inputText.trim() !== '') {
      setlist([...list, inputText]);
      setInputText('');
    }
  };

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
      </div>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>

        ))}
      </ul>
    </div>
  );
}

export default App;
