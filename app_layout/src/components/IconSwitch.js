import React from 'react'

export default function IconSwitchonSwitch(props) {
    const { icon, onSwitch } = props
    return (
        <div className='butChange'>
            <span className='material-icons' onClick={onSwitch}>{icon}</span>
        </div>
    )
}
