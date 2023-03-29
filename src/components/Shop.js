import React, { useEffect, useState } from "react";
import Product from "./Product";

const Shop = () => {
  // products state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  // Data loading
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const cartHandler = (product) => {
    const newCarts = [];
    newCarts.push(product);

  };

  return (
    <>
      <div className='grid grid-cols-12'>
        {/* products here */}
        <div className='col-span-10 md:flex items-center justify-between md:mx-20 mt-20'>
          {products.slice(0, 3).map((product) => (
            <Product
              key={product?.id}
              cartHandler={cartHandler}
              product={product}
            />
          ))}
        </div>
        {/* products ends here */}
        {/* cart here */}
        <div className='col-span-2 px-2 bg-pink-200 py-4'>
          <h1 className='text-center text-2xl font-medium mt-5'>
            Order Summery
          </h1>
          <div className='mt-10 space-y-2 mx-2'>
            <p>Selected item: 5</p>
            <p>Total Price: 5</p>
            <p>Total Shipping Charge: 5</p>
            <p>Tax: 5</p>
            <p className='text-xl font-semibold'>Grand Total: 5</p>
          </div>
          <div className='mx-2 space-y-2 mt-10'>
            <Button name='Clear Cart' icon='' />
            <Button name='Review Order' icon='&#8594;' />
          </div>
        </div>
        {/* cart ends here */}
      </div>
    </>
  );
};

// button component
const Button = ({ name, icon }) => {
  return (
    <div className='bg-orange-500 px-5 py-2.5 text-white text-md font-medium text-center'>
      <button className=''>
        {name} {icon}
      </button>
    </div>
  );
};

export default Shop;
