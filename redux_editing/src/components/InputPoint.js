import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_STRING, SET_POSITION, SET_PRICE, SAVE_STRING, CANCEL_EDITING } from '../redux/actions';
import shortid from "shortid";
import './InputPoint.css';

/**
 * Компонент отвечает за интерфейс ввода данных для прайс-листа
 */
export default function InputPoint() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.priceState);

    return (
        <div className='InputPoint'>
            <input type='text' className='InputPosition' required value={state.position}
                onChange={(e) => {
                    dispatch({
                        type: SET_POSITION,
                        payload: e.target.value
                    })
                }} />
            <input type='number' className='InputPrice' required value={state.price}
                onChange={(e) => {
                    dispatch({
                        type: SET_PRICE,
                        payload: e.target.value
                    })
                }} />

            {
                state.editing
                    ? <>
                        <span className='AddButton' onClick={() => {
                            dispatch({
                                type: SAVE_STRING,
                                payload: { id: shortid.generate(), "position": state.position, "price": state.price }
                            });
                        }}>
                            Сохранить
                        </span>
                        <span className='AddButton' onClick={() => {
                            dispatch({
                                type: CANCEL_EDITING
                            });
                        }}>
                            Отмена
                        </span>
                    </>
                    : <span className='AddButton' onClick={() => {
                        dispatch({
                            type: ADD_STRING,
                            payload: { id: shortid.generate(), "position": state.position, "price": state.price }
                        });
                        dispatch({
                            type: SET_PRICE,
                            payload: ""
                        });
                        dispatch({
                            type: SET_POSITION,
                            payload: ""
                        })

                    }}>Добавить</span>

            }


        </div>
    )
}
