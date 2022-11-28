import './App.css';
import {useEffect, useState} from "react";
import List from "./List";
import Nav from "./Nav";

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
      const aborcja = new AbortController();
      fetch('https://fakestoreapi.com/products', {signal: aborcja.signal})
          .then(response => {
              if (!response.ok) {
                  throw Error('could not fetch the data')
              }
              return response.json();
          })
          .then(data => {
              setProducts(data)
          })
          .catch(error => {
              if (error.name === 'AbortError') {
                  console.log('fetch aborted')
              } else {
                  console.log(error.message)
              }
          })
      return () => aborcja.abort();
  }, [])
  return (
    <div className="App">
        <Nav data={products} setIt={setProducts}></Nav>
        <List data={products}></List>
    </div>
  );
}

export default App;
