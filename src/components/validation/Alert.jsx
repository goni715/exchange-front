
const Alert = ({children}) => {
    return (
        <>
            <div className="text-center p-3 flex justify-center items-center text-[#31708f] bg-[#d9edf7] rounded border border-[#bce8f1]">
                {children}
            </div>
        </>
    );
};

export default Alert;