import {useDispatch, useSelector} from "react-redux";
import {selectModalOpen, SetModalOpen} from "../../redux/features/modal/modalSlice.js";
import {SetInformationShow} from "../../redux/features/account/accountSlice.js";
import {Modal} from "antd";
import {BiTransfer} from "react-icons/bi";
import {useEffect} from "react";
import {useExchangeCreateMutation} from "../../redux/features/exchange/exchangeApi.js";
import {useNavigate} from "react-router-dom";
import TransactionModal from "../modal/TransactionModal.jsx";


const CityBankOrder = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const modalOpen = useSelector(selectModalOpen);
    const {email,sendAccountId, receiveAccountId,sendAccountName, receiveAccountName, CityBankFormValue} = useSelector((state)=>state.account);
    const {accountName, accountNumber, contactNumber} = CityBankFormValue;
    const {sendAmount,receiveAmount }= useSelector((state)=>state.rate) || {};
    const [exchangeCreate, {isLoading, isSuccess}] = useExchangeCreateMutation();



    const handleOk = () => {
        dispatch(SetModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetInformationShow(false));
        dispatch(SetModalOpen(false));
    };


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetInformationShow(false));
            dispatch(SetModalOpen(false));
            navigate('/account/exchanges')
        }
    },[isSuccess, dispatch, navigate])


    const handleSubmit = () => {
        exchangeCreate({
            email,
            sendAccountId,
            receiveAccountId,
            sendAmount,
            receiveAmount,
            information: {
                accountName,
                accountNumber,
                contactNumber
            }
        })
    }







    return (
        <>
            <Modal title="" open={modalOpen} onOk={handleOk}>
                <h1 className="text-2xl mb-3 pt-3 flex items-center gap-2">
                    <span>{sendAccountName}</span>
                    <BiTransfer size={20}/>
                    <span>{receiveAccountName} </span>
                </h1>
                <div>
                    <div className="border-t border-b border-gray-300 py-2">
                        <p>
                            This exchange is done manually by an operator. Work time: 11 AM - 11 PM, GMT+06
                        </p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Amount Send</p>
                        <p>{sendAmount}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Amount receive</p>
                        <p>{receiveAmount}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>City Bank Account Name</p>
                        <p>{accountName}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>City Bank Account Number</p>
                        <p>{accountNumber}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Contact Mobile No.</p>
                        <p>{contactNumber}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Your Email Address</p>
                        <p>{email}</p>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button disabled={isLoading} onClick={handleSubmit} className="w-1/2 px-3 py-2 text-white bg-green-500 text-md font-bold rounded-md">Confirm Order</button>
                        <button onClick={handleCancel} className="w-1/2 px-3 py-2 text-white text-md font-bold bg-red-500 rounded-md">Cancel Order</button>
                    </div>
                </div>
            </Modal>

            <TransactionModal/>

        </>
    );
};

export default CityBankOrder;