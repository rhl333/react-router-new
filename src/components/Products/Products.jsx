import React from 'react';
import { productStyles } from './Style';
import SingleProduct from './SingleProduct';
const Products = () => {
  return (
    <div className={productStyles}>
      <h2>Products Page</h2>
      <SingleProduct />
    </div>
  );
};

export default Products;
