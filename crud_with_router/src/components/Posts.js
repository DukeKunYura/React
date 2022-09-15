import React, { useEffect, useState } from 'react'

export default function Posts() {

    const [state, setState] = useState([]);

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
            Посты:
            {state.content}
        </div>
    )
}
