import Image from "next/image";
import supportImg from "../public/images/customer_care.jpg"
import classes from "./footer.module.css";
import Link from "next/link";

import logoImg from "../public/images/logo.png"
import callImg from "../public/images/ic-call.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, faPhoneAlt, faPhoneFlip, faStopwatch} from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <>
            <div className={classes.footer}>
                <div className={classes.imageFooter}>
                    <Image src={supportImg} alt="Customer support" fill/>
                    <div className={classes.textOverlay}>
                        <h1>Contact us today!</h1>
                        <p>If you have any questions, please fill out the form below and someone will get back with you
                            24-48 hours. Thank you and we look forward to speaking with you soon.</p>
                    </div>

                    <form method="POST" className={classes.form}>
                        <div>
                            <input type="text" id="name" name="name" placeholder="Full Name" required/>
                        </div>

                        <div>
                            <input type="email" id="email" name="email" placeholder="Email" required/>
                        </div>

                        <div>
                            <input type="text" id="phone" name="phone" placeholder="Phone Number" required/>
                        </div>

                        {/*<p className={classes.cta}>*/}
                        {/*    <MealsFormSubmit/>*/}
                        {/*</p>*/}
                    </form>
                </div>
            </div>
            <footer className={classes.footer_new}>
                <div className={classes.footerInfo}>
                    <span style={{maxWidth:'30%'}}>Stay ahead in a rapidly changing world. Subscribe to AquaSeen, our monthly look at the critical issues facing global businesses</span>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div className={classes.subscribe}>
                            <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
                            <button>SUBSCRIBE</button>
                        </div>
                        <div>
                            <input type="checkbox" id="IAgree" name="IAgree"/>
                            <label form="IAgree">*I have read the privacy policy and agree to its terms.</label>
                        </div>
                        {/*</input>*/}
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.Fcontent}>
                        <Image src={logoImg} alt="Ajak's Towing Logo" width={200} height={90} />
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolote Magna Aliqua. Ut Enim Ad Minim Veniam</p>

                    </div>
                    <div className={classes.content}>
                        <h2>Ajak's Towing</h2>
                        <nav>
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/components/services">Our Services</Link>
                            <Link href="/contact">Get In Touch</Link>
                        </nav>
                    </div>
                    <div className={classes.content}>
                        <div>
                            <h2>Contact Us</h2>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} width={15} height={18} color={"orange"}/>
                                    <span style={{marginLeft:"0.7em"}}>3924 E 10th Ave, Tampa, FL 33605</span>
                                </div>
                                <div className="contact-item">
                                    <FontAwesomeIcon icon={faPhone} width={15} height={20} color={"orange"}/>
                                    <span style={{marginLeft:"0.7em"}}>813-553-0064</span>
                                </div>
                            </div>
                            <h2>Store Hours</h2>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faStopwatch} width={15} color={"orange"}/>
                                <span style={{marginLeft:"0.7em"}}>Monday - Sunday / 24 Hours</span>
                            </div>
                        </div>

                    </div>
                    <div className={classes.content}>
                        <h2>Follow Us</h2>
                        {/*<FontAwesomeIcon icon={}*/}
                    </div>
                </div>
            </footer>
        </>
    )
}