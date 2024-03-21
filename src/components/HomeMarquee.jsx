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


                <section className="py-8">
                    <div className="grid grid-cols-1">
                        <div className="marquee-inner-wrapper">
                            <Marquee speed={90}>
                                    <div className="mx-28">
                                        <img className="h-[110px] w-[150px]" src={bkash} alt="marquee"/>
                                    </div>
                                    <div className="mx-24">
                                        <img className="h-[80px] w-[120px]" src={rocket} alt="marquee"/>
                                    </div>
                                    <div className="mx-24">
                                        <img className="h-[130px] w-[180px]" src={dbbl} alt="marquee"/>
                                    </div>
                                    <div className="mx-24">
                                        <img className="h-[110px] w-[150px]" src={paypal} alt="marquee"/>
                                    </div>
                                    <div className="mx-24">
                                        <img className="h-[110px] w-[150px]" src={cityBank} alt="marquee"/>
                                    </div>
                                    <div className="mx-24">
                                        <img className="h-[120px] w-[150px]" src={nagad} alt="marquee"/>
                                    </div>
                                    <div className="mx-24">
                                        <img className="h-[110px] w-[150px]" src={brac} alt="marquee"/>
                                    </div>
                            </Marquee>
                        </div>
                    </div>
                </section>

        </>
    );
};

export default HomeMarquee;