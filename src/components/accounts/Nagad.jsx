import {useDispatch, useSelector} from "react-redux";
import {SetEmail, SetNagadFormValue} from "../../redux/features/account/accountSlice.js";
import InformationModal from "../modal/InformationModal.jsx";
import {useState} from "react";
import {SetModalOpen} from "../../redux/features/modal/modalSlice.js";
import Error from "../validation/Error.jsx";

const Nagad = () => {
    const dispatch = useDispatch();
    const {email, NagadFormValue} = useSelector((state)=>state.account);
    const {personalNumber, contactNumber} = NagadFormValue;
    const [error, setError]= useState("");

    const handleSubmit = () => {
        if(email ==="" || personalNumber ==="" || contactNumber ===""){
            setError("All fields are required.!");
        }else{
            setError("");
            dispatch(SetModalOpen(true));
        }
    }


    return (
        <>
            <section className="bg-[#f7f7f7] py-10">
                <div className="container md:px-12 flex justify-center">
                    <div className="w-1/2">
                        <h1 className="text-3xl mb-3">Additional Information</h1>
                        {error && (
                            <Error message={error}/>
                        )
                        }
                        <div className="mb-3 mt-3">
                            <label className="block pb-2" htmlFor="email">
                                Your email address
                            </label>
                            <input onChange={(e)=>dispatch(SetEmail(e.target.value))} value={email} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="number">
                                Nagad Personal Number
                            </label>
                            <input onChange={(e)=>dispatch(SetNagadFormValue({property:"personalNumber", value:e.target.value}))} value={personalNumber} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="number"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="contact">
                                Contact Mobile Number.
                            </label>
                            <input onChange={(e)=>dispatch(SetNagadFormValue({property:"contactNumber", value:e.target.value}))} value={contactNumber} className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="contact"/>
                        </div>
                    </div>
                </div>
                <div className="container md:px-12 flex justify-center gap-8 mt-6">
                    <button onClick={handleSubmit} className="bg-[#0090D4] text-white rounded-md px-12 py-3">Process Exchange</button>
                </div>
            </section>

            <InformationModal/>
        </>
    );
};

export default Nagad;