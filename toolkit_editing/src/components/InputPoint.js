import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEditing, saveString, setPrice, setPosition, addString } from '../redux/masterSlice';
import shortid from "shortid";
import './InputPoint.css';

/**
 * Компонент отвечает за интерфейс ввода данных для прайс-листа
 */
export default function InputPoint() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.master);

    return (
        <div className='InputPoint'>
            <input type='text' className='InputPosition' required value={state.position}
                onChange={(e) => {
                    dispatch(setPosition(e.target.value))
                }} />
            <input type='number' className='InputPrice' required value={state.price}
                onChange={(e) => {
                    dispatch(setPrice(e.target.value))
                }} />
            {
                state.editing
                    ? <>
                        <span className='AddButton' onClick={() => {
                            dispatch(saveString({ id: shortid.generate(), "position": state.position, "price": state.price }))
                        }}>
                            Сохранить
                        </span>
                        <span className='AddButton' onClick={() => {
                            dispatch(cancelEditing())
                        }}>
                            Отмена
                        </span>
                    </>
                    : <span className='AddButton' onClick={() => {
                        dispatch(addString({ id: shortid.generate(), "position": state.position, "price": state.price }));
                        dispatch(setPrice(""));
                        dispatch(setPosition(""));

                    }}>Добавить</span>

            }


        </div>
    )
}
