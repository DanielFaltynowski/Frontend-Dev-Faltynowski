import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const base = [
    {
      id: 1,
      email: "a@gmail.com",
      password: "qwerty"
    }
  ]
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [succes, setSucces] = useState('Insert email and password')
  const submit = (email, password, e) => {
      e.preventDefault()
    const temp = base.filter(obj => obj.email === email && obj.password === password)
    if (temp.length > 0) {
      setSucces("You're logged")
    } else {
      setSucces("Incorrect email or password")
    }
  }
  return (
    <div className="App" style={{marginTop: "15px"}}>
      <form onSubmit={(e) => submit(email, password, e)}>
          <label htmlFor="email">Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginRight: "15px"}}/>

          <label htmlFor="password">Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <button style={{marginLeft: "10px"}}>Log in</button>
      </form>
      <div style={{marginTop: "10px"}}>
        {succes}
      </div>
    </div>
  );
}

export default App;
