import React from 'react'

export default function Card(props) {
    const { someObject } = props
    return (
        <>
            <div className="card">
                {someObject.pic ? <img src={someObject.pic} className="card-img-top" alt={someObject.alt}></img> : null}
                {props.children}
            </div>

        </>
    )
}
