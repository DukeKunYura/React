import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sendRequest from '../functions/sendRequest.js';
import moment from 'moment';
import avatar from './img/181-800x600.jpg'

/**
 * Компонент рендерит список постов
 */
export default function PostList() {
    const [state, setState] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        sendRequest('GET', "http://localhost:7777/posts")
            .then(data => setState(prevState => ({ ...prevState, data })))
            .catch(err => console.log(err))

    }, []);


    return (
        <div className='PostList'>
            <div className='CreateBanner'>
                <div className='CreateLayout'>
                    <Link className='Button' to="/posts/new" >Создать пост</Link>
                </div>

            </div>
            {state.data
                ? state.data.map(post =>
                    <div
                        className='Post'
                        onClick={() => { navigate(`/posts/${post.id}`) }} key={post.id}>
                        <div className='Person'>
                            <img className='Avatar' src={avatar} alt='avatar' />
                            <p>
                                Автор поста
                            </p>
                            <div className='DatePost'>
                                Опубликовано: {moment(post.created).fromNow()}
                            </div>
                        </div>
                        <div className='PostText'>
                            <p>{post.content}</p>
                        </div>
                    </div>)
                : <progress />}
        </div>
    )
}
