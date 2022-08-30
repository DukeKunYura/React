import React, { useState } from 'react';
import Clock from './Clock';
import InputPanel from './InputPanel';
import shortid from "shortid";

/**
 * Компонент управляет списком часов.
 * Получает значения "name" и "zone" в callback из компонета InputPanel
 * сохраняет их в массиве в стейте, и рендерит из него компоненты Clock 
 */
export default function ClockManager() {
    const [clocks, setClocks] = useState([{ id: shortid.generate(), name: "Moskow", zone: "+3" }])

    const handleAddClock = (name, zone) => {
        if (clocks.length < 5) {
            setClocks(prev => ([...prev, { id: shortid.generate(), name: name, zone: zone }]))
        }

    }

    //удаление часов
    const handleDeleteClock = (id) => {
        console.log(id)
        let newArr = clocks.filter(el => (el.id !== id));
        setClocks(newArr)
    }


    return (
        <div className='ClockManager'>
            <InputPanel handleAddClock={handleAddClock}></InputPanel>
            <div className='Clocks'>
                {clocks.map(clock => <Clock props={clock} handleDeleteClock={handleDeleteClock} key={clock.id}></Clock>)}
            </div>

        </div>
    )
}
