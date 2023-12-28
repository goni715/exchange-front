
const Bkash = () => {
    return (
        <>
            <section className="bg-[#f7f7f7] py-10">
                <div className="container md:px-12 flex justify-center">
                    <div className="w-1/2">
                        <h1 className="text-3xl mb-3">Additional Information</h1>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="email">
                                Your Email Address
                            </label>
                            <input className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="number">
                                Bkash Personal Number
                            </label>
                            <input className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text" id="number"/>
                        </div>
                        <div className="mb-3">
                            <label className="block pb-2" htmlFor="contact">
                                Contact Mobile Number.
                            </label>
                            <input className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="email" id="contact"/>
                        </div>
                    </div>
                </div>
                <div className="container md:px-12 flex justify-center gap-8 mt-6">
                    <button className="bg-[#0090D4] text-white rounded-md px-12 py-3">Process Exchange</button>
                </div>
            </section>
        </>
    );
};

export default Bkash;