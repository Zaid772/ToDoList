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
      setList([...list, { text: inputText, completed: false}]);
      setInputText('');
    }
  };

  const handleRemove = (index) => {
    let newListArray = [...list];
    newListArray.splice(index, 1);
      setList(newListArray);
  }

  const handleComplete = (index) => {
    let newListArray = [...list];
    newListArray[index].completed = true;
    setList(newListArray);
  }

  const completedMessage = " ----> Completed :)" 

  return (
    <div className='App'>
      <div className='header'>
      <h1>My To-Do-List</h1>
      </div>
      <div className='content'>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className='bar'
        />
        <button onClick={handleAddList} className='add'>Add...</button>
        <button onClick={handleRemove} className='remove'>Remove</button>
      </div>
      <ul className='list'>
        {list.map((todo, index) => (
          <li key={index}>
            {todo.text}
            {todo.completed ? (
              <span>
                {completedMessage}
                <button onClick={() => handleRemove(index)} className='listRemove' >Remove</button>
              </span>
            ) : (
              <button onClick={() => handleComplete(index)} className='complete'>Complete</button>
            )}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
