import React from 'react';
import useAsync from '../../hooks/useAsync';
import { useState, useEffect } from 'react';

/**
 * Компонент отправляет fetch-запрос и рендерит "Хиты продаж"
 */
export default function TopSales() {

    const [mount, setMount] = useState(false)

    const { execute, status, value, error } = useAsync(
        () => fetch('http://localhost:7070/api/top-sales')
            .then((res) => res.json()), false);

    error && console.log(error);


    useEffect(() => { if (!mount) { setMount(true); execute() } }, [execute, mount]);


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
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                :
                status === "pending"
                    ?
                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>
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