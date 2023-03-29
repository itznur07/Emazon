import React from "react";

const Cart = ({ cart, totalPrice, setCart }) => {
  return (
    <div>
      <div className='px-2 bg-[#ECEFF1] py-4'>
        <h1 className='text-center text-2xl font-medium mt-5'>Order Summery</h1>
        <div className='mt-10 space-y-2 mx-2'>
          <p>Selected item: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: 5</p>
          <p>Tax: 5</p>
          <p className='text-xl font-semibold'>Grand Total: 5</p>
        </div>
        <div className='mx-2 space-y-2 mt-10'>
          <Button setCart={setCart} name='Clear Cart' icon='' />
          <Button name='Review Order' icon='&#8594;' />
        </div>
      </div>
    </div>
  );
};

// button component
const Button = ({ name, icon, setCart }) => {
  return (
    <div className='bg-orange-500 px-5 py-2.5 text-white text-md font-medium text-center'>
      <button onClick={() => setCart([])} className=''>
        {name} {icon}
      </button>
    </div>
  );
};

export default Cart;
