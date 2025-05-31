import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </>
  );
};