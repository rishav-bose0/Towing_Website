import NavBar from "../../components/navBar";
import classes from "./page.module.css";
import Image from "next/image";
import pexelImg from "../../public/images/cover_4.jpg";
import VideoSection from "../../components/video_render";
import Footer from "../../components/footer";
import ImageOverlayText from "../../components/imageOverlayText";
import ReviewsSlider from "../../components/ReviewsSlider";

export default function AboutUs() {
    return (
        <>
            <NavBar className={classes.navbar}/>

            <ImageOverlayText texts={{"heading":"Who Are We", "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}}/>

            <div className={classes.hero}>
                <Image src={pexelImg} alt="Nothing" fill/>
            </div>
            <div className={classes.bodyContainer}>
                <h1>Tampa's #1 Rated Towing Company</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <VideoSection/>
            <ReviewsSlider/>
            <Footer/>
        </>
    )
}