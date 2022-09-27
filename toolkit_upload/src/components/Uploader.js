import { useSelector, useDispatch } from 'react-redux';
import { addAvatar } from '../redux/masterSlice';
import shortid from "shortid";
import './Uploader.css';
import avatar from '../img/avatar.jpg';

/**
 * Компонент позволяет загрузить фото из дискового пространства, 
 * url загруженных файлов хранит в глобальном стейте
 */
export default function Uploader() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.master);

    const handlerChangeAvatar = (e) => {

        e.preventDefault();
        dispatch(addAvatar(window.URL.createObjectURL(e.target.files[0])));

    }


    return (
        <div className='Page'>
            <div className='AvatarPlace'>
                {state.avatar
                    ? <img className='Avatar' src={state.avatar} alt='avatar' />
                    : <img className='Avatar' src={avatar} alt='avatar' />}
                <div className='Uploader'>
                    <label
                        className='UploadLabel'
                        htmlFor="222">Upload</label>
                    <input
                        className='Upload'
                        id="222" type="file"
                        onChange={handlerChangeAvatar} />
                </div>
            </div>
            <div className='PrevAvatarPlace'>
                <div className='TitlePrevAvatar'>Previous avatars</div>
                {state.list[0] && state.list.map(item =>
                    <img
                        className='PrevAvatar'
                        src={item}
                        alt="avatar"
                        key={shortid.generate()}></img>)}
            </div>


        </div>
    )
};
