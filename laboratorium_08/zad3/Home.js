import {useEffect, useState} from "react";
import lodash from 'lodash'
import RandomPhoto from "./RandomPhoto";

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [los, setLos] = useState(0)
    const [rand, setRand] = useState(lodash.random(0, 4))
    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
                setLos(data[rand])
            })
    }, [])
    const left = () => {
        setRand(rand - 1)
        setLos(data[rand])
    }
    const right = () => {
        setRand(rand + 1)
        setLos(data[rand])
    }
    return (
        <div className="home">
            {loading && <div className="loading">Loading...</div> }
            {!loading && <RandomPhoto photo={los} changeLeft={left} changeRight={right}></RandomPhoto>}
        </div>
    )
}
export default Home