import {useSelector} from "react-redux";
import RocketOrder from "./RocketOrder.jsx";
import NagadOrder from "./NagadOrder.jsx";
import DutchBanglaOrder from "./DutchBanglaOrder.jsx";
import CityBankOrder from "./CityBankOrder.jsx";
import BkashOrder from "./BkashOrder.jsx";
import BracBankOrder from "./BracBankOrder.jsx";
import WebMoneyOrder from "./WebMoneyOrder.jsx";
import PerfectMoneyOrder from "./PerfectMoneyOrder.jsx";

const Order = () => {
    const receiveAccountId = useSelector((state)=>state.account.receiveAccountId);

    if(receiveAccountId === "659d8a30510cf0bdd944d2ca"){
        return(
            <RocketOrder/>
        )
    }
    else if(receiveAccountId === "659d8a02510cf0bdd944d2c6"){
        return(
            <NagadOrder/>
        )
    }
    else if(receiveAccountId === "659d8a51510cf0bdd944d2ce"){
        return(
            <DutchBanglaOrder/>
        )
    }
    else if(receiveAccountId === "659d8995510cf0bdd944d2be"){
        return(
            <CityBankOrder/>
        )
    }
    else if(receiveAccountId === "659d8963510cf0bdd944d2ba"){
        return(
            <BkashOrder/>
        )
    }
    else if(receiveAccountId === "659d891c510cf0bdd944d2b4"){
        return(
            <BracBankOrder/>
        )
    }
    else if(receiveAccountId === "659d89c9510cf0bdd944d2c2"){
        return(
            <WebMoneyOrder/>
        )
    }
    else if(receiveAccountId === "659d8a92510cf0bdd944d2d2"){
        return(
            <PerfectMoneyOrder/>
        )
    }

};

export default Order;