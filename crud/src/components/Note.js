import React from 'react';
import './Note.css';


/**
 * Компонент отвечет за рендер заметок
 */
export default function Note(props) {
    const { note, handlerDeleteNote } = props;

    return (
        <div className='Note'>
            <div>
                <p className='Content'>{note.content}</p>
                <button className='ButtonDelete' onClick={() => { handlerDeleteNote(note.id) }}>Удалить</button>
            </div>


        </div>
    )
}
