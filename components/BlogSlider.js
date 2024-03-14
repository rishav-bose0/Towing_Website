// components/BlogSlider.jsx
'use client';
import {useState} from 'react';
import BlogPost from './BlogPost';
import NavigationDots from './NavigationDots';
import classes from './BlogSlider.module.css';
import towImg from "../public/images/car_tow.jpeg"
import posts from "../blog_data.json"

export default function BlogSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const postsPerSlide = 2;
    const numSlides = Math.ceil(posts.length / postsPerSlide);
    const handleDotClick = (index) => {
        setActiveIndex(index * postsPerSlide);
    };

    return (
        <>
            <div className={classes.blogSlider}>
                <div className={classes.blogImage}>
                    <img src={towImg.src} alt="Tow Truck" style={{width: '100%'}}/>
                </div>

                <div className={classes.blogPostNav}>
                    <div>
                        <h1>Blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor in</p>
                    </div>
                    <div className={classes.blogPosts}>
                        {posts.map((post, index) => (
                            <BlogPost key={post.id} post={post}
                                      isActive={Math.floor(activeIndex / postsPerSlide) === Math.floor(index / postsPerSlide)}/>
                        ))}
                    </div>

                    <NavigationDots
                        count={numSlides}
                        activeIndex={Math.floor(activeIndex / postsPerSlide)}
                        onClick={handleDotClick}
                    />
                </div>
            </div>

            <button type="button" className={classes.ViewAll}>View All</button>
        </>
    );
};