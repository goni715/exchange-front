import {useEffect, useState} from "react";
import {useContactCreateMutation} from "../../redux/features/contact/contactApi.js";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [contactCreate, {isLoading, isSuccess}] = useContactCreateMutation();


    useEffect(()=>{
       if(isSuccess){
           setName("");
           setEmail("");
           setSubject("");
           setMessage("");
       }
    },[isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        contactCreate({
            name, email, subject, message
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-9/12">
                <div className="mb-3">
                    <label className="block pb-2" htmlFor="name">
                        Your name
                    </label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} required className="w-full outline-none border border-gray-300 px-4 py-2 rounded-md" type="text" id="name"/>
                </div>
                <div className="mb-3">
                    <label className="block pb-2" htmlFor="email">
                        Your email address
                    </label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} required className="w-full outline-none border border-gray-300 px-4 py-2 rounded-md" type="email" id="email"/>
                </div>
                <div className="mb-3">
                    <label className="block pb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input onChange={(e)=>setSubject(e.target.value)} value={subject} required className="w-full outline-none border border-gray-300 px-4 py-2 rounded-md" type="text" id="subject"/>
                </div>
                <div className="mb-3">
                    <label className="block pb-2" htmlFor="message">
                        Message
                    </label>
                    <input onChange={(e)=>setMessage(e.target.value)} value={message} required className="w-full outline-none border border-gray-300 px-4 py-2 rounded-md" type="text" id="message"/>
                </div>
                <div className="">
                    <button disabled={isLoading} className="bg-[#0090D4] text-lg text-white rounded-md px-12 py-3">
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;