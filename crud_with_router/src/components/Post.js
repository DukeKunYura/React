import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post(props) {

    const navigate = useNavigate();


    const handlerChangePost = (Id) => {
        navigate(`/posts/${Id}`)
    }





    return (
        <>
            <div onClick={() => handlerChangePost(props.props.id)}>
                {props.props.content}
            </div>
        </>

    )
}
