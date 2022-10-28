import React from 'react';
import useAsyncWithUrl from '../../hooks/useAsyncWithUrl';
import sendRequest from '../../api/sendRequest';
import Preloader from '../Preloader/Preloader';
import { useNavigate } from 'react-router-dom';

/**
 * Компонент отправляет fetch-запрос и рендерит "Хиты продаж"
 */
export default function TopSales() {

    const { status, value, error } = useAsyncWithUrl(
        sendRequest,
        'http://localhost:7070/api/top-sales',
        true);

    error && console.log(error);

    const navigate = useNavigate();

    const handlerClickOrder = (id) => { navigate(`/catalog/${id}`) };

    return (
        <>
            {status === "success"
                ? <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                    <div className="row">
                        {value.map(value =>
                            <div className="col-4" key={value.id}>
                                <div className="card">
                                    <img src={value.images[0]}
                                        className="card-img-top img-fluid" alt={value.title} />
                                    <div className="card-body">
                                        <p className="card-text">{value.title}</p>
                                        <p className="card-text">{value.price}</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary"
                                            onClick={(e) => { e.preventDefault(); handlerClickOrder(value.id) }}
                                        >Заказать</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                :
                status === "pending"
                    ?
                    <Preloader title="Хиты продаж!" />
                    : null}

        </>
    )
}
