import React from 'react';
import useAsyncWithUrl from '../../../hooks/useAsyncWithUrl';
import sendRequest from '../../../api/sendRequest'
import { useParams } from 'react-router-dom';
import Preloader from '../../Preloader/Preloader';
import ChoiceSection from '../../ChoiceSection/ChoiceSection';

/**
 * Компонент отвечает за страницу товара
 */
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
                                    <ChoiceSection item={value} />
                                </div>
                            </div>
                        </section>
                    </div>
                </main>}

        </>
    )
}
