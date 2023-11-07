import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(2)

  console.log(products)

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    data && setProducts(data.products)
  };

  const pagesNumber = products.length > 0 ? <div className="pages">
    <span className="arrow" onClick={() =>
      setPage(page => (page === 1) ? (products.length / 10) : page - 1)
    }>⬅️</span>
    <span >
      {
        [...Array(products.length / 10)].map((_, index) => (<span key={index} className="page_numbers" onClick={() => setPage(index + 1)}>{index + 1}</span>))
      }
    </span>
    <span className="arrow" onClick={() =>
      setPage(prev => (prev < products.length / 10) ? prev + 1 : 1)
    }>➡️</span>
  </div> : null

  useEffect(() => {
    fetchData()
  }, []);

  const displayData = products.length > 0
    ? <div className="product__container">{
      products.slice(page * 10 - 10, page * 10).map(item => {
        return <span className="product" key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <p >{item.title}</p>
        </span>
      })
    }</div>
    : null

  return <main>
    <div>{displayData}</div>
    <div>{pagesNumber}</div>
  </main>

};

export default App;
