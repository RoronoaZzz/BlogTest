import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetail.css'
import Score from '../Score/Score';
import '../main.css'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          setPost(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [id]);

  if (!post) {
    return <div className='load'>Загрузка...</div>;
  }

  return (
    <div className="container">
      <div className='fullcard'>
        <div className="fullcard--wrapper">

          <Link to={`/`}>
            <div className="back">
              <svg className='arrow' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_115)">
                  <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="#0A0A0A" />
                </g>
                <defs>
                  <clipPath id="clip0_1_115">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <button className='fullcard__back btn-reset'>Вернуться к статьям</button>
            </div>
          </Link>



          <div className="score--style"><Score /></div>
        </div>
        <h1 className='fullcard__title'>{post.title}</h1>
        <div className="fullcard__body">
          <img src="https://placehold.co/848x477" alt="Изображение блога" className="fullcard__img" />
          <p className='fullcard__descr'>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;