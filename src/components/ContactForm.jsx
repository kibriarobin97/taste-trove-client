import SectionTitle from "./SectionTitle";


const ContactForm = () => {

    return (
        <div>
            <SectionTitle subHeading={'Send Us a Message'} heading={'CONTACT FORM'}></SectionTitle>
            <section className="px-6 pb-10 text-black">
                <form className="max-w-5xl flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 w-full mx-auto gap-6 p-6 rounded-md shadow-sm bg-[#F3F3F3]">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3s">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm font-semibold">Name</label>
                                <input id="firstname" name="name" type="text" placeholder="Enter your name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm font-semibold">Email</label>
                                <input id="lastname" name="email" type="email" placeholder="Enter your email" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm font-semibold">Phone</label>
                                <input id="address" name="number" type="number" placeholder="Enter your phone number" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm font-semibold">Message</label>
                                <textarea id="bio" name="message" placeholder="Write your message here" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"></textarea>
                            </div>
                            <div className="col-span-full flex justify-center items-center">
                                <input className="btn text-white font-bold bg-gradient-to-r from-[#835D23] to-[#B58130] cursor-pointer" type="submit" value="Send Message" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default ContactForm;