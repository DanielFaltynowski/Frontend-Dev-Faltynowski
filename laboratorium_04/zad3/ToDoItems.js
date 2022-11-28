import {useState} from "react";
import ToDoForm from "./ToDoForm";

const ToDoItems = () => {
    const [todo,setTodo] = useState([])
    const done = (id) => {
        const newList = todo.filter(elem => elem.id !== id)
        setTodo(newList)
    }
    const add = (value) => {
        setTodo(value)
    }
    const updateTodo = (changer, value) => {
        changer(value)
    }
    console.log(todo)
    return(
        <div className="content">
            <h2>To Do List</h2>
            <ol>
                {todo.map(elem => (
                    <li key={elem.id}>
                        <div>{elem.text}</div>
                        <button onClick={() => done(elem.id)}>Done</button>
                    </li>
                ))}
            </ol>
            <ToDoForm data={todo} update={updateTodo} dataUpdate={add}></ToDoForm>
        </div>
    )
}
export default ToDoItems;