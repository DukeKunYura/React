import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sendRequest from '../functions/sendRequest.js';
import moment from 'moment';
import avatar from './img/181-800x600.jpg'

/**
 * Компонет рендерит страницу с постом, при редактирование страницу редактирования
 */
export default function PostView() {
    const [state, setState] = useState(null);
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState("");
    const params = useParams();
    const navigate = useNavigate();


    const findPost = (arr, id) => {
        let post = arr.find(item => item.id === Number(id))

        return post
    };

    useEffect(() => {
        sendRequest('GET', "http://localhost:7777/posts")
            .then(data => setState(findPost(data, params.id)))
            .catch(err => console.log(err))

        return () => { }
    }, [params]);


    const hendlerDelete = (id) => {
        sendRequest('DELETE', `http://localhost:7777/posts/${id}`)
        navigate("/")
    };


    const handlerEditing = () => {
        setEditing(true)
        setForm(state.content)
    };


    const handlerChange = ({ target }) => setForm(target.value);


    const handlerSubmit = evt => {
        evt.preventDefault();

        const editPost = { "id": state.id, "content": form };

        sendRequest('POST', "http://localhost:7777/posts", editPost);

        setForm("");

        setEditing(false);

        sendRequest('GET', "http://localhost:7777/posts")
            .then(data => setState(findPost(data, params.id)))

    };


    const hendlerExit = () => { navigate("/") };


    return (
        <div className='PostList'>
            {(state && params.id && !editing)
                ?
                <div className='Post'>
                    <div className='Person'>
                        <img className='Avatar' src={avatar} alt='avatar' />
                        <p>
                            Автор поста
                        </p>
                        <div className='DatePost'>
                            Опубликовано: {moment(state.created).fromNow()}
                        </div>

                    </div>
                    <div className='PostText'>
                        <p>
                            {state.content}
                        </p>

                    </div>
                    <div className='PostMenu'>
                        <span className='Button' onClick={hendlerExit}>Закрыть</span>
                        <span className='Button' onClick={() => hendlerDelete(params.id)}>Удалить</span>
                        <span className='Button' onClick={handlerEditing}>Редактировать</span>
                    </div>

                </div>

                : (editing
                    ? <div>
                        <form className='Post'>
                            <textarea
                                className='PostText'
                                cols='40'
                                rows='5'
                                value={form}
                                onChange={handlerChange}
                                required>

                            </textarea>
                            <div className='PostMenu'>
                                <span
                                    className='Button'
                                    onClick={handlerSubmit}>Сохранить
                                </span>
                            </div>

                        </form>

                    </div>
                    : <progress />)}
        </div>
    )
}
