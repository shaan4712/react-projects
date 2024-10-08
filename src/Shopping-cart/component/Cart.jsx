import React, { useState, useEffect } from 'react'
import '../styles/Cart.css'

const Cart = ({cart, setCart, handleChange}) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) =>{
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
      }
  
      const handlePrice = () => {
        let ans = 0;
        cart.map((item) => {
          ans += item.amount * item.price;
        })
        setPrice(ans);
      }
      
  
      useEffect(() => {
        handlePrice();
      },[price])
  

  return (
    <article>
      {
        cart?.map((item) => (
            <div className='cart_box' key={item.id}>
                <div className='cart_img'>
                    <img src={item.img}></img>
                    <div>
                        <p>{item.title}</p>
                        <p>Amount: {item.amount}</p>
                    </div>
                </div>
                <div className='add-remove'>
                    <button onClick={() => {
                      handleChange(item ,+1) 
                    }}>
                        +</button>
                    <button onClick={() => {
                      handleChange(item ,-1)
                    }}>
                        -</button>
                </div>
                <div>
                   <span>Rs. {item.price}</span>
                   <button className='remove'
                   onClick={() => handleRemove(item.id)}>
                    Remove
                    </button>
                </div>
            </div>
          ))
      }
      <div className='total'>
          <span>Total Price of your Cart</span>
          <span> Rs. {price}</span>
        </div>
      </article>
  )
}

export default Cart

