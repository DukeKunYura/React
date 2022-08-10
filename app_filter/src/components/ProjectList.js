import React from 'react';
import './ProjectList.css';

export default function ProjectList(props) {
    const { item } = props
    return (
        <div>{item.map(o => <img src={o.img} alt="img"></img>)}</div>
    )
}
