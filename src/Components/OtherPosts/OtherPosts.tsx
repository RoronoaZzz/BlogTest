import React from 'react';
import PostCard from '../PostCard/PostCard';
import '../main.css'
import './OtherPosts.css'



interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

const OtherPosts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className='other'>
      <div className='other--container'>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default OtherPosts;