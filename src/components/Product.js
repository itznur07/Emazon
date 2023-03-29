import React from "react";

const Product = ({ product , cartHandler}) => {
  return (
    <div className='w-80 border border-slate-300'>
      <img className='w-80' src={product.img} alt={product.name} />
      <div className='px-3 py-3'>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
        <div>
          <p>Seller: {product.seller}</p>
          <p>Reating: {product.reating}</p>
        </div>
      </div>
      <div className='text-center py-3'>
        <button onClick={() => cartHandler(product)} className='bg-orange-500 text-white py-2 px-5'>
          Add to cart
        </button>
        
      </div>
    </div>
  );
};

export default Product;
