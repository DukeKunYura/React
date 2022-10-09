import React, { useEffect } from 'react';
import useAsync from '../../hooks/useAsync';

/**
 * Компонент отправляет fetch-запрос и рендерит меню категорий
 */
export default function CatalogCategories(props) {

    const { handlerCheckCategories, checked } = props;

    const { execute, status, value, error } = useAsync(
        () => fetch('http://localhost:7070/api/categories')
            .then((res) => res.json()), false);

    error && console.log(error);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { execute() }, []);

    return (
        <>
            {status === "success" &&
                <ul className="catalog-categories nav justify-content-center" id='linkCategories'>
                    <li className="nav-item">
                        <a className={checked === "" ? "nav-link active" : "nav-link"} href="#linkCategories"
                            onClick={() => { handlerCheckCategories("") }}>Все</a>
                    </li>
                    {value.map(value =>
                        <li className="nav-item" key={value.id}>
                            <a className={checked === value.id ? 'nav-link active' : "nav-link"} href="#linkCategories"
                                onClick={() => { handlerCheckCategories(value.id) }}>{value.title}</a>
                        </li>
                    )}
                </ul>
            }
        </>

    )
}
