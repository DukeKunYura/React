import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EDIT_STRING, DELETE_STRING, SET_FILTER } from '../redux/actions';
import './List.css';

/**
 * Компонент рендерит список позиций прайс-листа
 */
export default function List() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.priceState);

    const filterSearch = (arr, filter) => {
        let result = arr.filter(item => item.position.indexOf(filter) >= 0)
        return result
    }


    return (
        <div>
            <div className='Point'>
                <div className='All' >Всего пунктов: {state.list.length}</div>
                <div className='Filter'>Фильтр: </div>
                <input className='InputFilter' required value={state.filter} onChange={(e) => {
                    dispatch({
                        type: SET_FILTER,
                        payload: e.target.value
                    })
                }}>
                </input>
            </div>
            {filterSearch(state.list, state.filter).map(item =>
                <div className='Point' key={item.id}>
                    <div className='Position'>{item.position}</div>
                    <div className='Price'>{item.price}</div>
                    <span className='Button' onClick={() => {
                        dispatch({
                            type: EDIT_STRING,
                            payload: { "editingStringId": item.id, "position": item.position, "price": item.price }
                        })
                    }}>
                        Изменить
                    </span>
                    <span className='Button' onClick={() => {
                        dispatch({
                            type: DELETE_STRING,
                            payload: item.id
                        })
                    }}>
                        Удалить
                    </span>

                </div>)}

        </div>
    )
}
