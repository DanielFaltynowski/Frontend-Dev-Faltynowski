import {useContext, useState} from "react";
import {message} from "./Message";
import {ContextBox} from "./ContextBox";

const Main = () => {
    const [dataBase, setDataBase] = useState([])
    const context = useContext(ContextBox)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [popUp, setPopUp] = useState(context.untilLogging)
    // aby fetch działał należy w konsoli wpisać komendę
    fetch("http://localhost:8000/data").then(response => response.json()).then(data => setDataBase(data))
    const change = (email, password, e) => {
        e.preventDefault()
        const temp = dataBase.filter(elem => email === elem.email && password === elem.password)
        if (temp.length > 0) {
            setPopUp(context.afterLoggingSucces)
        } else {
            setPopUp(context.afterLoggingFailure)
        }
    }
    return (
        <div className="content" style={{
            marginTop: "10px"
        }}>
            <form onSubmit={(e) => change(email, password, e)}>
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button>Log in</button>
            </form>
            <p>{popUp}</p>
        </div>
    )
}
export default Main