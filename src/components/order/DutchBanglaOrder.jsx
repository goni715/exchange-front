import {useDispatch, useSelector} from "react-redux";
import {selectModalOpen, SetModalOpen, SetTransactionModalOpen} from "../../redux/features/modal/modalSlice.js";
import {Modal} from "antd";
import {BiTransfer} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import TransactionModal from "../modal/TransactionModal.jsx";

const DutchBanglaOrder = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const modalOpen = useSelector(selectModalOpen);
    const {email,sendAccountName, receiveAccountName, DutchBanglaFormValue} = useSelector((state)=>state.account);
    const {accountName, accountNumber, contactNumber, contactNumber2} = DutchBanglaFormValue;
    const {sendAmount,receiveAmount }= useSelector((state)=>state.rate) || {};



    const handleOk = () => {
        dispatch(SetModalOpen(false));
    };
    const handleCancel = () => {
        navigate(0)
    };





    return (
        <>
            <Modal title="" open={modalOpen} onOk={handleOk}>
                <h1 className="text-xl sm:text-2xl mb-3 pt-3 flex items-center gap-2">
                    <span>{sendAccountName} </span>
                    <BiTransfer size={20}/>
                    <span>{receiveAccountName}</span>
                </h1>
                <div>
                    <div className="border-t border-b border-gray-300 py-2">
                        <p>
                            This exchange is done manually by an operator. Work time: 11 AM - 11 PM, GMT+06
                        </p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>Amount Send</p>
                        <p>{sendAmount}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Amount receive</p>
                        <p>{receiveAmount}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>DBBL Account Name</p>
                        <p>{accountName}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p> Account Number</p>
                        <p>{accountNumber}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>Contact Mobile No. 01</p>
                        <p>{contactNumber}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Contact Mobile No. 02</p>
                        <p>{contactNumber2}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>Your Email Address</p>
                        <p>{email}</p>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button onClick={handleCancel} className="w-1/2 px-3 py-2 text-white text-md font-bold bg-red-500 hover:bg-red-700 rounded-md">Cancel Order</button>
                        <button
                            onClick={()=>{
                                dispatch(SetModalOpen(false))
                                dispatch(SetTransactionModalOpen(true))
                            }}
                            className="w-1/2 px-3 py-2 text-white bg-green-500 hover:bg-green-700 text-md font-bold rounded-md"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </Modal>

            <TransactionModal/>

        </>
    );
};

export default DutchBanglaOrder;