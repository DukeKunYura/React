import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_STRING, SET_POSITION, SET_PRICE } from '../redux/actions';

export default function InputPoint() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.priceState);

    return (
        <div>
            <input required value={state.position} onChange={(e) => {
                dispatch({
                    type: SET_POSITION,
                    payload: e.target.value
                })
            }} />
            <input required value={state.price} onChange={(e) => {
                dispatch({
                    type: SET_PRICE,
                    payload: e.target.value
                })
            }} />
            <button onClick={() => {
                dispatch({
                    type: ADD_STRING,
                    payload: { "position": state.position, "price": state.price }
                });
                dispatch({
                    type: SET_PRICE,
                    payload: ""
                });
                dispatch({
                    type: SET_POSITION,
                    payload: ""
                })

            }}>Добавить</button>
        </div>
    )
}
