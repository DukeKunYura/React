import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import sendRequest from '../functions/sendRequest.js';

/**
 * Компонент отвечает рендер и работу страницы создания нового поста
 */
export default function PostCreater() {
    const [form, setForm] = useState("");
    const navigate = useNavigate();


    const handlerSubmit = evt => {
        evt.preventDefault();

        const newPost = { "id": 0, "content": form };

        sendRequest('POST', "http://localhost:7777/posts", newPost);

        setForm("");

        navigate("/");

    };

    const handlerChange = ({ target }) => setForm(target.value);

    const hendlerExit = () => { navigate("/") };

    return (
        <div className="PostList">
            <form className='Post'>
                <textarea
                    className='PostText'
                    cols='40' rows='5'
                    value={form}
                    onChange={handlerChange}
                    required="required">

                </textarea>
                <div className='PostMenu'>
                    <span className='Button' onClick={hendlerExit}>Закрыть</span>
                    <span className='Button' onClick={handlerSubmit}>Опубликовать</span>
                </div>

            </form>
        </div>
    )
}
