import {useDispatch, useSelector} from "react-redux";
import {SetCityBankFormValue, SetEmail} from "../../redux/features/account/accountSlice.js";
import {useState} from "react";
import {SetModalOpen} from "../../redux/features/modal/modalSlice.js";
import Error from "../validation/Error.jsx";
import OrderModal from "../modal/OrderModal.jsx";

const CityBank = () => {
    const dispatch = useDispatch();
    const {email, CityBankFormValue} = useSelector((state)=>state.account);
    const {accountName, accountNumber, contactNumber} = CityBankFormValue;
    const [error, setError]= useState("");

    const handleSubmit = () => {
        if(email ==="" || accountName==="" || accountNumber==="" || contactNumber===""){
            setError("All fields are required.!");
        }else{
            setError("");
            dispatch(SetModalOpen(true));
        }
    }


    return (
        <>
            <section className="bg-[#f7f7f7] py-10">
                <div className="md:px-12 flex justify-center">
                    <div className="w-1/2">
                        <h1 className="text-3xl mb-3">Additional Information</h1>
                        {error && (
                                <Error message={error}/>
                            )
                        }
                        <div className="mb-3 mt-3">
                            <label className="block pb-2" htmlFor="email">
                                Your Email Address
                            </label>
                            <input onChange={(e)=>dispatch(SetEmail(e.target.value))} value={email} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="number">
                                City Bank Account Name.
                            </label>
                            <input onChange={(e)=>dispatch(SetCityBankFormValue({property:"accountName", value:e.target.value}))} value={accountName} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="number"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="number">
                                City Bank Account Number.
                            </label>
                            <input onChange={(e)=>dispatch(SetCityBankFormValue({property:"accountNumber", value:e.target.value}))} value={accountNumber} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="number"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="contact">
                                Contact Mobile No.
                            </label>
                            <input onChange={(e)=>dispatch(SetCityBankFormValue({property:"contactNumber", value:e.target.value}))} value={contactNumber} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="contact"/>
                        </div>
                    </div>
                </div>
                <div className="container md:px-12 flex justify-center gap-8 mt-6">
                    <button onClick={handleSubmit} className="bg-[#0090D4] text-white rounded-md px-12 py-3">Process Exchange</button>
                </div>
            </section>

            <OrderModal/>
        </>
    );
};

export default CityBank;