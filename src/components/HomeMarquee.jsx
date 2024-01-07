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


                <section className="py-10 md:py-16">
                    <div className="grid grid-cols-1">
                        <div className="marquee-inner-wrapper">
                            <Marquee>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[60px] w-[250px]" src={bkash} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[80px] w-[250px]" src={rocket} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[80px] w-[250px]" src={dbbl} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[80px] w-[250px]" src={paypal} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[80px] w-[250px]" src={cityBank} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[80px] w-[250px]" src={nagad} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-3/12">
                                    <img className="h-[80px] w-[250px]" src={brac} alt="marquee"/>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </section>

        </>
    );
};

export default HomeMarquee;