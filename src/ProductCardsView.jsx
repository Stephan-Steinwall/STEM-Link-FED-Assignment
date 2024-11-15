import React from 'react';
import ProductCard from './ProductCard';

const ProductCardsView = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          path={product.path}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductCardsView;



