'use client';
import React from 'react';
import Header from '../header';
import Image from 'next/image';

export default function SectionOne() {

    return (
        <div className="">
            <Header />
            <div className='flex flex-row justify- max-w-5xl items-center mx-auto p-4' >
                <div className='text-6xl mx-auto text-[#344648] '>
                    We are here to<br />
                    <span className='font-bold'>
                        Help You on
                        Your Journey
                    </span>
                </div>
                <div className='max-w-xl  mx-auto text-[#344648] text-right'>
                    <span className=''>
                        Whether you have a question about our walking
                        meditations, need assistance with your download, or just
                        want to connect, we’re here to support you. Reach out to us,
                        and we’ll get back to you as soon as possible.
                    </span>
                </div>
            </div>
<div className='max-w-4xl mx-auto p-4'>
<div className='flex flex-row justify-center bg-white/50 rounded-lg p-10 items-center mx-auto '>
            <div className="max-w-md mx-auto  ">
                <div className="space-y-4">
                <div className='  text-white' >
                <h3>Lets Connect </h3>
                <p>
                    Have a question or comment? Feel free to contact me via the form below, and I’ll be happy to assist you.
                </p>
            </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full p-3 bg-white/50 text-white   rounded focus:outline-none focus:ring-1 focus:ring-green-300"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full p-3 bg-white/50 text-white rounded focus:outline-none focus:ring-1 focus:ring-green-300"
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 bg-white/50 text-white rounded focus:outline-none focus:ring-1 focus:ring-green-300"
                        />
                    </div>

                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full p-3 bg-white/50 text-white rounded focus:outline-none focus:ring-1 focus:ring-green-300"
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="w-full p-3 bg-white/50 text-white   rounded focus:outline-none focus:ring-1 focus:ring-green-300"
                        />
                    </div>

                    <button
                        className="w-full p-3 flex items-center justify-center bg-gray-800 text-white font-medium uppercase rounded hover:bg-gray-700 transition-colors"
                    >
                        SEND MESSAGE
                    </button>
                </div>
            </div>

            <div className="">
  <img src="Image.png" alt="contact" className="w-[350px] h-[430px] object-cover" />
</div>
</div>
</div>   </div>
    );
}