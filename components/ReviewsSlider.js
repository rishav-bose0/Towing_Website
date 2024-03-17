'use client';
import {useState} from 'react';
import NavigationDots from './NavigationDots';
import classes from './reviewslider.module.css';
import reviews from "../client_reviews_data.json"
import ReviewPost from "./ReviewPost";

export default function ReviewsSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const postsPerSlide = 3;
    const numSlides = Math.ceil(reviews.length / postsPerSlide);
    const handleDotClick = (index) => {
        setActiveIndex(index * postsPerSlide);
    };

    return (
        <>
            <div className={classes.reviewSlider}>
                <div className={classes.reviewPostNav}>
                     {/*<div>*/}
                        <h1>What Our Clients Say?</h1>
                    {/*</div>*/}
                    <div className={classes.reviewPosts}>
                        {reviews.map((review, index) => (
                            <ReviewPost key={review.id} review={review}
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
        </>
    );
};