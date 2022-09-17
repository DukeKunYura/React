import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Posts() {
    const [state, setState] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        fetch("http://localhost:7777/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error occurred!')
                }
                return response.json()
            })
            .then(data => setState(prevState => ({ ...prevState, data })))
            .catch(error => console.log(error))


    }, [])



    return (
        <div>
            <Link to="/posts/new" >Создать пост</Link>
            {state.data ? state.data.map(post => <div onClick={() => { navigate(`/posts/${post.id}`) }}>{post.content}</div>) : null}
        </div>
    )
}
