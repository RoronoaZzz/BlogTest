import React, { useState } from 'react';
import '../main.css'
import './MainPost.css'
import { Link } from 'react-router-dom';
import Score from '../Score/Score';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


interface MainPostProps {
    firstPost: Post;
}

const MainPost: React.FC<MainPostProps> = ({ firstPost }) => {
   

    return (
        <div className="post__main" key={firstPost.id}>
            <img src="https://placehold.co/1180x600" className='post__main--img' alt="Изображение статьи" />

            <div className="post__main--text">

                <div className="post__main--wrapper">
                    <h3 className='post__main--title'>{firstPost.title}</h3>
                    <Score/>
                </div>

                <p className='post__main--descr'>{firstPost.body}</p>
                <Link to={`/post/${firstPost.id}`}><button className='post__main--button btn-reset'>Читать далее</button></Link>
            </div>

        </div >
    );
};

export default MainPost;
