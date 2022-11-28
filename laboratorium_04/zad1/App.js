import {useState} from "react";

function App() {
  const [l1, setL1] = useState(0)
  const [l2, setL2] = useState(0)

    const add1 = () => {
      setL1(l1 + 1)
    }
    const get1 = () => {
      setL1(l1 - 1)
    }
  const add3 = () => {
    setL2(l2 + 3)
  }
  const get3 = () => {
    setL2(l2 - 3)
  }
  return (
    <div className="App">
      <div>{l1}</div>
      <div>{l2}</div>
        <button onClick={add1}>+1</button>
        <button onClick={get1}>-1</button>
        <button onClick={add3}>+3</button>
        <button onClick={get3}>-3</button>
    </div>
  );
}

export default App;
