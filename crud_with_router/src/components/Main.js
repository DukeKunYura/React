import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './PostList';
import PostCreater from './PostCreater';
import PostView from './PostView';

/**
 * Компонент определяет маршрутизацию компонентов приложения
 */
export default function Main() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<PostList />} />
                <Route path="/posts/new" element={<PostCreater />} />
                <Route path="/posts/:id" element={<PostView />} />

            </Routes>
        </>
    )
}
