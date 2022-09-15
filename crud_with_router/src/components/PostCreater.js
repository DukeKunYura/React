import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function PostCreater() {
    const [form, setForm] = useState("");
    const navigate = useNavigate()


    const handlerSubmit = evt => {
        evt.preventDefault();

        const newPost = { "id": 0, "content": form }

        fetch("http://localhost:7777/posts", {
            method: 'POST',
            headers: { 'Content-Type': 'applicaton/json' },
            body: JSON.stringify(newPost),

        }).then((result) => { console.log(result); }, (error) => { console.log(error) })



        setForm("")
        navigate("/")

    };

    const handlerChange = ({ target }) => setForm(target.value);

    return (
        <div>
            <form className='Form'>
                <textarea className='InputPost' cols='40' rows='5' value={form} onChange={handlerChange}></textarea>
                <button className='ButtonSubmit' onClick={handlerSubmit}>Опубликовать</button>
            </form>
        </div>
    )
}
