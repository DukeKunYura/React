import React from 'react';
import ShopItem from './ShopItem'

export default function ListView(props) {
    const { products } = props
    return (
        <div className='ListView'>
            {products.map(p => <ShopItem card={p.img} name={p.name} color={p.color} price={p.price}></ShopItem>)}
        </div>
    )
}
