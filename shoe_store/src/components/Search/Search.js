import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/masterSlice';

/**
 * Компонент отвечает за работу поиска
 */
export default function Search() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state.master);



    return (
        <form className="catalog-search-form form-inline">
            <input className="form-control" placeholder="Поиск"
                value={state.search}
                onChange={(e) => { dispatch(setSearch(e.target.value)) }} />
        </form>
    )
}
