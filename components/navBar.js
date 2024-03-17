'use client';

import classes from "./navbar.module.css";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import searchSvg from "../public/images/search.svg";
import callCenterSvg from "../public/images/call_center.svg";
import translatorSvg from "../public/images/translation.svg";
import {useEffect, useRef, useState} from "react";
import AllServices from "./services";

export default function NavBar({className}) {

    const [showAllServices, setShowAllServices] = useState(false);
    const ourServicesRef = useRef(null); // Ref for the "Our Services" link
    const allServiceRef = useRef(null); // Ref for the "Our Services" link

    const navbarClass = className ? `${className}` : classes.navbar;

    useEffect(() => {
        function handleClickOutside(event) {
            if (ourServicesRef.current && ourServicesRef.current.contains(event.target)) {
                // Toggle AllServices if "Our Services" is clicked
                setShowAllServices(prevState => !prevState);
            } else if (allServiceRef.current && allServiceRef.current.contains(event.target)) {
                setShowAllServices(true)
            } else {
                // Close AllServices if click is outside NavBar
                setShowAllServices(false);
            }
        }

        // Add click event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={navbarClass}>
                <div className={classes.logoImg}>
                    <Image src={logo} alt="Logo" fill></Image>
                </div>
                <div className={classes.mid}>
                    <Link href="/about_us">About Us</Link>
                    <Link href="#" ref={ourServicesRef}>Our Services</Link>
                    <Link href="#">BLOG</Link>
                </div>
                <div className={classes.end}>
                    <Link href="#">
                        <Image src={searchSvg} alt="search"></Image>
                    </Link>
                    <Link href="#">
                        <div style={{display: "flex", flexDirection: "row", flex: 1}}>
                            <Image src={callCenterSvg} alt="search" width="10px" height="10px"></Image>
                            <p style={{fontSize: "0.8em"}}>GET IN TOUCH</p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div style={{position: "relative", width: "45px", height: "35px"}}>
                            <Image src={translatorSvg} alt="translator" fill></Image>
                        </div>
                    </Link>
                </div>
            </div>
            <div ref={allServiceRef}>
                {showAllServices && <AllServices/>}
            </div>
        </>
    )
}