import {Suspense} from 'react'
import classes from "./video_render.module.css"

export default function VideoSection() {
    return (
        <>
            <div className={classes.videoSection}>
                <div className={classes.textOverlay}>
                    <h1>Tampa's #1 Rated Towing Company</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Suspense fallback={<p>Loading video...</p>}>
                    <video preload="true" autoPlay muted loop aria-label="Video player" width="100%" height="700px"
                           style={{objectFit: "fill"}}>
                        <source src="/videos/pexels-stephen-pierce-7142130.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </Suspense>

            </div>
        </>
    )
}