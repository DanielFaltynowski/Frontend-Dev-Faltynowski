import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


const Nav = ({data, setIt}) => {
    const [items, setItems] = useState(data)
    const [count, setCount] = useState(21)
    const [title, setTitle] = useState('title')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('desc')
    const [category, setCategory] = useState('category')
    const [image, setImage] = useState(undefined)
    const [rating, setRating] = useState({})

    const handlePush = (e) => {
        e.preventDefault();
        // const temp = data
        // temp.push({id: count, title:title, price: price, description:description, category:category, image:image, rating:rating})
        // setIt(temp)
        // setItems(temp)
        // setCount(count + 1)
        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: count, title, price, description, category, image, rating})
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw Error('could not push the data')
                }
            })
            .then(data => {
                setIt(data)
                setCount(count + 1)
            })
        console.log(data)
    }

    return (
        <form onSubmit={handlePush}>
            <label>Title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

            <label>Price:</label>
            <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)}/>

            <label>Description:</label>
            <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)}/>

            <label>Category:</label>
            <input type="text" required value={category} onChange={(e) => setCategory(e.target.value)}/>

            <label>Image:</label>
            <input type="url" value={image} onChange={(e) => setImage(e.target.value)}/>

            <button>Dodaj</button>
        </form>
    )
}
export default Nav