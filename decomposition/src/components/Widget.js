import React from 'react'

/**
 * Компонент отвечает за рендер виджета используя полученные props и props.children
 */
export default function Widget(props) {
    const { title, pic } = props

    return (
        <div className='Widget'>
            {pic ? <img src={pic} className="Pic" alt={pic}></img> : null}
            <h5 className='TitleWid'>{title}</h5>
            {props.children}
        </div>
    )
}
