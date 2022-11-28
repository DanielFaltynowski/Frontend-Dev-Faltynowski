import {useState} from "react";

const SingleNumber = ({num, deleter}) => {
    const show = num.value;
    const [changer, setChanger] = useState(true)
    const change = () => {
        if (changer) {
            setChanger(false);
        } else {
            setChanger(true);
        }
    }
    return (
        <li key={num.id}>
            {changer && <div>{show}</div>}
            {!changer && <div>{show.toString(2)}</div>}
            <button onClick={change}>Change</button>
            <button onClick={() => deleter(num.id)}>Delete</button>

        </li>
    )
}
export default SingleNumber;