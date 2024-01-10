import {useSelector} from "react-redux";
import BkashTransaction from "./BkashTransaction.jsx";
import RocketTransaction from "./RocketTransaction.jsx";
import NagadTransaction from "./NagadTransaction.jsx";
import CityBankTransaction from "./CityBankTransaction.jsx";
import DutchBanglaTransaction from "./DutchBanglaTransaction.jsx";
import WebMoneyTransaction from "./WebMoneyTransaction.jsx";
import PerfectMoneyTransaction from "./PerfectMoneyTransaction.jsx";
import BracBankTransaction from "./BracBankTransaction.jsx";
import PayPalTransaction from "./PayPalTransaction.jsx";
import TetherTransaction from "./TetherTransaction.jsx";
import PayeerTransaction from "./PayeerTransaction.jsx";
import AdvCashTransaction from "./AdvCashTransaction.jsx";

const Transaction = () => {
    const {sendAccountId} = useSelector((state)=>state.account);

    if(sendAccountId === "659d8664510cf0bdd944d27c"){
        return(
            <BkashTransaction/>
        )
    }
    else if(sendAccountId === "659d86d7510cf0bdd944d28c"){
        return(
            <RocketTransaction/>
        )
    }
    else if(sendAccountId === "659d86bc510cf0bdd944d288"){
        return(
            <NagadTransaction/>
        )
    }
    else if(sendAccountId === "659d86f4510cf0bdd944d290"){
        return(
            <CityBankTransaction/>
        )
    }
    else if(sendAccountId === "659d878d510cf0bdd944d298"){
        return(
            <DutchBanglaTransaction/>
        )
    }
    else if(sendAccountId === "659d87ae510cf0bdd944d29c"){
        return(
            <WebMoneyTransaction/>
        )
    }
    else if(sendAccountId === "659d880d510cf0bdd944d2a0"){
        return(
            <PerfectMoneyTransaction/>
        )
    }
    else if(sendAccountId === "659d871d510cf0bdd944d294"){
        return(
            <BracBankTransaction/>
        )
    }
    else if(sendAccountId === "659d8878510cf0bdd944d2ac"){
        return(
            <PayPalTransaction/>
        )
    }
    else if(sendAccountId === "659d88b1510cf0bdd944d2b0"){
        return(
            <TetherTransaction/>
        )
    }
    else if(sendAccountId === "659d8833510cf0bdd944d2a4"){
        return(
            <PayeerTransaction/>
        )
    }
    else if(sendAccountId === "659d8854510cf0bdd944d2a8"){
        return(
            <AdvCashTransaction/>
        )
    }

};

export default Transaction;