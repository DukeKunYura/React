import React from 'react';
import useAsyncWithUrl from '../../../hooks/useAsyncWithUrl';
import sendRequest from '../../../api/sendRequest'
import { useParams } from 'react-router-dom';
import Preloader from '../../Preloader/Preloader';


export default function ProductPage() {

    const params = useParams();

    const { status, value, error } = useAsyncWithUrl(
        sendRequest,
        `http://localhost:7070/api/items/${params.id}`,
        true);

    error && console.log(error);


    return (
        <>
            {status === "pending" && <Preloader />}
            {status === "success" &&
                <main class="container">
                    <div class="row">
                        <section className="catalog-item">
                            <h2 className="text-center">{value.title}</h2>
                            <div className="row">
                                <div className="col-5">
                                    <img src={value.images[0]}
                                        className="img-fluid" alt={value.title} />
                                </div>
                                <div className="col-7">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Артикул</td>
                                                <td>{value.sku}</td>
                                            </tr>
                                            <tr>
                                                <td>Производитель</td>
                                                <td>{value.manufacturer}</td>
                                            </tr>
                                            <tr>
                                                <td>Цвет</td>
                                                <td>{value.color}</td>
                                            </tr>
                                            <tr>
                                                <td>Материалы</td>
                                                <td>{value.material}</td>
                                            </tr>
                                            <tr>
                                                <td>Сезон</td>
                                                <td>{value.season}</td>
                                            </tr>
                                            <tr>
                                                <td>Повод</td>
                                                <td>{value.reason}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center">
                                        <p>Размеры в наличии:
                                            {value.sizes.map(size => <span className="catalog-item-size">{size.size}</span>)}
                                            {/* <span className="catalog-item-size selected">18 US</span> <span className="catalog-item-size">20 US</span> */}
                                        </p>
                                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                            <button className="btn btn-secondary">-</button>
                                            <span className="btn btn-outline-primary">1</span>
                                            <button className="btn btn-secondary">+</button>
                                        </span>
                                        </p>
                                    </div>
                                    <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>}

        </>
    )
}
