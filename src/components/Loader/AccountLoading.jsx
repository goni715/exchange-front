

const AccountLoading = () => {
    return (
        <>
            <div className="md:px-12 flex flex-col items-center md:flex-row md:justify-center gap-8">
                <div className="w-[300px] p-4 flex flex-col gap-6 md:w-2/5 lg:w-1/4 bg-white shadow-md rounded-md animate-pulse">
                    <div className="bg-slate-200 h-[40px] text-white font-bold py-2 px-4 rounded-lg ">
                    </div>
                    <div className="bg-slate-200 h-[40px] text-white font-bold py-2 px-4 rounded-lg">
                    </div>
                    <div className="bg-slate-200 h-[40px] text-white font-bold py-2 px-4 rounded-lg">
                    </div>
                </div>
                <div className="w-[300px] p-4 flex flex-col gap-6 md:w-2/5 lg:w-1/4 bg-white shadow-md rounded-md animate-pulse">
                    <div className="bg-slate-200 h-[40px] text-white font-bold py-2 px-4 rounded-lg ">
                    </div>
                    <div className="bg-slate-200 h-[40px] text-white font-bold py-2 px-4 rounded-lg">
                    </div>
                    <div className="bg-slate-200 h-[40px] text-white font-bold py-2 px-4 rounded-lg">
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountLoading;