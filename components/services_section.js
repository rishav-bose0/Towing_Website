import classes from "./services_section.module.css";
import servicesData from "../info_data.json"
import Image from "next/image";
import Link from "next/link";
export default function ServicesSection(){
    return (
        <>
            <div className={classes.serviceList}>
                {servicesData.map((service, index) => (
                    <div key={index} className={classes.serviceItem}>
                        <Link href="#">
                            <Image src={service.image} alt="Image" fill/>
                            <div className={classes.textOverlay}>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}