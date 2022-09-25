import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Uploader from './Uploader';

export default function Main() {

    const state = useSelector((state) => state.master);


    return (
        <div>
            {state.list[1]}
            <Uploader />

        </div>
    )
}
