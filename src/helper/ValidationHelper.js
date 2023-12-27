import {message} from "antd";

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

}


export const {SuccessToast, ErrorToast, WarningToast, LoadingToast} = new ValidationHelper();