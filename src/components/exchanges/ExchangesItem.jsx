
const ExchangesItem = ({item}) => {
    const {_id, sendAmount, receiveAmount, status, sendAccount, receiveAccount}= item;
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
                    <p> Status: {status}</p>
                </div>
                {/*Alert Part*/}
                {/*<div className="bg-[#f9f9f9] pt-2 pb-6">*/}
                {/*    <div className="text-center p-3 flex justify-center items-center text-[#31708f] bg-[#d9edf7] rounded border border-[#bce8f1]">*/}
                {/*        We are still waiting for confirmation of your exchange. Click here to take action.*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*Alert Part*/}
            </div>
        </>
    );
};

export default ExchangesItem;