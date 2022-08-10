import React from 'react'

export default function ProjectList(props) {
    const { item } = props
    return (
        <div>{item.map(o => <img src={o.img}></img>)}</div>
    )
}
