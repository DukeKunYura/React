import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAvatar } from '../redux/masterSlice'

export default function Uploader() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.master);

    const handlerChangeAvatar = (e) => {
        dispatch(addAvatar(window.URL.createObjectURL(e.target.files[0])))

    }




    return (
        <div>
            <input type="file" onChange={handlerChangeAvatar}></input>
            {state.list[0] ?
                state.list.map(item => <img className='Avatar' src={item}></img>)

                : <progress />}
        </div>
    )
}
