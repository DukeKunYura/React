import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, rerenderCatalog } from '../../redux/masterSlice';

/**
 * Компонент отвечает за работу поиска
 */
export default function Search() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.master);

    const enterDown = (event) => {
        if (event.keyCode === 13) {
            dispatch(rerenderCatalog(1))
        }
    };


    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск"
                value={state.search}
                onChange={(e) => { dispatch(setSearch(e.target.value)) }}
                onKeyDown={(e) => enterDown(e)} />
        </form>
    )
}