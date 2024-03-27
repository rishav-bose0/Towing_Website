import classes from "./page.module.css";
import bg from "../../public/images/our-industries-numbers.png"
import Image from "next/image";
export default function Test() {
    // return (
    //     <>
    //         <div className={classes.testing}>
    //             <Image src={bg} alt="true" width={1500} height={600}/>
    //         </div>
    //     </>)

    return (
        <div className={classes.testing}>
            <div className={classes.overlay}></div>
            <Image src={bg} alt="Background Image" fill />
        </div>
    );
}