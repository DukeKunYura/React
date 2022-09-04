import React, { useState } from 'react';
import './NoteWriter.css';

/**
 * Компонент отвечает за форму для создания заметки
 * отправляет POST запросы на сервер
 */
export default function NoteWriter(props) {
    const { sendRequest, addedNote, requestURL } = props
    const [form, setForm] = useState({ content: "" });

    const handlerSubmit = evt => {
        evt.preventDefault();

        const body = form

        sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))


        setForm({ content: "" })

        addedNote(1)
    };

    const handlerChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        setForm(prevForm => ({ ...prevForm, [name]: value }));

    };


    return (
        <div>
            <form className='Form'>
                <textarea className='InputNote' cols='40' rows='5' name='content' value={form.content} onChange={handlerChange}></textarea>
                <button className='ButtonSubmit' onClick={handlerSubmit}>Добавить</button>
            </form>
        </div>
    )
}
