import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  // API CALLING
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.title}</td>
              <td>₹{prod.price}</td>
              <td>{prod.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
