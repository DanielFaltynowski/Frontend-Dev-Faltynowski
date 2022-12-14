import './App.css';
import {useFormik} from "formik";
import {useState} from "react";

function App() {
    const [send, setSend] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            nationality: '',
            pass: ''
        },
        onSubmit: () => {
            const pullObject = {
                name: formik.values.name,
                email: formik.values.email,
                password: formik.values.password,
                nationality: formik.values.nationality,
                pass: formik.values.pass
            }
            fetch('http://localhost:8000/data', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pullObject),
            })
            setSend(true)
            setDisabledButton(true)
        }
    })
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
          <div className="box">
              <label>Name:</label>
              <input required id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>
          <div className="box">
              <label>Email:</label>
              <input required id="email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>
          <div className="box">
              <label>Password:</label>
              <input required id="password" name="password" type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>
          <div className="box">
              <label>Nationality:</label>
              <div className="x">
                  <div>
                    <input id="nationality" name="nationality" type="radio" value={formik.values.nationality} onChange={() => {
                        formik.values.nationality = 'Polish'
                    }} onBlur={formik.handleBlur}/><div>Polish</div>
                  </div>
                  <div>
                    <input id="nationality" name="nationality" type="radio" value={formik.values.nationality} onChange={() => {
                        formik.values.nationality = 'English'
                    }} onBlur={formik.handleBlur}/><div>English</div>
                  </div>
                  <div>
                    <input id="nationality" name="nationality" type="radio" value={formik.values.nationality} onChange={() => {
                        formik.values.nationality = 'Spanish'
                    }} onBlur={formik.handleBlur}/><div>Spanish</div>
                  </div>
              </div>
          </div>
          <div className="pass">
              <label>Agree:</label>
              <input id="pass" name="pass" type="checkbox" value={formik.values.pass} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>
          <button disabled={disabledButton} type="submit">Submit</button>
      </form>
        <button onClick={formik.handleReset}>Reset</button>
        {send && (
            <div className="table">
                <div className="seq">
                    <div>Name</div>
                    <div>{formik.values.name}</div>
                </div>
                <div className="seq">
                    <div>Email</div>
                    <div>{formik.values.email}</div>
                </div>
                <div className="seq">
                    <div>Password</div>
                    <div>{formik.values.password}</div>
                </div>
                <div className="seq">
                    <div>Nationality</div>
                    <div>{formik.values.nationality}</div>
                </div>
                <div className="seq">
                    <div>Agree</div>
                    {formik.values.pass && <div className="res">yes</div>}
                    {!formik.values.pass && <div className="res">no</div>}
                </div>
            </div>
        )}
    </div>
  );
}

export default App;
