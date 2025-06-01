import '../main.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainPost from '../MainPost/MainPost';
import OtherPosts from '../OtherPosts/OtherPosts';
import './Posts.css';
import Header from '../Header/Header';



interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [firstPost, setFirstPost] = useState<Post | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');





    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsResponse = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
                const selectedPosts = postsResponse.data.slice(1, 5);
                setPosts(selectedPosts);

                const firstPostResponse = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
                setFirstPost(firstPostResponse.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (

        <>
            <Header />
            <main className='main'>
                <section className='posts'>
                    <div className="container">
                        <input
                            type="text"
                            className='header__input'
                            placeholder='Поиск по названию статьи'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />

                        {firstPost && <MainPost firstPost={firstPost} />}
                        <OtherPosts posts={filteredPosts} />
                    </div>
                </section>
            </main>
        </>

    );
};

export default Posts;