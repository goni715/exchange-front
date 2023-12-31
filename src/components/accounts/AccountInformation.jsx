import {useSelector} from "react-redux";
import Rocket from "./Rocket.jsx";
import Nagad from "./Nagad.jsx";
import DutchBangla from "./DutchBangla.jsx";
import CityBank from "./CityBank.jsx";
import Bkash from "./Bkash.jsx";

const AccountInformation = () => {
    const AccountId = useSelector((state)=>state.account.accountId);

    if(AccountId === "658d2f2161d015e063fd92f4"){
        return(
            <Rocket/>
        )
    }
    else if(AccountId === "658d2f0f61d015e063fd92f1"){
        return(
            <Nagad/>
        )
    }
    else if(AccountId === "658d2f3a61d015e063fd92f8"){
        return(
            <DutchBangla/>
        )
    }
    else if(AccountId === "658d2f5161d015e063fd92fb"){
        return(
            <CityBank/>
        )
    }
    else if(AccountId === "658d2f7561d015e063fd92ff"){
        return(
            <Bkash/>
        )
    }

};

export default AccountInformation;