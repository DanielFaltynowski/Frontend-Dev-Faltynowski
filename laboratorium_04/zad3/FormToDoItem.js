import {useState} from "react";

const FormToDoItem = ({text, update}) => {
    return (
        <div>
            <label>Insert what to do!</label>
            <input type="text" required value={text} onChange={(e) => update(e.target.value)}/>
        </div>
    )
}
export default FormToDoItem