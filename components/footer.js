import Image from "next/image";
import supportImg from "../public/images/customer_care.jpg"
import classes from "./footer.module.css";
import Link from "next/link";

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
                <div className={classes.container}>
                    <div className={classes.leftContent}>
                        <Image src="/logo.svg" alt="Ajak's Towing Logo" width={60} height={60} />
                        <p className={classes.address}>
                            3924 E 10th Ave, Tampa, FL 33605
                            <br />
                            Phone: 813-553-0064
                        </p>
                        <p className={classes.hours}>
                            Store Hours: <br />
                            Monday - Sunday / 24 Hours
                        </p>
                    </div>
                    <div className={classes.rightContent}>
                        <nav>
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/components/services">Our Services</Link>
                            <Link href="/contact">Get In Touch</Link>
                        </nav>
                        <div className={classes.socialMedia}>
                            {/* Social media icons */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}