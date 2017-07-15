import React from 'react';
import ProductForm from './ProductForm';

const submit = (values) => {
    console.log(values)
};
const Product = () => {
  return (
      <div>
          <div>Your product details</div>
          <ProductForm onSubmit={submit}/>
      </div>

  );
};

export default Product;
