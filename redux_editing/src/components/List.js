import React from 'react';
import { useSelector } from 'react-redux';
import shortid from "shortid";

export default function List() {


    const state = useSelector((state) => state.priceState);


    return (
        <div>
            {state.list.map(item => <div key={shortid.generate()}>{item.position}{item.price}</div>)}

        </div>
    )
}
