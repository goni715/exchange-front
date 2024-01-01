import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import MyExchanges from "../components/exchanges/MyExchanges.jsx";

const MyExchangesPage = () => {
    return (
        <>
          <Navbar/>
            <MyExchanges/>
          <Footer/>
        </>
    );
};

export default MyExchangesPage;