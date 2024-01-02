import {useSelector} from "react-redux";
import BkashTransaction from "./BkashTransaction.jsx";
import RocketTransaction from "./RocketTransaction.jsx";
import NagadTransaction from "./NagadTransaction.jsx";
import CityBankTransaction from "./CityBankTransaction.jsx";
import DutchBanglaTransaction from "./DutchBanglaTransaction.jsx";
import WebMoneyTransaction from "./WebMoneyTransaction.jsx";
import PerfectMoneyTransaction from "./PerfectMoneyTransaction.jsx";
import BracBankTransaction from "./BracBankTransaction.jsx";

const Transaction = () => {
    const {sendAccountId} = useSelector((state)=>state.account);

    if(sendAccountId === "658d2e2a61d015e063fd92dd"){
        return(
            <BkashTransaction/>
        )
    }
    else if(sendAccountId === "658d2e6f61d015e063fd92e4"){
        return(
            <RocketTransaction/>
        )
    }
    else if(sendAccountId === "658d2e5e61d015e063fd92e1"){
        return(
            <NagadTransaction/>
        )
    }
    else if(sendAccountId === "658d2e8061d015e063fd92e7"){
        return(
            <CityBankTransaction/>
        )
    }
    else if(sendAccountId === "658d2e9261d015e063fd92ea"){
        return(
            <DutchBanglaTransaction/>
        )
    }
    else if(sendAccountId === "658d58f7c7550f0547f2d4ee"){
        return(
            <WebMoneyTransaction/>
        )
    }
    else if(sendAccountId === "658d5ab7c7550f0547f2d535"){
        return(
            <PerfectMoneyTransaction/>
        )
    }
    else if(sendAccountId === "6593de6c0bf18282107639b7"){
        return(
            <BracBankTransaction/>
        )
    }

};

export default Transaction;