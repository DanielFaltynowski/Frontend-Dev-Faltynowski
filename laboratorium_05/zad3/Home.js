import {useEffect, useState} from "react";
import NumbersList from "./NumbersList";

const Home = () => {
    const [liczby, setLiczby] = useState([])
    const generator = () => {
        const newLiczby = []
        for (let i = 1; i <= 10; i++) {
            const number = Math.floor(Math.random() * 100)
            const temp = {
                id: i,
                value: number
            }
            newLiczby.push(temp)
        }
        setLiczby(newLiczby)
    }
    const deleter = (id) => {
        const newList = liczby.filter(num => num.id !== id)
        console.log(newList)
        setLiczby(newList)
    }
    useEffect(() => {
        window.addEventListener('contextmenu', generator);
        return () => {
            window.removeEventListener('contextmenu', generator);
        };
    }, [liczby]);
    return (
        <div className="content">
            <NumbersList data={liczby} deleter={deleter}></NumbersList>
        </div>
    )
}
export default Home;