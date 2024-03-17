import classes from "./imageOverlayText.module.css";
export default function ImageOverlayText({texts}) {
    // TODO First check
    return (
        <>
            <div className={classes.InfoOverlay}>
                <h1>{texts.heading}</h1>
                <p>{texts.description}</p>
            </div>
        </>
    )
}