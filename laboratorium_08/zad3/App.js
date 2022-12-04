import './App.css';
import {useState} from "react";
import Nav from "./Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";

function App() {
    const base = []
    for (let i = 1; i <= 15; i++) {
        base.push(`https://loremflickr.com/320/240?lock=${i}`)
    }
    const [dataBase, setDataBase] = useState(base)
  return (
      <BrowserRouter>
        <div className="App">
            <Nav></Nav>
            <Routes>
                <Route except path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
