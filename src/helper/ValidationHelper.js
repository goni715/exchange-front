import {message} from "antd";
let EmailRegx = /\S+@\S+\.\S+/;


class ValidationHelper {

    SuccessToast(content){
        message.success(content);
    }

    ErrorToast(content){
        message.error(content);
    }

    WarningToast(content){
        message.warning(content);
    }

    LoadingToast(content){
        message.loading(content);
    }

    IsEmail(value){
        if(!EmailRegx.test(value) === true){
            return true;
        }
    }

}
export const {SuccessToast, ErrorToast, WarningToast, LoadingToast, IsEmail} = new ValidationHelper();