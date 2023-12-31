import {useSelector} from "react-redux";
import RocketOrder from "./RocketOrder.jsx";
import NagadOrder from "./NagadOrder.jsx";
import DutchBanglaOrder from "./DutchBanglaOrder.jsx";
import CityBankOrder from "./CityBankOrder.jsx";
import BkashOrder from "./BkashOrder.jsx";

const Order = () => {
    const AccountId = useSelector((state)=>state.account.receiveAccountId);

    if(AccountId === "658d2f2161d015e063fd92f4"){
        return(
            <RocketOrder/>
        )
    }
    else if(AccountId === "658d2f0f61d015e063fd92f1"){
        return(
            <NagadOrder/>
        )
    }
    else if(AccountId === "658d2f3a61d015e063fd92f8"){
        return(
            <DutchBanglaOrder/>
        )
    }
    else if(AccountId === "658d2f5161d015e063fd92fb"){
        return(
            <CityBankOrder/>
        )
    }
    else if(AccountId === "658d2f7561d015e063fd92ff"){
        return(
            <BkashOrder/>
        )
    }

};

export default Order;