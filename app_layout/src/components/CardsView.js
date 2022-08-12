import React from 'react'
import ShopCard from './ShopCard'

export default function CardsView(props) {
    const { products } = props
    return (
        <div className='CardsView'>
            {products.map(p => <ShopCard card={p.img} name={p.name} color={p.color} price={p.price}></ShopCard>)}
        </div>
    )
}
