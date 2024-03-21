import {
    useGetAllReceiveAccountQuery,
    useGetAllSendAccountQuery, useGetReceiveAccountQuery, useGetSendAccountQuery
} from "../redux/features/account/accountApi.js";
import {useGetRateMutation} from "../redux/features/rate/rateApi.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetSendReceiveValue} from "../redux/features/rate/rateSlice.js";
import Error from "./validation/Error.jsx";
import OrderModal from "./modal/OrderModal.jsx";
import {SetInformationShow, SetReceiveAccountId, SetSendAccountId} from "../redux/features/account/accountSlice.js";
import {getToken} from "../helper/SessionHelper.js";
import {useNavigate} from "react-router-dom";
import AccountLoading from "./Loader/AccountLoading.jsx";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data:sendData} = useGetAllSendAccountQuery();
    const {data:sendAccounts} = sendData || {};

    const {data:receiveData} = useGetAllReceiveAccountQuery();
    const {data:receiveAccounts} = receiveData || {};

    const [getRate] = useGetRateMutation();
    const {unit, current, sendValue, receiveValue, reserved, reservedValue,minimum, minimumValue }= useSelector((state)=>state.rate) || {};
    const {sendAccountId, receiveAccountId }= useSelector((state)=>state.account) || {};

    const {data:receiveAccountData, isLoading:receiveAccountsLoading} = useGetReceiveAccountQuery(receiveAccountId);
    const {data:sendAccountData, isLoading:sendAccountsLoading} = useGetSendAccountQuery(sendAccountId);
    const [error, setError]= useState("");





    useEffect(()=>{
        if(sendAccountId !=="" && receiveAccountId !==""){
            getRate({
                sendAccountId,
                receiveAccountId
            })
        }
    },[sendAccountId, receiveAccountId, getRate])




    const handleSubmit = () => {
      if(sendValue < Number(minimumValue)){
          setError(`The minimum amount for exchange is ${minimum}`)
      }
      else if(receiveValue > Number(reservedValue)){
          setError(`The amount of exchange exceed our reserve. Please contact the administrator.`)
      }
      else{
          if(getToken()){
              setError("");
              dispatch(SetInformationShow(true));
          }
          else{
             navigate('/login')
          }
      }
    }





    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-10">

                {
                    sendAccountsLoading===true || receiveAccountsLoading===true ? (
                        <>
                            <AccountLoading/>
                        </>
                    ) : (
                        <>
                            <div className="md:px-12 flex justify-center gap-8">
                                {error !== "" && (
                                    <div className="w-3/4 mb-5">
                                        <Error message={error}/>
                                    </div>
                                )
                                }
                            </div>
                            <div className="md:px-12 flex flex-col items-center md:flex-row md:justify-center gap-8">
                                <div className="w-[300px] p-4 md:w-2/5 lg:w-1/4 bg-white shadow rounded-md">
                                    <h3 className="mb-3">Send From</h3>
                                    <select
                                        onChange={(e) => {
                                            dispatch(SetSendAccountId(e.target.value));
                                        }}
                                        value={sendAccountId}
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                        name="" id="">
                                        {sendAccounts?.length > 0 && (
                                            <>
                                                {
                                                    sendAccounts.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option hidden={item?.hidden} key={i.toString()}
                                                                        value={item._id}>{item.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                        }
                                    </select>

                                    <input onChange={(e) => dispatch(SetSendReceiveValue(e.target.value))}
                                           value={sendValue}
                                           type="text"
                                           className="w-full px-4 py-2 mt-4 outline-none border border-b-gray-400 rounded-md"/>
                                    <div className="text-[#31708f] bg-[#d9edf7] rounded mt-4 px-4 py-2">
                                        Exchange rate: {unit} = {current}
                                    </div>
                                </div>
                                <div className="w-[300px] p-4 md:w-2/5 lg:w-1/4 bg-white shadow rounded-md">
                                    <h3 className="mb-3">Receive To</h3>
                                    <select
                                        onChange={(e) => {
                                            dispatch(SetReceiveAccountId(e.target.value));
                                        }}
                                        value={receiveAccountId}
                                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                                        {receiveAccounts?.length > 0 && (
                                            <>
                                                {
                                                    receiveAccounts.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option hidden={item?.hidden} key={i.toString()}
                                                                        value={item._id}>{item.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                        }
                                    </select>

                                    <input value={receiveValue} type="text" readOnly
                                           className="w-full px-4 py-2 mt-4 outline-none border border-b-gray-400 rounded-md"/>
                                    <div className="text-[#31708f] bg-[#d9edf7] rounded mt-4 px-4 py-2">
                                        Reserve: {reserved}
                                    </div>

                                </div>
                            </div>

                            <div className="md:px-12 flex justify-center gap-8 mt-6">
                                <button onClick={handleSubmit}
                                        className="bg-[#0090D4] text-white rounded-md px-12 py-3">Exchange
                                </button>
                            </div>
                        </>
                    )
                }


            </section>

            <OrderModal/>

        </>
    );
};

export default Home;