import React, { useEffect, useState } from 'react';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

/**
 * Компонент делает запрос на сервер, рисует список пользователей по его результатам
 * и хранит состояния (+ передает в пропс id и name компоненту Details)
 */
export default function List() {
    const [list, setList] = useState(false);
    const [info, setInfo] = useState(false);
    const [activeListItem, setActiveListItem] = useState(null);


    const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setList(data))

    }, []);

    const handlerChangeUser = (id, name) => {
        setInfo({ id, name });
        setActiveListItem(id)
    };


    return (
        <div className="List">
            <ul className="list-group">
                {list ? list.map(l => <li className={activeListItem === l.id ? "list-group-item active" : "list-group-item"}
                    onClick={() => { handlerChangeUser(l.id, l.name) }}
                    key={l.id}>{l.name}</li>) : <progress />}
            </ul>
            {info ? <Details info={info} /> : null}

        </div>
    )
}
