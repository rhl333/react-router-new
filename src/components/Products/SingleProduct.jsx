import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const SingleProduct = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error('something bad happened', response.status);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error, 'some error');
      }
    })(); // immidiate invocation.

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="single-products">
      {!products ? (
        <div>Loading...</div>
      ) : (
        products.map(({ id, name }) => {
          return <ProductCard key={id} id={id} name={name} />;
        })
      )}
    </div>
  );
};

export default SingleProduct;
