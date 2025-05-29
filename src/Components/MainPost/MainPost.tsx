import React, { useState } from 'react';
import '../main.css'
import './MainPost.css'

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
    const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 51));
    const [disLikeCount, setDisLikeCount] = useState(Math.floor(Math.random() * 51));
    const [activeLikeBtn, setActiveLikeBtn] = useState('none')
    const [activeDisLikeBtn, setActiveDisLikeBtn] = useState('none')
    const [isGreen, setIsGreen] = useState(false);
    const [isRed, setIsRed] = useState(false);




    const handleLike = () => {

        if (activeLikeBtn === 'none') {
            setLikeCount(likeCount + 1);
            setActiveLikeBtn('like');
            setIsGreen(true);

            if (activeDisLikeBtn === 'dislike') {
                setDisLikeCount(disLikeCount - 1);
                setActiveDisLikeBtn('none');
                setIsRed(false);
            }
        } else {
            setLikeCount(likeCount - 1);
            setActiveLikeBtn('none');
            setIsGreen(false);
        }

    };


    const handleDislike = () => {
        if (activeDisLikeBtn === 'none') {
            setDisLikeCount(disLikeCount + 1);
            setActiveDisLikeBtn('dislike');
            setIsRed(true);

            if (activeLikeBtn === 'like') {
                setLikeCount(likeCount - 1);
                setActiveLikeBtn('none');
                setIsGreen(false);
            }
        } else {
            setDisLikeCount(disLikeCount - 1);
            setActiveDisLikeBtn('none');
            setIsRed(false);
        }
    };



    return (
        <div className="post__main" key={firstPost.id}>
            <img src="https://placehold.co/1180x600" className='post__main--img' alt="Изображение статьи" />

            <div className="post__main--text">

                <div className="post__main--wrapper">
                    <h3 className='post__main--title'>{firstPost.title}</h3>
                    <div className="post__main--rate">

                        <button className={`btn-reset`} onClick={handleLike}>
                            <div className="like rate--wrapper">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`like--svg ${isGreen ? 'green' : ''}`} d="M2.66663 26.6667H5.33329C6.06663 26.6667 6.66663 26.0667 6.66663 25.3334V13.3334C6.66663 12.6 6.06663 12 5.33329 12H2.66663V26.6667ZM29.1066 17.1734C29.2533 16.84 29.3333 16.48 29.3333 16.1067V14.6667C29.3333 13.2 28.1333 12 26.6666 12H19.3333L20.56 5.80002C20.6266 5.50669 20.5866 5.18669 20.4533 4.92002C20.1466 4.32002 19.76 3.77335 19.28 3.29335L18.6666 2.66669L10.12 11.2134C9.61329 11.72 9.33329 12.4 9.33329 13.1067V23.56C9.33329 25.2667 10.7333 26.6667 12.4533 26.6667H23.2666C24.2 26.6667 25.08 26.1734 25.56 25.3734L29.1066 17.1734Z" fill="#3A3541" fill-opacity="0.54" />
                                </svg>
                                <span className='like--score score'>{likeCount}</span>
                            </div>
                        </button>

                        <button className='btn-reset' onClick={handleDislike}>
                            <div className="dislike rate--wrapper">
                                <svg className='dislike--svg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`like--svg ${isRed ? 'red' : ''}`} d="M2.66671 5.33331H5.33337C6.06671 5.33331 6.66671 5.93331 6.66671 6.66665V18.6666C6.66671 19.4 6.06671 20 5.33337 20H2.66671V5.33331ZM29.1067 14.8266C29.2534 15.16 29.3334 15.52 29.3334 15.8933V17.3333C29.3334 18.8 28.1334 20 26.6667 20H19.3334L20.56 26.2C20.6267 26.4933 20.5867 26.8133 20.4534 27.08C20.1467 27.68 19.76 28.2266 19.28 28.7066L18.6667 29.3333L10.12 20.7866C9.61337 20.28 9.33337 19.6 9.33337 18.8933V8.45331C9.33337 6.73331 10.7334 5.33331 12.4534 5.33331H23.2534C24.2 5.33331 25.0667 5.82665 25.5467 6.62665L29.1067 14.8266Z" fill="#3A3541" fill-opacity="0.54" />
                                </svg>
                                <span className='dislike--score score'>{disLikeCount}</span>
                            </div>
                        </button>

                    </div>
                </div>

                <p className='post__main--descr'>{firstPost.body}</p>
                <button className='post__main--button btn-reset'>Читать далее</button>
            </div>

        </div >
    );
};

export default MainPost;
