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

    if(receiveAccountId === "658d2f2161d015e063fd92f4"){
        return(
            <Rocket/>
        )
    }
    else if(receiveAccountId === "658d2f0f61d015e063fd92f1"){
        return(
            <Nagad/>
        )
    }
    else if(receiveAccountId === "658d2f3a61d015e063fd92f8"){
        return(
            <DutchBangla/>
        )
    }
    else if(receiveAccountId === "658d2f5161d015e063fd92fb"){
        return(
            <CityBank/>
        )
    }
    else if(receiveAccountId === "658d2f7561d015e063fd92ff"){
        return(
            <Bkash/>
        )
    }
    else if(receiveAccountId === "65930fa44798ee030c6d54f3"){
        return(
            <PerfectMoney/>
        )
    }
    else if(receiveAccountId === "65930d3d4798ee030c6d54a5"){
        return(
            <WebMoney/>
        )
    }
    else if(receiveAccountId === "6593e3150bf1828210763a67"){
        return(
            <BracBank/>
        )
    }

};

export default AccountInformation;