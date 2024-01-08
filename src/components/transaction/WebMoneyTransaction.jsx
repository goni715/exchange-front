import {Modal} from "antd";
import {
    selectTransactionModalOpen,
    SetModalOpen,
    SetTransactionModalOpen
} from "../../redux/features/modal/modalSlice.js";
import {SetInformationShow} from "../../redux/features/account/accountSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useExchangeCreateMutation} from "../../redux/features/exchange/exchangeApi.js";
import {useGetInformationQuery} from "../../redux/features/information/InformationApi.js";

const WebMoneyTransaction = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const transactionModalOpen = useSelector(selectTransactionModalOpen);
    const {email,sendAccountId,receiveAccountId, ReceiveAccountInformation} = useSelector((state)=>state.account);
    const {sendAmount,receiveAmount }= useSelector((state)=>state.rate) || {};
    const [transactionOrBatch, setTransactionOrBatch] = useState("");
    const [exchangeCreate, {isLoading, isSuccess}] = useExchangeCreateMutation();
    const {data} = useGetInformationQuery();
    const information = data?.data || {};
    const {wmzPurseId} = information || {};





    const handleOk = () => {
        dispatch(SetTransactionModalOpen(false));
    };

    const handleCancel = () => {
        navigate(0)
    };



    useEffect(()=>{
        if(isSuccess){
            dispatch(SetInformationShow(false));
            dispatch(SetModalOpen(false));
            dispatch(SetTransactionModalOpen(false))
            navigate('/account/exchanges')
        }
    },[isSuccess, dispatch, navigate])


    const handleSubmit = () => {
        exchangeCreate({
            transactionOrBatch,
            email,
            sendAccountId,
            receiveAccountId,
            sendAmount,
            receiveAmount,
            information: ReceiveAccountInformation
        })
    }


    return (
        <>
            <Modal title="" open={transactionModalOpen} onOk={handleOk}>
                <h1 className="text-2xl mb-3 pt-3 flex items-center gap-2">
                    Data About Transfer
                </h1>
                <div>
                    <div className="border-t border-b border-gray-300 py-2">
                        <p>
                            This exchange is done manually by an operator. Work time: 11 AM - 11 PM, GMT+06
                        </p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        Our Web money details
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>WMZ Purse Id</p>
                        <p>{wmzPurseId || "..."}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Enter payment amount</p>
                        <p>{sendAmount}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>Enter payment description</p>
                        <p>Exchange {sendAmount}</p>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="transaction">
                            Enter transaction number/batch
                        </label>
                        <input onChange={(e)=>setTransactionOrBatch(e.target.value)} value={transactionOrBatch} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="transaction"/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button onClick={handleCancel} className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <button onClick={handleSubmit} disabled={isLoading} className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            {isLoading ? "Processing..." : "Confirm Transaction"}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default WebMoneyTransaction;