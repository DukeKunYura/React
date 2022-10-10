import React, { useState, useEffect } from 'react';
import useAsync from '../../hooks/useAsync';
import CatalogCategories from '../CatalogCategories/CatalogCategories';
import DownloadMore from '../DownloadMore/DownloadMore';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/masterSlice';

/**
 * Компонент отправляет fetch-запрос и рендерит каталог
 */
export default function Catalog(props) {

    const state = useSelector((state) => state.master);

    const dispatch = useDispatch();

    const [checked, setChecked] = useState("");

    const [categoriesUrl, setCategoriesUrl] = useState('http://localhost:7070/api/items');

    const handlerCheckCategories = (id) => {
        if (id !== "") {
            if (state.search !== "") {
                setCategoriesUrl('http://localhost:7070/api/items?categoryId=' + id + '&q=' + state.search);
                setChecked(id);
            } else {
                setCategoriesUrl('http://localhost:7070/api/items?categoryId=' + id);
                setChecked(id);
            }
        } else {
            if (state.search !== "") {
                setCategoriesUrl('http://localhost:7070/api/items?q=' + state.search);
                setChecked("");
            } else {
                setCategoriesUrl('http://localhost:7070/api/items');
                setChecked("");
            }
        }
    };

    const { execute, status, value, error } = useAsync(
        () => fetch(categoriesUrl)
            .then((res) => res.json()), false);

    error && console.log(error);

    useEffect(() => {
        handlerCheckCategories(checked);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { execute() }, [categoriesUrl]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { handlerCheckCategories(checked) }, [state.searchStart]);

    useEffect(() => {
        return () => {
            dispatch(setSearch(""));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {status === "success"
                ? <section className="catalog">
                    <h2 className="text-center">Каталог</h2>
                    {props.children}
                    <CatalogCategories checked={checked} handlerCheckCategories={handlerCheckCategories} />
                    <div className="row">
                        {value.map(value =>
                            <div className="col-4" key={value.id}>
                                <div className="card catalog-item-card">
                                    <img src={value.images[0]}
                                        className="card-img-top img-fluid" alt={value.title} />
                                    <div className="card-body">
                                        <p className="card-text">{value.title}</p>
                                        <p className="card-text">{value.price}</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <DownloadMore checked={checked} categoriesUrl={categoriesUrl} />
                </section>

                :
                status === "pending"
                    ?
                    <section className="top-sales">
                        <h2 className="text-center">Каталог</h2>
                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>
                    : null}

        </>

    )
}
