import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts';
import PostCreater from './PostCreater';

export default function Main() {
    return (
        <div>
            <Link to="/posts/new" >Создать пост</Link>
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/posts/new" element={<PostCreater />} />

            </Routes>
        </div>
    )
}
