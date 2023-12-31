import {useDispatch, useSelector} from "react-redux";
import {selectModalOpen, SetModalOpen} from "../../redux/features/modal/modalSlice.js";
import {SetInformationShow} from "../../redux/features/account/accountSlice.js";
import {BiTransfer} from "react-icons/bi";
import {Modal} from "antd";

const BkashOrder = () => {
    const dispatch = useDispatch();
    const {email, BkashFormValue} = useSelector((state)=>state.account);
    const {personalNumber, contactNumber} = BkashFormValue;
    const modalOpen = useSelector(selectModalOpen);

    const handleOk = () => {
        dispatch(SetModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetInformationShow(false));
        dispatch(SetModalOpen(false));
    };

    return (
        <>
            <Modal title="" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1 className="text-2xl mb-3 pt-3 flex items-center gap-2">
                    <span>বিকাশ BDT </span>
                    <BiTransfer size={20}/>
                    <span>বিকাশ Personal BDT </span>
                </h1>
                <div>
                    <div className="border-t border-b border-gray-300 py-2">
                        <p>
                            This exchange is done manually by an operator. Work time: 11 AM - 11 PM, GMT+06
                        </p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Amount Send</p>
                        <p>500 BDT</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Amount receive</p>
                        <p>500 BDT</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Amount Send</p>
                        <p>475.00 BDT</p>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 py-2">
                        <p>Bkash Personal Number</p>
                        <p>{personalNumber}</p>
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
                        <button className="w-1/2 px-3 py-2 text-white bg-green-500 text-md font-bold rounded-md">Confirm Order</button>
                        <button onClick={handleCancel} className="w-1/2 px-3 py-2 text-white text-md font-bold bg-red-500 rounded-md">Cancel Order</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default BkashOrder;