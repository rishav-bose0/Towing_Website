import NavBar from "../../components/navBar";
import classes from "./page.module.css";
import ImageOverlayText from "../../components/imageOverlayText";
import Image from "next/image";
import pexelImg from "../../public/images/cover_4.jpg";
import Link from "next/link";
import ReviewsSlider from "../../components/ReviewsSlider";
import Footer from "../../components/footer";
import ServicesSection from "../../components/services_section";

export default function TowingService() {
    return (
        <>
            <NavBar className={classes.navbar}/>

            <ImageOverlayText texts={{
                "heading": "24/7 Towing Service",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            }}/>

            <div className={classes.hero}>
                <Image src={pexelImg} alt="Nothing" fill/>
            </div>

            <div className={classes.bodyContainer}>
                <p>
                    AquaSEEN™ Disinfectant is a highly effective antimicrobial solution capable of eliminating various
                    pathogens, including spores. AquaSEEN™ achieves this by altering water molecules' intrinsic
                    properties, creating an environment where microorganisms cannot survive. With a 99.99% success rate
                    against harmful bacteria, viruses, fungi, and yeasts. AquaSEEN™ is versatile and safe for
                    comprehensive disinfection in various applications in healthcare facilities.
                </p>
                <p>
                    AquaSEEN for healthcare facilities combats microbial resistance and helps mitigate the risk of
                    cross-contamination. It does that by effectively killing pathogens on surfaces without the need for
                    rinsing. AquaSEEN for healthcare facilities's has a rapid action which translates to reduction in
                    disinfection time. This, in turn, leads to a faster room turnovers, lowers labor costs, and saves
                    energy in facilities with energy-intensive systems. AquaSEEN for healthcare facilities is the most
                    cost-effective solution in the market. It allows customers to experience shorter patient stays, and
                    decreased legal liabilities, all contributing to substantial cost savings.
                </p>
                <p>
                    Unlike other chemical compounds, AquaSEEN for healthcare facilities is a game-changer— it is
                    odorless, nonbleaching, and non-staining for surfaces and furniture. This characteristic makes it
                    the best deodorization agent there is. AquaSEEN for healthcare facilities is approved by the EU
                    Commission Implementing Regulation 2021/347. It is available in five convenient weight packages
                    catering to diverse needs and ensuring flexibility in usage.
                </p>

                <div className={classes.contactUs}>
                    <h1>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit ?</h1>
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit</p>

                    <Link href="#" className={classes.contactBox} passHref>
                        Contact Us
                    </Link>
                </div>

                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque metus et est rutrum,
                    sed sollicitudin augue tincidunt. Nulla bibendum eleifend massa, sed sodales nunc eleifend vitae.
                    Vivamus sed tincidunt ipsum. Sed libero leo, tincidunt a tristique quis, hendrerit sit amet lorem.
                    Quisque ex dolor, tempor eget efficitur non, auctor nec lacus. Vivamus imperdiet blandit commodo.
                    Aliquam mattis leo ac neque consequat elementum. Sed sed placerat lorem. Aenean lobortis magna
                    tempor, pharetra tellus auctor, egestas arcu. Cras semper hendrerit rutrum.
                </p>
                <p>Nunc in malesuada mi. Mauris ac luctus ante. Etiam in ullamcorper sapien. Nullam porta ullamcorper
                    bibendum. Mauris a massa id est hendrerit aliquam a a ipsum. Fusce quis ipsum a enim ultricies
                    mollis. Donec interdum iaculis tortor, nec gravida leo auctor vel.
                </p>
                <p>
                    Nam sit amet metus a nisi laoreet lobortis. Nullam venenatis diam dapibus sapien suscipit suscipit.
                    Phasellus tellus erat, feugiat eget gravida at, interdum in sem. Sed rutrum tincidunt tristique.
                    Aliquam sit amet nulla at risus sollicitudin mollis vitae vitae diam. Suspendisse vehicula augue
                    quis volutpat tristique. Phasellus mollis lacus diam, in porttitor nisl euismod ultricies. Phasellus
                    a rutrum sapien, id iaculis elit. Mauris lobortis rhoncus elit ut pulvinar. Cras vel tempus lorem.
                    Sed vehicula sollicitudin dictum. Morbi eu metus in nunc posuere dignissim. Etiam scelerisque magna
                    sed finibus aliquam.
                </p>

                <h1 style={{marginTop:'2em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque metus et est rutrum,
                    sed sollicitudin augue tincidunt. Nulla bibendum eleifend massa, sed sodales nunc eleifend vitae.
                    Vivamus sed tincidunt ipsum. Sed libero leo, tincidunt a tristique quis, hendrerit sit amet lorem.
                    Quisque ex dolor, tempor eget efficitur non, auctor nec lacus. Vivamus imperdiet blandit commodo.
                    Aliquam mattis leo ac neque consequat elementum. Sed sed placerat lorem. Aenean lobortis magna
                    tempor, pharetra tellus auctor, egestas arcu. Cras semper hendrerit rutrum.
                </p>
            </div>

            <ReviewsSlider/>
            <ServicesSection/>
            <Footer/>

        </>
    )
}