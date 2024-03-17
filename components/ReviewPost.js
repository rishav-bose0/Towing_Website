import classes from './reviewslider.module.css';
import Image from "next/image";

export default function ReviewPost({review, isActive}) {
    return (
        <>
            <div className={`${classes.reviewPost} ${isActive ? classes.active : ''}`}>
                <div>
                    <p>{review.review}</p>
                    <div style={{display: "flex", gap: "1.5em"}}>
                        <div className={classes.writerInfo}>
                            <Image src={review.image} alt="image" width={60} height={60}/>
                        </div>
                        <div>
                            <p><span style={{fontSize: "1.2em", fontWeight: "bold"}}>{review.name}</span></p>
                            <p>{review.position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};