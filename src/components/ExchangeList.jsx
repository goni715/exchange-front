import {Table} from "antd";
import {useGetRecentCompletedExchangesQuery} from "../redux/features/exchange/exchangeApi.js";
import moment from "moment/moment";
import ListLoading from "./Loader/ListLoading.jsx";


const columns = [
    {
        title: "Send",
        dataIndex: "send",
    },
    {
        title: "Received",
        dataIndex: "receive",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Username",
        dataIndex: "username",
    },
    {
        title: "Date & Time",
        dataIndex: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
    }
];

const ExchangeList = () => {
    const {data, isLoading, isError} = useGetRecentCompletedExchangesQuery();
    const exchanges = data?.data || [];



    //decision how to render
    let content = null;

    if (isLoading) {
        content = <li className="m-2 text-center">......</li>;
    }

    if (!isLoading && isError) {
        content = (
            <h1>some error occured</h1>
        );

    }


    const tableData = [];




    if (!isLoading && !isError && exchanges?.length > 0) {
        for (let i = 0; i < exchanges.length; i++) {
            tableData.push({
                send: exchanges[i]?.sendAccount[0]?.name,
                receive: exchanges[i]?.receiveAccount[0]?.name,
                amount: exchanges[i]?.sendAmount,
                username: exchanges[i]?.user[0]?.username,
                date: moment(exchanges[i]?.createdAt).format('LLLL'),
                status: (
                    <>
                        <button className={`text-white cursor-not-allowed font-bold py-2 bg-green-500 px-4 rounded-md`}>
                            {exchanges[i]?.status}
                        </button>
                    </>
                ),
            });
        }

    }




    return (
        <>
            <section id="main" className="py-10">
                <h1 className="text-center font-bold text-3xl mb-5">Recent Exchanges</h1>
                {
                    isLoading? (
                        <>
                            <div className="px-8">
                                <ListLoading/>
                            </div>
                        </>
                    ) : (
                        <div className="px-12 bg-white w-auto overflow-x-auto">
                            <Table columns={columns} dataSource={tableData}/>
                        </div>
                    )
                }
            </section>
        </>
    );
};

export default ExchangeList;