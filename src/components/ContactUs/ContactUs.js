import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import React, { useState } from 'react'

export default function ContactUs() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [website, setWebsite] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const objt = { firstName, lastName, company, website, email, phone, message };

        console.log("objt: ", objt)
        axios
            .post(
                'https://sheet.best/api/sheets/db753f48-5b6a-4694-a439-41e43cfd7481',
                objt
            )
            .then((response) => {
                toast("Your request is saved successfully! Our team will contact you!");
                console.log(response);
            });
    };

    return (

        <div className="bg-black sm:mt-96 md:mt-32 3xl:mt-32 mb-32" id='contact'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="sm:w-full md:w-2/3 mx-auto text-center block p-6 border rounded-lg shadow bg-white border-gray-700 mt-20">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl text-center">Contact Us</h2>
                            <h2 className="text-md text-black sm:text-md text-center mt-2">You are GYHMI too</h2>
                        </div>
                        <div className="mx-auto max-w-2xl mt-10 text-left">
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="first_name"
                                               className="block mb-2 text-sm font-medium text-black">First
                                            name</label>
                                        <input type="text" id="first_name"
                                               className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                               placeholder="Enter your first name"
                                               onChange={(e) => setFirstName(e.target.value)}
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="last_name"
                                               className="block mb-2 text-sm font-medium text-black">Last
                                            name</label>
                                        <input type="text" id="last_name"
                                               className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                               placeholder="Enter your last name" required
                                               onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company"
                                               className="block mb-2 text-sm font-medium text-black">Company</label>
                                        <input type="text" id="company"
                                               className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                               placeholder="Enter your company name"
                                               onChange={(e) => setCompany(e.target.value)}
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone"
                                               className="block mb-2 text-sm font-medium text-black">Phone</label>
                                        <input type="text" id="phone"
                                               className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                               placeholder="Enter your phone number"
                                               onChange={(e) => setPhone(e.target.value)}
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="website"
                                               className="block mb-2 text-sm font-medium text-black">Website</label>
                                        <input type="text" id="website"
                                               className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                               placeholder="Enter your website"
                                               onChange={(e) => setWebsite(e.target.value)}
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email"
                                               className="block mb-2 text-sm font-medium text-black">Email</label>
                                        <input type="text" id="email"
                                               className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                               placeholder="Enter your email"
                                               onChange={(e) => setEmail(e.target.value)}
                                               required/>
                                    </div>
                                </div>
                                <div className="mb-6">

                                    <label htmlFor="message"
                                           className="block mb-2 text-sm font-medium text-black">Your
                                        message</label>
                                    <textarea id="message" rows="4"
                                              className="block p-2.5 w-full text-sm rounded-lg border bg-white border-gray-600 placeholder-gray-600 text-black focus:ring-blue-500 focus:border-blue-500"
                                              placeholder="Enter your message"
                                              style={{resize: 'none'}}
                                              onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={handleSubmit}>
                                    Submit
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
