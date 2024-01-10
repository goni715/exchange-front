import {useSelector} from "react-redux";
import Rocket from "./Rocket.jsx";
import Nagad from "./Nagad.jsx";
import DutchBangla from "./DutchBangla.jsx";
import CityBank from "./CityBank.jsx";
import Bkash from "./Bkash.jsx";
import PerfectMoney from "./PerfectMoney.jsx";
import WebMoney from "./WebMoney.jsx";
import BracBank from "./BracBank.jsx";

const AccountInformation = () => {
    const receiveAccountId = useSelector((state)=>state.account.receiveAccountId);

    if(receiveAccountId === "659d8a30510cf0bdd944d2ca"){
        return(
            <Rocket/>
        )
    }
    else if(receiveAccountId === "659d8a02510cf0bdd944d2c6"){
        return(
            <Nagad/>
        )
    }
    else if(receiveAccountId === "659d8a51510cf0bdd944d2ce"){
        return(
            <DutchBangla/>
        )
    }
    else if(receiveAccountId === "659d8995510cf0bdd944d2be"){
        return(
            <CityBank/>
        )
    }
    else if(receiveAccountId === "659d8963510cf0bdd944d2ba"){
        return(
            <Bkash/>
        )
    }
    else if(receiveAccountId === "659d8a92510cf0bdd944d2d2"){
        return(
            <PerfectMoney/>
        )
    }
    else if(receiveAccountId === "659d89c9510cf0bdd944d2c2"){
        return(
            <WebMoney/>
        )
    }
    else if(receiveAccountId === "659d891c510cf0bdd944d2b4"){
        return(
            <BracBank/>
        )
    }

};

export default AccountInformation;