import React, { useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { useSelector } from 'react-redux';

/**
 * Компонент отправляет fetch-запрос при нажатии кнопки 
 * "загрузить еще", и рисует продолжение каталога
 */
export default function DownloadMore(props) {

    const { checked, categoriesUrl } = props;

    const state = useSelector((state) => state.master);

    const [addedCards, setAddedCards] = useState([]);
    const [offsetCount, setOffsetCount] = useState(6);
    const [isActiveAdder, setIsActiveAdder] = useState(true);

    const { execute, status, value, error } = useAsync(
        () => fetch(`${checked === "" && state.search === ""
            ? categoriesUrl + "?" : categoriesUrl + "&"}offset=${offsetCount}`)
            .then((res) => res.json()), false);


    error && console.log(error);

    const handlerDownload = () => {
        execute();
        setIsActiveAdder(false)
    };

    useEffect(() => {
        if (value) {
            let newArr = addedCards.concat(value);
            setAddedCards(newArr);
            setOffsetCount(offsetCount + 6)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <>
            {status === "pending" ?
                <section className="top-sales">
                    <h2 className="text-center">Каталог</h2>
                    <div className="preloader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
                :
                <>
                    {addedCards.length > 0
                        ?
                        <>
                            <div className="row">
                                {addedCards.map(value =>
                                    <div className="col-4" key={value.id}>
                                        <div className="card catalog-item-card">
                                            <img src={value.images[0]}
                                                className="card-img-top img-fluid" alt={value.title} />
                                            <div className="card-body">
                                                <p className="card-text">{value.title}</p>
                                                <p className="card-text">{value.price}</p>
                                                <a href="/products/1.html"
                                                    className="btn btn-outline-primary">Заказать</a>
                                            </div>
                                        </div>
                                    </div>)}
                            </div>
                            {value === null || value.length < 6
                                ?
                                null
                                :
                                <div className="text-center">
                                    <button className="btn btn-outline-primary"
                                        onClick={handlerDownload}>Загрузить ещё</button>
                                </div>
                            }
                        </>
                        :
                        isActiveAdder
                            ?
                            <div className="text-center">
                                <button className="btn btn-outline-primary"
                                    onClick={handlerDownload}>Загрузить ещё</button>
                            </div>
                            :
                            null
                    }
                </>}
        </>
    )
}
