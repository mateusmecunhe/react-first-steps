import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet'

function App() {

    
  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }


  return (
    <div className="app">
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      <Tweet />

    </div>
  );
}

export default App;
