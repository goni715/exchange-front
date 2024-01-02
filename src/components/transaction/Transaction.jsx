import {useSelector} from "react-redux";
import BkashTransaction from "./BkashTransaction.jsx";
import RocketTransaction from "./RocketTransaction.jsx";

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
};

export default Transaction;