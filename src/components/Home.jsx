import {
    useGetAllReceiveAccountQuery,
    useGetAllSendAccountQuery
} from "../redux/features/account/accountApi.js";
import {useGetRateMutation} from "../redux/features/rate/rateApi.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetSendReceiveValue} from "../redux/features/rate/rateSlice.js";

const Home = () => {
    const dispatch = useDispatch();
    const {data:sendData} = useGetAllSendAccountQuery();
    const {result:sendAccounts} = sendData || {};

    const {data:receiveData} = useGetAllReceiveAccountQuery();
    const {result:receiveAccounts} = receiveData || {};

    const [getRate, {isLoading, isSuccess}] = useGetRateMutation();
    const [send, setSend]= useState("658bc0bcd115e07134da6acd");
    const [receive, setReceive]= useState("658bc3ca8638ae80b337bfab");
    const {unit, current, sendValue, receiveValue }= useSelector((state)=>state.rate) || {};


    useEffect(()=>{
        if(send !=="" && receive !==""){
            getRate({
                firstId:send,
                secondId:receive
            })
        }
    },[send, receive, getRate])




    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-10">
                <div className="container md:px-12 flex justify-center gap-8">
                        <div className="w-1/5 bg-white">
                            <h3 className="mb-3 px-4">Send From</h3>
                            <select onChange={(e)=>setSend(e.target.value)} value={send} className="w-full px-4 py-2" name="" id="">
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
                            <select onChange={(e)=>setReceive(e.target.value)} value={receive} className="w-full px-4 py-2" name="" id="">
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
                        </div>
                </div>
                <div className="container md:px-12 flex justify-center gap-8 mt-6">
                    <button className="bg-[#0090D4] text-white rounded-md px-12 py-3">Exchange</button>
                </div>
            </section>
        </>
    );
};

export default Home;