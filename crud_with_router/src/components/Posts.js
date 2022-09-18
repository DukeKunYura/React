import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sendRequest from '../functions/sendRequest.js';

/**
 * Компонент рендерит список постов
 */
export default function Posts() {
    const [state, setState] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        sendRequest('GET', "http://localhost:7777/posts")
            .then(data => setState(prevState => ({ ...prevState, data })))
            .catch(err => console.log(err))

    }, []);


    return (
        <div>
            <Link to="/posts/new" >Создать пост</Link>
            {state.data
                ? state.data.map(post => <div onClick={() => { navigate(`/posts/${post.id}`) }} key={post.id}>{post.content}</div>)
                : <progress />}
        </div>
    )
}
