import classes from "./page.module.css";
import Image from "next/image";
import pexelImg from "../public/images/pexels-alena-rubtsova-9007426.jpg"
import logo from "../public/images/logo.png"
import searchSvg from "../public/images/search.svg"
import callCenterSvg from "../public/images/call_center.svg"
import cargoImg from "../public/images/section_2_img.jpg"
import Link from "next/link";
import ServiceMain from "../components/services_main";
import VideoSection from "../components/video_render";
import Footer from "../components/footer";
import BlogSlider from "../components/BlogSlider";

export default function HomePage() {
    return (
        <>
            <main>

                <div className={classes.navbar}>
                    <div className={classes.logoImg}>
                        <Image src={logo} alt="Logo" fill></Image>
                    </div>
                    <div className={classes.mid}>
                        <Link href="#">About Us</Link>
                        <Link href="#">Our Services</Link>
                        <Link href="#">BLOG</Link>
                    </div>
                    <div className={classes.end}>
                        <Link href="#">
                            <Image src={searchSvg} alt="search"></Image>
                        </Link>
                        <Link href="#">
                            <div style={{display:"flex", flexDirection:"row", flex:1}}>
                                <Image src={callCenterSvg} alt="search" width="10px" height="10px"></Image>
                                <p style={{fontSize:"0.8em"}}>GET IN TOUCH</p>
                            </div>
                        </Link>
                        <Link href="#">BLOG</Link>
                    </div>
                </div>

                <div className={classes.hero}>
                    <Image src={pexelImg} alt="Nothing" fill/>
                    <div className={classes.textOverlay}>
                        <p> Towing LLC LTD</p>
                        <p style={{marginTop:"1em"}}> Tampa's #1 Rated Towing Company</p>
                    </div>
                </div>

                <div className={classes.sectionTwo}>
                    <div className={classes.sectionTwoText}>
                        <h1>You can trust us to get the job done.</h1>
                        <p>We are here to provide you with fast and reliable roadside assistance 24/7. Our team of experience professionals is dedicated to helping you in any way we can! Whether you need a jump start for your battery a replacement for a flat tire or a delivery of well we've got you covered. we understand that emergence is happen and we are always ready to help</p>
                    </div>
                    <div className={classes.cargo}>
                        <img src={cargoImg.src} alt="Cargo Image"/>
                    </div>
                </div>

                <div className={classes.horizontalLine}></div>
                <div className={classes.servicesHeading}>
                    <h1>Our Services</h1>
                </div>
                <ServiceMain/>
                <VideoSection/>
                <BlogSlider/>
                <Footer/>

            </main>
        </>
    )
}