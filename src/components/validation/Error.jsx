
const Error = ({message}) => {
    return (
        <>
            <div className="text-center p-3 flex justify-center items-center text-[#a94442] bg-[#f2dede] rounded border border-[#f2dede]">
                {message}
            </div>
        </>
    );
};

export default Error;