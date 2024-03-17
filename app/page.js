import classes from "./page.module.css";
import Image from "next/image";
import pexelImg from "../public/images/pexels-alena-rubtsova-9007426.jpg"
import cargoImg from "../public/images/section_2_img.jpg"
import ServicesSection from "../components/services_section";
import VideoSection from "../components/video_render";
import Footer from "../components/footer";
import BlogSlider from "../components/BlogSlider";
import NavBar from "../components/navBar";
import AllServices from "../components/services";

export default function HomePage() {
    return (
        <>
            <main>
                <NavBar/>

                <div className={classes.hero}>
                    <Image src={pexelImg} alt="Nothing" fill/>
                    <div className={classes.textOverlay}>
                        <p> Towing LLC LTD</p>
                        <p style={{marginTop: "1em"}}> Tampa's #1 Rated Towing Company</p>
                    </div>
                </div>

                <div className={classes.sectionTwo}>
                    <div className={classes.sectionTwoText}>
                        <h1>You can trust us to get the job done.</h1>
                        <p>We are here to provide you with fast and reliable roadside assistance 24/7. Our team of
                            experience professionals is dedicated to helping you in any way we can! Whether you need a
                            jump start for your battery a replacement for a flat tire or a delivery of well we've got
                            you covered. we understand that emergence is happen and we are always ready to help</p>
                    </div>
                    <div className={classes.cargo}>
                        <img src={cargoImg.src} alt="Cargo Image"/>
                    </div>
                </div>

                <div className={classes.horizontalLine}></div>
                <div className={classes.servicesHeading}>
                    <h1>Our Services</h1>
                </div>
                <ServicesSection/>
                <VideoSection/>
                <BlogSlider/>
                <Footer/>

            </main>
        </>
    )
}