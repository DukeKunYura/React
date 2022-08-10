import React from 'react'
import './Toolbar.css'

export default function Toolbar(props) {

    const { filters, selected, onSelectFilter } = props
    return (
        <div>
            {filters.map(f => <button className={selected === f ? "on" : "off"} onClick={() => { onSelectFilter(f) }}>{f}</button>)}
        </div>
    )
}

