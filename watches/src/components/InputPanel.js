import React, { useState } from 'react';
import './InputPanel.css'

export default function InputPanel(props) {

    const { handleAddClock } = props

    const [formState, setFormState] = useState({ name: "", zone: 0 })

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setFormState(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className='InputPanel'>
            <div className='inputName'>
                <label htmlFor='name'>Название</label>
                <input className='Name' id='name' name='name' value={formState.name} onChange={handleChange}></input>
            </div>
            <div className='inputZone'>
                <label htmlFor='zone'>Временная зона</label>
                <input className='Zone' id='zone' name='zone' value={formState.zone} onChange={handleChange}></input>
            </div>
            <button className='AddBut' onClick={() => { handleAddClock(formState.name, formState.zone) }}>Добавить</button>
        </div>
    )
}
