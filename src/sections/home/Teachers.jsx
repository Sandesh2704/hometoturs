
"use client"

import PaddingX from "@/components/PaddingX";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image"


const teachers = [
    {
        name: "Joshua Brown",
        role: "Tutor",
        description:
            "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Joshua Brown",
        role: "Tutor",
        description:
            "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Joshua Brown",
        role: "Tutor",
        description:
            "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Joshua Brown",
        role: "Tutor",
        description:
            "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
];


export default function TeamSection() {
    return (
        <section className="bg-black text-white py-16 ">
            <PaddingX>
                <div className="flex justify-center">
                    <div className="w-96 text-center">
                        <SectionTitle title="Meet our team of experts" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

                    {teachers.map((items, index) => (
                        <div key={index} className="relative group w-full h-[442px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/assests/teachers/99ebc2cfcc493a3bd27b587560aae365.jpg"
                                alt={items.name}
                                height={1000}
                                width={1000}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#2EC4B6] text-black flex flex-col justify-start px-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-8rem)] group-hover:translate-y-0">
                                <div className="py-7">
                                    <h3 className="text-2xl font-[500]  mb-2">{items.name}</h3>
                                    <span className="block text-xl font-[500]">{items.role}</span>
                                </div>

                                <p className="text-xl opacity-0 font-[400] transition-opacity duration-300 group-hover:opacity-100 leading-[2rem] ">
                                    {items.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </PaddingX>
        </section>
    );
}

