import SingleNumber from "./SingleNumber";

const NumbersList = ({data, deleter}) => {
    const deleteIt = deleter
    return (
        <div className="box">
            <h2>Losowo wygenerowane liczby</h2>
            <ul>
                {data.map(num => (
                    <SingleNumber num={num} deleter={deleteIt}></SingleNumber>
                ))}
            </ul>
        </div>
    )
}
export default NumbersList