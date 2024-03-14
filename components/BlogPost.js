// components/BlogPost.jsx
import styles from './BlogSlider.module.css';
// import classes from "*.module.css";

export default function BlogPost({post, isActive}) {
    return (
        <>
            <div className={`${styles.blogPost} ${isActive ? styles.active : ''}`}>
                <h2>{post.name}</h2>
                <div className={styles.descriptions}>
                    <p>{post.heading}</p>
                    <a href="#">Read Facts →</a>
                </div>
            </div>
        </>
    );
};