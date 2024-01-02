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

    if(receiveAccountId === "658d2f2161d015e063fd92f4"){
        return(
            <RocketOrder/>
        )
    }
    else if(receiveAccountId === "658d2f0f61d015e063fd92f1"){
        return(
            <NagadOrder/>
        )
    }
    else if(receiveAccountId === "658d2f3a61d015e063fd92f8"){
        return(
            <DutchBanglaOrder/>
        )
    }
    else if(receiveAccountId === "658d2f5161d015e063fd92fb"){
        return(
            <CityBankOrder/>
        )
    }
    else if(receiveAccountId === "658d2f7561d015e063fd92ff"){
        return(
            <BkashOrder/>
        )
    }
    else if(receiveAccountId === "6593e3150bf1828210763a67"){
        return(
            <BracBankOrder/>
        )
    }
    else if(receiveAccountId === "65930d3d4798ee030c6d54a5"){
        return(
            <WebMoneyOrder/>
        )
    }
    else if(receiveAccountId === "65930fa44798ee030c6d54f3"){
        return(
            <PerfectMoneyOrder/>
        )
    }

};

export default Order;