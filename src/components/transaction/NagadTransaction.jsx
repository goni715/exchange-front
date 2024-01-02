import {Modal} from "antd";
import {
    selectTransactionModalOpen,
    SetModalOpen,
    SetTransactionModalOpen
} from "../../redux/features/modal/modalSlice.js";
import {SetInformationShow} from "../../redux/features/account/accountSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const NagadTransaction = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const transactionModalOpen = useSelector(selectTransactionModalOpen);
    const {sendAmount,receiveAmount }= useSelector((state)=>state.rate) || {};


    const handleOk = () => {
        dispatch(SetTransactionModalOpen(false));
    };
    const handleCancel = () => {
        // dispatch(SetInformationShow(false));
        // dispatch(SetModalOpen(false));
        // dispatch(SetTransactionModalOpen(false));
        navigate(0)
    };

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
                        Our Nagad details
                    </div>
                    <div className="flex justify-between border-b border-gray-300 bg-[#f9f9f9] py-2">
                        <p>Nagad Agent No. (Cash Out) 	01755892955</p>
                        <p>01755892955</p>
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
                        <label className="block pb-2" htmlFor="email">
                            Enter transaction number/batch
                        </label>
                        <input className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="email"/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button onClick={handleCancel} className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Confirm Transaction
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default NagadTransaction;