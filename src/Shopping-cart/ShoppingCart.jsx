import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Shop from './component/Shop'
import './ShoppingCart.css'
import Cart from './component/Cart'

const ShoppingCart = () => {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {

    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) isPresent=true;
    })
    if (isPresent) {
      console.log("Item already present");
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      }, 2000);
      return; //so that cart wont increase its count and item is not added in it
    }
    else{
      console.log(item);
    }
    setCart([...cart, item]);
  }

  const handleChange = (item,d) => {
    let ind;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount +=d;
    console.log(tempArr);

    if(tempArr[ind].amount === 0){
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr])
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        //using turnery operator to show the cart
      }
      {warning && <div className='warning'>
        Item is already present in your Cart
        </div>}
    </div>
  )
}

export default ShoppingCart
