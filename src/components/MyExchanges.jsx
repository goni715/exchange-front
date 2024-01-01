
const MyExchanges = () => {
    return (
        <>
            <section id="main" className="bg-[#f7f7f7] py-10 md:py-20">
                <div className="md:px-20">
                    <div className="bg-white py-10 px-6">
                       <h1 className="title text-2xl text-gray-400 font-bold pt-2 pb-4">My Exchanges</h1>
                        <hr/>
                        <div className="px-4 py-5 border border-gray-300 lg:w-auto overflow-x-auto">
                            <div className="w-full bg-[#f9f9f9] px-1.5 py-2 flex border-t border-b border-gray-300 justify-between">
                                <h3>Exchange ID: DF9BC6CA6CE694A5CA2E</h3>
                                <p> from বিকাশ BDT to Rocket Personal BDT </p>
                            </div>
                            <div className="w-full bg-white px-1.5 py-2 flex border-b border-gray-300 justify-between">
                                <p>Send (From): 600 BDT</p>
                                <p>Receive (To): 570.00 BDT</p>
                                <p> Process type: Manually</p>
                                <p>  Status: Awaiting Confirmation	 </p>
                            </div>
                            {/*Alert Part*/}
                            <div className="bg-[#f9f9f9] pt-2 pb-6">
                                <div className="text-center p-3 flex justify-center items-center text-[#31708f] bg-[#d9edf7] rounded border border-[#bce8f1]">
                                    We are still waiting for confirmation of your exchange. Click here to take action.
                                </div>
                            </div>
                            {/*Alert Part*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyExchanges;