import {Navigate} from "react-router-dom";
import {getToken} from "../helper/SessionHelper.js";

const PrivateRoute = ({children}) => {

    if(getToken()){
        return children;
    }else{
        return <Navigate to="/login" />
    }
};

export default PrivateRoute;