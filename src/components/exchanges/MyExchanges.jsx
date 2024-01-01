import ExchangesItem from "./ExchangesItem.jsx";
import {useGetUserExchangesQuery} from "../../redux/features/exchange/exchangeApi.js";

const MyExchanges = () => {
    const {data, isLoading} = useGetUserExchangesQuery();
    const ExchangeList = data?.data;

    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-10 md:py-20">
                <div className="md:px-20">
                    <div className="bg-white px-6">
                        <h1 className="title text-2xl text-gray-400 font-bold pt-6 pb-4">My Exchanges</h1>
                        <hr/>
                    </div>
                    <div className="bg-white py-6 px-6 w-full overflow-x-auto">
                        {isLoading ? "Loading..."
                            :(
                                <>
                                    {ExchangeList.length>0 && (
                                       ExchangeList.map((item,i)=>{
                                           return(
                                               <>
                                                   <ExchangesItem key={i.toString()} item={item}/>
                                               </>
                                           )
                                       })
                                      )
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyExchanges;