import Navbar from "../components/Navbar.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import {useSelector} from "react-redux";
import AccountInformation from "../components/accounts/AccountInformation.jsx";
import {selectInformationShow} from "../redux/features/account/accountSlice.js";
import HomeMarquee from "../components/HomeMarquee.jsx";
import ExchangeList from "../components/ExchangeList.jsx";

const HomePage = () => {
    const informationShow = useSelector(selectInformationShow);
    return (
        <>
            <Navbar/>

            {
                informationShow===false ? (
                    <>
                        <HomeMarquee/>
                        <Home/>
                        <ExchangeList/>
                    </>
                ) : (
                    <AccountInformation/>
                )
            }

            <Footer/>
        </>
    );
};

export default HomePage;