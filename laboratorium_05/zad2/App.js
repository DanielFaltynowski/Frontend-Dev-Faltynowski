import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [position, setPosition] = useState({})
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({x: event.clientX, y: event.clientY})
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener(
          'mousemove',
          handleMouseMove
      )
    }
  }, [])
  return (
    <div className="App">
      <div>X-axis: {position.x}</div>
      <div>Y-axis: {position.y}</div>
    </div>
  );
}

export default App;
