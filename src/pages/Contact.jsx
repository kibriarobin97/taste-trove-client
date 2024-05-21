import Cover from "../components/Cover";
import contactImg from "../assets/contact/banner.jpg"
import SectionTitle from "../components/SectionTitle";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { IoTime } from "react-icons/io5";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="min-h-[calc(100vh-276px)]">
            <Helmet>
                <title>Contact | Taste-Trove</title>
            </Helmet>
            <Cover img={contactImg} title={'CONTACT US'} ></Cover>
            <SectionTitle subHeading={'Visit Us'} heading={'OUR LOCATION'}></SectionTitle>
            <div className="my-10 flex flex-col lg:flex-row justify-center items-center gap-5">
                <div >
                    <div className="bg-[#D1A054] w-64 h-10 flex justify-center items-center"><PiPhoneCallFill className="text-white text-xl" /></div>
                    <div className="h-40 w-64 border-2 border-t-0 p-4 pt-0">
                        <div className="bg-[#F3F3F3] h-full p-3 flex flex-col justify-center items-center">
                            <h4 className="font-bold uppercase mb-2">Phone</h4>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="bg-[#D1A054] w-64 h-10 flex justify-center items-center"><HiLocationMarker className="text-white text-xl" /></div>
                    <div className="h-40 w-64 border-2 border-t-0 p-4 pt-0">
                        <div className="bg-[#F3F3F3] h-full p-3 flex flex-col justify-center items-center">
                            <h4 className="font-bold uppercase mb-2">ADDRESS</h4>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="bg-[#D1A054] w-64 h-10 flex justify-center items-center"><IoTime className="text-white text-xl" /></div>
                    <div className="h-40 w-64 border-2 border-t-0 p-4 pt-0">
                        <div className="bg-[#F3F3F3] h-full p-3 flex flex-col justify-center items-center">
                            <h4 className="font-bold uppercase mb-2">WORKING HOURS</h4>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;