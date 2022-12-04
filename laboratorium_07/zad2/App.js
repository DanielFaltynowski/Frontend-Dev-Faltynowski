import logo from './logo.svg';
import './App.css';
import {useFormik} from "formik";
import {useEffect, useState} from "react";

function App() {
  const [succes, setSucces] = useState(false)
  const [data, setData] = useState([])
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const temp = data.filter(elem => elem.email === formik.values.email && elem.password === formik.values.password)
      if (temp.length > 0) {
        setSucces(true)
      }
    }
  })
  useEffect(() => {
    fetch('http://localhost:8000/data').then(response => response.json()).then(gotData => setData(gotData))
  }, [])
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} style={{padding: "10px"}}>
        <label>Email: </label>
        <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>

        <label>Password: </label>
        <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>

        <button type="submit">Log in</button>
      </form>
      {succes && (<div>You're logged!</div>)}
    </div>
  );
}

export default App;
