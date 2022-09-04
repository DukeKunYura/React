import React, { useEffect, useState } from 'react';
import Note from './Note';
import NoteWriter from './NoteWriter';
import './NoteList.css';

/**
 * Компонент хранит состояния, отправляет запросы на сервер
 * и генерирует компоненты Note из стейта
 */
export default function NoteList() {
    const [notes, setNotes] = useState([]);

    const [changingNotes, setChangingNotes] = useState(1);

    const requestURL = "http://localhost:7777/notes";


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
        sendRequest('GET', requestURL)
            .then(data => setNotes(data))
            .catch(err => console.log(err))

        return () => { }
    }, [])


    useEffect(() => {
        sendRequest('GET', requestURL)
            .then(data => setNotes(data))
            .catch(err => console.log(err))

        return () => { }
    }, [changingNotes])


    function addedNote(note) {
        setChangingNotes(prev => prev + note)

    }


    const handlerDeleteNote = (id) => {
        sendRequest('DELETE', requestURL + "/" + id)
            .then(setChangingNotes(prev => prev - 1))
            .catch(err => console.log(err))

    }

    const handlerUpdate = () => {
        sendRequest('GET', requestURL)
            .then(data => setNotes(data))
            .catch(err => console.log(err))

    }


    return (
        <div className='NoteList'>
            <button className='ButtonUpdate' onClick={handlerUpdate}>Обновить</button>
            <NoteWriter sendRequest={sendRequest} addedNote={addedNote} requestURL={requestURL} />
            <div className='Notes'>
                {notes.map(note => <Note note={note} handlerDeleteNote={handlerDeleteNote} key={note.id} />)}
            </div>

        </div>

    )
}
