import Marquee from "react-fast-marquee";
import bkash from "../assets/images/bkash.svg";
import rocket from "../assets/images/rocket.png";
import dbbl from "../assets/images/dbbl.jpg";
import paypal from "../assets/images/paypal.jpg";
import cityBank from "../assets/images/cityBank.jpg";
import nagad from "../assets/images/nagad.png";
import brac from "../assets/images/brac.jpg";


const HomeMarquee = () => {
    return (
        <>


                <section className="py-10 md:py-12">
                    <div className="grid grid-cols-1">
                        <div className="marquee-inner-wrapper">
                            <Marquee speed={90}>
                                <div className="mx-0 md:mx-2 w-2/12 md:w-3/12">
                                    <img className="h-[120px] w-[300px]" src={bkash} alt="marquee"/>
                                </div>
                                <div className="mx-0 md:mx-2 w-2/12 md:w-3/12">
                                    <img className="h-[80px] w-[250px]" src={rocket} alt="marquee"/>
                                </div>
                                <div className="mx-0 md:mx-2 w-2/12 md:w-3/12">
                                    <img className="h-[120px] w-[300px]" src={dbbl} alt="marquee"/>
                                </div>
                                <div className="mx-0 md:mx-2 w-2/12 md:w-3/12">
                                    <img className="h-[130px] w-[250px]" src={paypal} alt="marquee"/>
                                </div>
                                <div className="mx-0 md:mx-2 w-2/12 md:w-3/12">
                                    <img className="h-[130px] w-[320px]" src={cityBank} alt="marquee"/>
                                </div>
                                <div className="mx-0  w-2/12 md:w-3/12">
                                    <img className="h-[150px] w-[330px]" src={nagad} alt="marquee"/>
                                </div>
                                <div className="mx-0 md:mx-2 w-2/12 md:w-3/12">
                                    <img className="h-[120px] w-[250px]" src={brac} alt="marquee"/>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </section>

        </>
    );
};

export default HomeMarquee;