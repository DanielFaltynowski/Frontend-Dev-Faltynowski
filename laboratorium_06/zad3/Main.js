import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "./ThemeContext";
import StrengthBar from "./StrengthBar";

const Main = () => {
    const context = useContext(ThemeContext)
    const [isLog, setIsLog] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [birth, setBirth] = useState('')
    const [image, setImage] = useState('')
    const [accept, setAccept] = useState(false)
    const [data, setData] = useState([])
    const [dis, setDis] = useState(true)
    const [showDetails, setShowDetails] = useState(false)
    const [popUp, setPopUp] = useState(context.logging)
    const [emailLog, setEmailLog] = useState('')
    const [passwordLog, setPasswordLog] = useState('')
    useEffect(() => {
        // aby fetch działał należy w konsoli wpisać komendę
        // npx json-server --watch src/dataBase.json --port 8000
        fetch('http://localhost:8000/data').then(response => response.json()).then(data => setData(data))
    }, [])
    useEffect(() => {
        if (email !== '' && password !== '' && name !== '' && lastname !== '' && birth !== '') {
            setDis(false)
        }
    }, [email, password, name, lastname, birth])
    const sumbition = (e) => {
        e.preventDefault()
        const newItem = {email, password, name, lastname, birth}
        // aby fetch działał należy w konsoli wpisać komendę
        // npx json-server --watch src/dataBase.json --port 8000
        fetch('http://localhost:8000/data', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newItem)
        }).then(() => {
            setShowDetails(true)
            setDis(true)
        })
    }
    const change = (email, password, e) => {
        e.preventDefault()
        const temp = data.filter(elem => email === elem.email && password === elem.password)
        if (temp.length > 0) {
            setPopUp(context.succes)
        } else {
            setPopUp(context.fail)
        }
    }
    return (
        <div className="content" style={{marginTop: "10px"}}>
            {isLog && (
                <div>
                    <div>
                        <button onClick={() => setIsLog(false)}>Create account</button>
                    </div>
                    <form onSubmit={(e) => change(emailLog, passwordLog, e)}>
                        <label>Email: </label>
                        <input type="email" required value={emailLog} onChange={(e) => setEmailLog(e.target.value)}/>
                        <label>Password: </label>
                        <input type="password" required value={passwordLog} onChange={(e) => setPasswordLog(e.target.value)}/>
                        <button>Log in</button>
                    </form>
                    <p>{popUp}</p>

                </div>
            )}
            {!isLog && (
                <div>
                    <div>
                        <button onClick={() => {
                            setIsLog(true)
                            setShowDetails(false)
                        }}>Log to your account</button>
                    </div>
                    <form onSubmit={sumbition}>
                        <div>
                            <label>Email: </label>
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

                        </div>
                        <div>
                            <StrengthBar password={password} setPassword={setPassword}></StrengthBar>

                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>

                        </div>
                        <div>
                            <label>Lastname: </label>
                            <input type="text" required value={lastname} onChange={(e) => setLastname(e.target.value)}/>

                        </div>
                        <div>
                            <label>Birth: </label>
                            <input type="date" required value={birth} onChange={(e) => setBirth(e.target.value)}/>

                        </div>
                        <button disabled={dis}>Sign in</button>
                    </form>
                </div>
            )}
            {showDetails && (
                <div>
                    <p>
                        <div>Email</div>
                        <div>{email}</div>
                    </p>
                    <p>
                        <div>Name</div>
                        <div>{name}</div>
                    </p>
                    <p>
                        <div>Lastname</div>
                        <div>{lastname}</div>
                    </p>
                </div>
            )}
        </div>
    )
}
export default Main