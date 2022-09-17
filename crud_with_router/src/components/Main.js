import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Posts from './Posts';
import PostCreater from './PostCreater';
import PostView from './PostView';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Posts />} />
                <Route exact path="/posts/new" element={<PostCreater />} />
                <Route exact path="/posts/:id" element={<PostView />} />

            </Routes>
        </div>
    )
}
