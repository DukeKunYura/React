import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAvatar } from '../redux/masterSlice'

export default function Uploader() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.master);
    //const [avatars, setAvatars] = useState({});

    const handlerChangeAvatar = (e) => {
        e.preventDefault();
        let link = window.URL.createObjectURL(e.target.files[0]);
        dispatch(addAvatar(link));
        // URL.revokeObjectURL(link)

    }


    return (
        <div>
            <div className='AvatarPlace'>
                {state.avatar ? <img className='Avatar' src={state.avatar}></img> : <div>нету пока</div>}
            </div>
            <div>
                <label className='uploadLabel' htmlFor="222">Upload</label>
                <input className='upload' id="222" type="file" onChange={handlerChangeAvatar}></input>
            </div>

            {state.list[0] ?
                state.list.map(item => <img className='Avatar' src={item} alt="avatar"></img>)

                : <progress />}
        </div>
    )
}
