import React from 'react'

export default function ShopItem(props) {

    const { card, name, color, price } = props

    return (
        <div className='ShopItem'>
            <img className='ImgList' src={card} alt='imgProduct'></img>
            <div className='NameList'>{name}</div>
            <div className='ColorList'>{color}</div>
            <div className='PriceList'>${price}</div>
            <a className='butAddList' href='a'>add to cart</a>

        </div>
    )
}