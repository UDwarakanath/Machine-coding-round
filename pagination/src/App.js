import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([])

  console.log(products)

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    data && setProducts(data.products)

  };

  useEffect(() => {
    fetchData()
  }, []);

  const displayData = products.length > 0
  ? <div className="product__container">{
    products.map(item =>{
    return <span className="product"  key={item.id}>
      <img src={item.thumbnail} alt={item.title} />
      <p >{item.title}</p>
    </span>})
  }</div>
  : null

  return displayData

};

export default App;
