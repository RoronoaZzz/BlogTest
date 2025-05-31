import React, { useState } from 'react';
import '../main.css'
import '../OtherPosts/OtherPosts.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Score from '../Score/Score';



interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/post/${post.id}`);
  };


  return (
    <div className='other__card'>
      <img src='https://placehold.co/558x273' className='other__card--img' alt='Изображение' />
      <div className='other__card--text'>
        <h3 className='other__card--title'>{post.title}</h3>
        <div className='post__main--rate'>
          <Score />
          <button className='btn-reset other__card--btn' onClick={handleReadMore}>Читать дальше</button>
        </div>

      </div>
    </div>
  );
};

export default PostCard;