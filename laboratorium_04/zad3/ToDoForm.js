import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import FormToDoItem from "./FormToDoItem";
import FormToDoData from "./FormToDoData";

const ToDoForm = ({data, update, dataUpdate = f => f}) => {
    let currentDate = new Date().toJSON().slice(0, 10)
    const [text, setText] = useState('')
    const [date, setDate] = useState(currentDate)
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const newEl = data
            newEl.push({id: uuidv4(), text: text, date: date})
            dataUpdate(newEl)
            // console.log(data)
        }}>
            <FormToDoItem text={text} update={setText}></FormToDoItem>
            <FormToDoData text={date} update={setDate}></FormToDoData>
            <button>Add</button>
        </form>
    )
}
export default ToDoForm