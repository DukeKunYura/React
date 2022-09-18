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
        <div>
            <form className='Form'>
                <textarea className='InputPost' cols='40' rows='5' value={form} onChange={handlerChange} required></textarea>
                <span onClick={hendlerExit}>Закрыть</span>
                <span className='ButtonSubmit' onClick={handlerSubmit}>Опубликовать</span>
            </form>
        </div>
    )
}
