import classes from "./page.module.css";
import NavBar from "../../components/navBar";
import ImageOverlayText from "../../components/imageOverlayText";
import Image from "next/image";
import pexelImg from "../../public/images/cover_4.jpg";
import posts from "../../blog_data.json";
import BlogPost from "../../components/BlogPost";
import Footer from "../../components/footer";
import Link from "next/link";

export default function BlogPage(){
    return (
        <>
            <NavBar className={classes.navbar}/>
            <ImageOverlayText texts={{
                "heading": "Blog",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            }}/>

            <div className={classes.hero}>
                <Image src={pexelImg} alt="Nothing" fill/>
            </div>

            <div className={classes.horizontalLine}></div>
            <div className={classes.servicesHeading}>
                <h1>Blog</h1>
            </div>

            <div className={classes.gridContainer}>
                {posts.map((post, index) => (
                    <div key={post.id} className={classes.gridItems}>
                        {/*<div className={classes.img}>*/}
                            <Image src={post.images} alt="Images" width={430} height={350} objectFit="cover"/>
                        {/*</div>*/}
                        <p><span style={{color:"orangered"}}>{post.date}</span></p>
                        {/*<p style={{fontSize:"1.4em",marginTop:"-2px"}}><b>{post.name}</b></p>*/}
                        <h2>{post.name}</h2>
                        <p style={{marginTop:"-2px"}}>{post.heading}</p>
                    </div>
                ))}
            </div>

            <Link href="" className={classes.contactBox}>Load More</Link>
            <Footer/>
        </>
    )
}