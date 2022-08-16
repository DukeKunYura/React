import React from 'react';
import Item from './Item';


export default function Listing(props) {

    const { items } = props

    console.log(items)


    return (
        <>
            <div className="item-list">
                <Item items={items}></Item>

            </div>

        </>

    )
}

