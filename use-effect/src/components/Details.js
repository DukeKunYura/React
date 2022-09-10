import React, { useEffect, useState } from 'react';


/**
 * Компонент делает запрос, получает информацию о пользователе и отображает ее
 */
export default function Details(props) {
    const { info } = props;

    const [user, setUser] = useState(false);

    const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";


    useEffect(() => {
        fetch(url + info.id + ".json")
            .then((response) => response.json())
            .then((data) => setUser(data))
    }, [info.id]);


    return (
        <div className="card">
            <img src={"https://i.pravatar.cc/150?img=" + info.id} className="card-img-top" alt="avatar" />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">City: {user ? user.details.city : <progress />}</li>
                <li className="list-group-item">Company: {user ? user.details.company : <progress />}</li>
                <li className="list-group-item">Position: {user ? user.details.position : <progress />}</li>
            </ul>
        </div>
    )
}
