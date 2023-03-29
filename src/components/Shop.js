import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  // products state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // Data loading
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const cartHandler = (product) => {
    const newCarts = [...cart, product];
    setCart(newCarts);
  };

  return (
    <>
      <div className='grid grid-cols-12'>
        {/* products here */}
        <div className='col-span-10 md:flex flex-wrap gap-3 items-center justify-between md:mx-20 mt-20'>
          {products.map((product) => (
            <Product
              key={product?.id}
              cartHandler={cartHandler}
              product={product}
            />
          ))}
        </div>
        {/* products ends here */}
        {/* cart here */}
        <div className='col-span-2'>
          <Cart cart={cart} totalPrice={totalPrice} setCart={setCart} />
        </div>
        {/* cart ends here */}
      </div>
    </>
  );
};

export default Shop;
