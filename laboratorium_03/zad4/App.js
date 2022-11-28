import './App.css';
import Multiple from './Multiple';
import JSXRules from './JSXRules';

function App() {
  return (
    <div className="App">
      <JSXRules text="lorem ipsum dolor..."/>
      <Multiple name="Generowanie podpunktów" number={15}></Multiple>
    </div>
  );
}

export default App;
