import {
    useGetAllReceiveAccountQuery,
    useGetAllSendAccountQuery, useGetReceiveAccountQuery, useGetSendAccountQuery
} from "../redux/features/account/accountApi.js";
import {useGetRateMutation} from "../redux/features/rate/rateApi.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetSendReceiveValue} from "../redux/features/rate/rateSlice.js";
import Error from "./validation/Error.jsx";
import InformationModal from "./modal/InformationModal.jsx";
import {SetInformationShow, SetReceiveAccountId, SetSendAccountId} from "../redux/features/account/accountSlice.js";
import {getToken} from "../helper/SessionHelper.js";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data:sendData} = useGetAllSendAccountQuery();
    const {data:sendAccounts} = sendData || {};

    const {data:receiveData} = useGetAllReceiveAccountQuery();
    const {data:receiveAccounts} = receiveData || {};

    const [getRate] = useGetRateMutation();
    const [send, setSend]= useState("658d2e2a61d015e063fd92dd");
    const [receive, setReceive]= useState("658d2f2161d015e063fd92f4");
    const {unit, current, sendValue, receiveValue, reserved, reservedValue,minimum, minimumValue }= useSelector((state)=>state.rate) || {};

    const {data:receiveAccountData} = useGetReceiveAccountQuery(receive);
    const {data:sendAccountData} = useGetSendAccountQuery(send);
    const [error, setError]= useState("");





    useEffect(()=>{
        if(send !=="" && receive !==""){
            getRate({
                firstId:send,
                secondId:receive
            })
        }
    },[send, receive, getRate])




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
                <div className="md:px-12 flex justify-center gap-8">
                    {error !=="" && (
                        <div className="w-3/4 mb-5">
                            <Error message={error}/>
                        </div>
                       )
                    }
                </div>
                <div className="md:px-12 flex justify-center gap-8">
                        <div className="w-1/5 bg-white">
                            <h3 className="mb-3 px-4">Send From</h3>
                            <select
                                onChange={(e)=>{
                                    setSend(e.target.value);
                                    dispatch(SetSendAccountId(e.target.value));
                                }}
                                value={send}
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" name="" id="">
                                {sendAccounts?.length>0 &&(
                                    <>
                                        {
                                            sendAccounts.map((item,i)=>{
                                                return(
                                                    <>
                                                        <option key={i.toString()} value={item._id}>{item.name}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                                }
                            </select>

                            <input onChange={(e)=>dispatch(SetSendReceiveValue(e.target.value))} value={sendValue} type="text" className="w-full px-4 py-2 mt-4 outline-none border border-b-gray-400 rounded-md"/>
                            <div className="text-[#31708f] bg-[#d9edf7] rounded mt-4 px-4 py-2">
                                Exchange rate: {unit} = {current}
                            </div>
                        </div>
                        <div className="w-1/5 bg-white">
                            <h3 className="mb-3 px-4">Receive To</h3>
                            <select
                                onChange={(e)=>{
                                    setReceive(e.target.value);
                                    dispatch(SetReceiveAccountId(e.target.value));
                                }}
                                value={receive}
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                                {receiveAccounts?.length>0 &&(
                                    <>
                                        {
                                            receiveAccounts.map((item,i)=>{
                                                return(
                                                    <>
                                                        <option key={i.toString()} value={item._id}>{item.name}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                )
                                }
                            </select>

                            <input value={receiveValue} type="text" readOnly className="w-full px-4 py-2 mt-4 outline-none border border-b-gray-400 rounded-md"/>
                            <div className="text-[#31708f] bg-[#d9edf7] rounded mt-4 px-4 py-2">
                                Reserve: {reserved}
                            </div>

                        </div>
                </div>
                <div className="container md:px-12 flex justify-center gap-8 mt-6">
                    <button onClick={handleSubmit} className="bg-[#0090D4] text-white rounded-md px-12 py-3">Exchange</button>
                </div>
            </section>

            <InformationModal/>

        </>
    );
};

export default Home;