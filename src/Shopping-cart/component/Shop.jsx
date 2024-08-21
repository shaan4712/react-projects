import React from 'react'
import list from '../shoppinglist'
import Card from './Card'

const Shop = ({handleClick}) => {
  return (
    <section>
        {list.map((item) => {
            return <Card item={item} key={item.id} 
            handleClick={handleClick}/>
            // console.log(item);
        })}
    </section>
  )
}

export default Shop
