import {Modal} from "antd";
import {
    selectTransactionModalOpen,
    SetModalOpen,
    SetTransactionModalOpen
} from "../../redux/features/modal/modalSlice.js";
import {SetInformationShow} from "../../redux/features/account/accountSlice.js";
import {useDispatch, useSelector} from "react-redux";

const WebMoneyTransaction = () => {
    const dispatch = useDispatch();
    const transactionModalOpen = useSelector(selectTransactionModalOpen);
    const {sendAmount,receiveAmount }= useSelector((state)=>state.rate) || {};


    const handleOk = () => {
        dispatch(SetTransactionModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetInformationShow(false));
        dispatch(SetModalOpen(false));
        dispatch(SetTransactionModalOpen(false));
    };

    return (
        <>
            <Modal title="" open={transactionModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Bkash Agent No. (Cash Out) 	01755892955</p>
                        <p>01755892955</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Enter payment amount</p>
                        <p>{sendAmount}</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Enter payment description</p>
                        <p>Exchange{sendAmount}</p>
                    </div>
                    <div className="border-b border-gray-300 py-2">
                        <label className="block pb-2" htmlFor="email">
                            Enter transaction number/batch
                        </label>
                        <input className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="email"/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button className="w-full px-3 py-2 text-white bg-green-500 text-md font-bold rounded-md">
                            Confirm Transaction
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default WebMoneyTransaction;