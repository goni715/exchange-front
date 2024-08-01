import ExchangesItem from "./ExchangesItem.jsx";
import {useGetUserExchangesQuery} from "../../redux/features/exchange/exchangeApi.js";

const MyExchanges = () => {
    const {data, isLoading} = useGetUserExchangesQuery();
    const ExchangeList = data?.data;

    return (
        <>
            <section id="main" className="bg-[#f7f7f7] min-h-[80vh] py-10 md:py-20">
                <div className="md:px-20">
                    <div className="bg-white px-6">
                        <h1 className="title text-2xl text-gray-400 font-bold pt-6 pb-4">My Exchanges</h1>
                        <hr/>
                    </div>
                    <div className="bg-white py-6 px-6 w-full overflow-x-auto">
                        {isLoading ? "..."
                            :(
                                <>
                                    {ExchangeList.length>0 ? (
                                       ExchangeList.map((item,i)=>{
                                           return(
                                               <>
                                                   <ExchangesItem key={i.toString()} item={item}/>
                                               </>
                                           )
                                       })
                                      ) : (
                                          <>
                                              <h3 className="text-gray-500 font-bold text-3xl">There is no exchanges</h3>
                                          </>
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