
const ExchangesItem = ({item}) => {
    const {_id, sendAmount, receiveAmount, status, sendAccount, receiveAccount}= item || {};
    const {name:sendAccountName}= sendAccount[0] || {};
    const {name:receiveAccountName}= receiveAccount[0] || {};
    return (
        <>
            <div className="px-4 py-5 border border-gray-300 w-[250%] sm:w-[200%] md:w-[170%] lg:w-auto">
                <div className="w-full bg-[#f9f9f9] px-1.5 py-2 flex border-t border-b border-gray-300 justify-between">
                    <h3>Exchange ID: {_id}</h3>
                    <p> from: {sendAccountName} to: {receiveAccountName} </p>
                </div>
                <div className="w-full bg-white px-1.5 py-2 flex border-b border-gray-300 justify-between">
                    <p>Send (From): {sendAmount}</p>
                    <p>Receive (To): {receiveAmount}</p>
                    <p> Process type: Manually</p>
                    <p>
                        Status:
                        <span className={`text-white font-bold py-1 ml-1 px-2 rounded ${(status==="Pending" && "bg-gray-500") || (status==="Cancelled" && "bg-lime-500") || (status==="Timeout" && "bg-blue-500") || (status==="Completed" && "bg-green-500") || (status==="Processing" && "bg-yellow-500") || (status==="Awaiting Payment" && "bg-cyan-500") || (status==="Awaiting Confirmation" && "bg-fuchsia-500") || (status==="Denied" && "bg-red-500")}`}>{status}</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ExchangesItem;