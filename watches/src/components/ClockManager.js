import React, { useState } from 'react';
import Clock from './Clock';
import InputPanel from './InputPanel';
import shortid from "shortid";

export default function ClockManager() {
    const [clocks, setClocks] = useState([{ name: "Moskow", zone: "+3" }])

    const handleAddClock = (name, zone) => {
        setClocks(prev => ([...prev, { name: name, zone: zone }]))
        console.log("push")

    }


    return (
        <div className='ClockManager'>
            <InputPanel handleAddClock={handleAddClock}></InputPanel>
            <div className='Clocks'>
                {clocks.map(clock => <Clock props={clock} key={shortid.generate()}></Clock>)}
            </div>

        </div>
    )
}
