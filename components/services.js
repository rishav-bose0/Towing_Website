import Link from "next/link";
import classes from "./section.module.css";
import svgArrow from "../public/images/arrowright.svg"
import Image from "next/image";
export default function AllServices() {
    return (
        <>
            <div className={classes.section}>
                <h1>Our Services</h1>
                <div className={classes.div}>
                    <Link href="/towing_service">
                        <div className={classes.linkContainer}>
                            <Image src={svgArrow} alt="img" width={20} height={20} />
                            <span>24/7 Towing Service</span>
                        </div>
                    </Link>
                    <Link href="/test">
                        <div className={classes.linkContainer}>
                            <Image src={svgArrow} alt="img" width={20} height={20} />
                            <span>Roadside Assistance</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.linkContainer}>
                            <Image src={svgArrow} alt="img" width={20} height={20} />
                            <span>Lockouts</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.linkContainer}>
                            <Image src={svgArrow} alt="img" width={20} height={20} />
                            <span>Junk Car Removal</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.linkContainer}>
                            <Image src={svgArrow} alt="img" width={20} height={20} />
                            <span>24/7 Impound Service</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.linkContainer}>
                            <Image src={svgArrow} alt="img" width={20} height={20} />
                            <span>Accident Towing</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}