import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sendRequest from '../functions/sendRequest.js';

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
        <div>
            {(state && params.id && !editing)
                ?
                <div>
                    {state.content}
                    <span onClick={hendlerExit}>Закрыть</span>
                    <span onClick={() => hendlerDelete(params.id)}>Удалить</span>
                    <span onClick={handlerEditing}>Редактировать</span>
                </div>

                : (editing
                    ? <div>
                        <form className='Form'>
                            <textarea className='InputPost' cols='40' rows='5' value={form} onChange={handlerChange} required></textarea>
                            <button className='ButtonSubmit' onClick={handlerSubmit}>Сохранить</button>
                        </form>

                    </div>
                    : <progress></progress>)}


        </div>
    )
}
