const FormToDoData = ({text, update}) => {
    let currentDate = new Date().toJSON().slice(0, 10)
    return (
        <div>
            <label>When you would like to do it?</label>
            <input type="date" required value={text} onChange={(e) => update(e.target.value)} min={currentDate}/>
        </div>
    )
}
export default FormToDoData