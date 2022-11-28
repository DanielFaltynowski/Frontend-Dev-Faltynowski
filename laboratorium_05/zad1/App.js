import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  function handler1() {
    setCount(count + 1);
  }
  function handler2() {
    setCount(count - 1);
  }

  useEffect(() => {
    window.addEventListener('click', handler1);
    window.addEventListener('contextmenu', handler2);
    return () => {
      window.removeEventListener('click', handler1);
      window.removeEventListener('contextmenu', handler2);
    };
  }, [count]);

  return (
      <div
          className="counter"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
      >
        <h2>Click mouse keys to change the value</h2>
        <h1>{count}</h1>
      </div>
  );
}

export default App;
