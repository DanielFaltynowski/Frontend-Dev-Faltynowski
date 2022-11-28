import logo from './logo.svg';
import './App.css';
import {ContextBox} from "./ContextBox";
import {message} from "./Message";
import Main from "./Main";

function App() {
  return (
      <ContextBox.Provider value={message}>
        <div className="App">
            <Main></Main>
        </div>
      </ContextBox.Provider>
  );
}

export default App;
