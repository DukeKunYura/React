import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostView() {
    const [state, setState] = useState(null)
    const [post, setPost] = useState();

    const params = useParams();

    async function sendRequest(method, url, body = null) {
        const headers = {
            'Content-Type': 'application/json'
        }

        if (method === 'POST') { body = JSON.stringify(body) };
        const response = await fetch(url, {
            method: method,
            body: body,
            headers: headers
        });
        return await response.json();
    }

    useEffect(() => {
        sendRequest('GET', "http://localhost:7777/posts")
            .then(data => setState(data))
            .catch(err => console.log(err))

        return () => { }
    }, [params])





    return (
        <div>
            view

            {(state && params.id) ? state[params.id - 1].content : "not"}

        </div>
    )
}
