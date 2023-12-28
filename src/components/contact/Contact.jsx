import {FaWhatsapp} from "react-icons/fa";
import ContactForm from "./ContactForm.jsx";
import {useSelector} from "react-redux";
import Success from "../validation/Success.jsx";

const Contact = () => {
    const {success} = useSelector((state)=> state.contact) || {};

    return (
        <>
            <section className="bg-[#f7f7f7] py-10">
                <div className="container md:px-12 flex justify-center">
                    <div className="w-9/12 bg-white px-8 pt-12 pb-8">
                        <h1 className="text-3xl title text-[#6f6f6f] mb-3">Contact</h1>
                        <hr/>
                        {success && (
                                <Success>
                                    Your message was sent. We will try as soon as possible to get an answer.
                                </Success>
                            )
                        }
                        <div className="flex w-full mt-4">
                            <div className="w-3/12 flex flex-col gap-6">
                                <div className="text-[#6f6f6f]">
                                    <b className="font-bold flex items-center text-[#6f6f6f]">
                                        <FaWhatsapp size={16} className="mr-1"/>
                                        Skype
                                    </b>
                                    usdcarebd@gmail.com
                                </div>
                                <div className="text-[#6f6f6f]">
                                    <b className="font-bold flex items-center text-[#6f6f6f]">
                                        <FaWhatsapp size={16} className="mr-1"/>
                                        Whatsapp
                                    </b>
                                    +1234567890
                                </div>
                                <div className="text-[#6f6f6f]">
                                    <b className="font-bold flex items-center text-[#6f6f6f]">
                                        <FaWhatsapp size={16} className="mr-1"/>
                                        Support email
                                    </b>
                                    usdcarebd@gmail.com
                                </div>
                            </div>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;