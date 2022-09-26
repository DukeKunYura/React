import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity } from '../redux/starsSlice';
import shortid from "shortid";

/**
 * Компонент сохраняет в глобальный стейт введенное в поле число (от 1 до 5)
 * и отображает соответствующее число фактов из глобального стейта
 */
export default function StarWars() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.stars);

    const [facts, setFacts] = useState(state.facts)

    useEffect(() => {

        let arr = [];
        for (; arr.length < state.quantity;) {

            arr.push(state.facts[Math.floor(Math.random() * 5)]);
            arr = [...new Set(arr)];
        }
        setFacts(arr)
    }, [state]);




    return (
        <div>
            <input className='InputNumber' type='number' max={5} min={1} value={state.quantity}
                onChange={(e) => {
                    dispatch(changeQuantity(e.target.value))
                }} />
            {facts.map(fact => <p key={shortid.generate()}>{fact}</p>)}

        </div>
    )
}
