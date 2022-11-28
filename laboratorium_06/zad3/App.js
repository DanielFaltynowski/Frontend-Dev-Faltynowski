import './App.css';
import {createContext, useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {messages} from "./Messages";
import Main from "./Main";

function App() {
  return (
      <ThemeContext.Provider value={messages}>
        <div className="App">
            <Main></Main>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
