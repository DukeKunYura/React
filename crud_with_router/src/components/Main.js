import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import PostCreater from './PostCreater';
import PostView from './PostView';

/**
 * Компонент определяет маршрутизацию компонентов приложения
 */
export default function Main() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Posts />} />
                <Route path="/posts/new" element={<PostCreater />} />
                <Route path="/posts/:id" element={<PostView />} />

            </Routes>
        </>
    )
}
