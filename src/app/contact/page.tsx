'use client'
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

function Contact() {
    return (
        <>
            <div className="absolute min-h-screen w-full flex justify-center bg-slate-900 space-y-30">
                <BackgroundBeams />
                <div className="flex flex-col items-center justify-center m-3">
                    <div className="space-y-5">
                        <h1 className="text-center text-8xl tracking-tight">Contact Us</h1>
                        <p className="max-w-135 text-center text-gray-500">We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey</p>
                    </div>

                    <div className="flex flex-col space-y-5 m-10">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                            className="bg-black w-[650px] py-3 px-4 rounded-sm text-left text-gray-400 placeholder:text-gray-500"
                        />

                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your message"
                            className="bg-black w-[650px] h-40 rounded-sm text-left text-gray-400 placeholder:text-gray-500 p-3 resize-none"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact