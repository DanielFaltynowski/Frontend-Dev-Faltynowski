import './App.css';
import {useState} from "react";
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom'
import Add from "./Add";
import Sub from "./Sub";
import Mul from "./Mul";
import Div from "./Div";
import NotFound from "./NotFound";


function App() {

  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/add" element={<Add />}></Route>

                <Route path="/sub" element={<Sub />}></Route>

                <Route path="/mul" element={<Mul />}></Route>

                <Route path="/div" element={<Div />}></Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>

      </BrowserRouter>
  );
}

export default App;
