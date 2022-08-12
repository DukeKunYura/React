import React from 'react'

export default function ShopCard(props) {

    const { card, name, color, price } = props

    return (
        <div className='ShopCard'>
            <img className='Img' src={card} alt='imgProduct'></img>
            <div className='Name'>{name}</div>
            <div className='Color'>{color}</div>
            <div className='Price'>${price}</div>
            <a className='butAdd' href='a'>add to cart</a>

        </div>
    )
}

