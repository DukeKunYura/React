import React from 'react';
import Star from './Star';
import './Stars.css'


export default function Stars(props) {
    const { count } = props

    const quantity = new Array(count).fill("");

    console.log(quantity);

    let Items = []

    if (count >= 1 && count < 6) {
        Items = quantity.map(q => <li>{q}<Star /></li>);
    }


    return (
        <div>
            <ul className="card-body-stars u-clearfix">{Items}</ul>
        </div>
    )
}

Stars.defaultProp = 0