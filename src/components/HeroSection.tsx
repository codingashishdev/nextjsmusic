import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { PointerHighlight } from "./ui/pointer-highlight";
import PointerHighlightDemo from "./pointer-highlight-demo";

function HeroSection() {
    return (
        <>
            <div className="md:h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto min-h-screen md:py-0">
                <Spotlight/>
                <div className="py-20 text-2xl font-bold tracking-tighter md:text-8xl ">
                    <div className="whitespace-nowrap">
                        Master{" "}
                        <PointerHighlight containerClassName="inline-block">
                            <span>the art of music</span>
                        </PointerHighlight>
                    </div>
                </div>
                <div className="p-0 relative z-10 w-full text-center">
                    <p className="font-medium text-base md:text-xl  text-neutral-400 max-w-md mx-auto">
                        Dive into our comprehensive music courses and transform
                        your musical journey today. Whether you're beginner or
                        looking to refine your skills, join us to unlock your
                        true potentional.
                    </p>
                    <div className="mt-7">
                        <Link href={"/courses"}>
                            <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-md font-medium text-neutral-300  backdrop-blur-3xl">
                                    Explore Courses
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
