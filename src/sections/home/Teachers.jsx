
"use client";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import team from "@/deta/team";
import Image from "next/image";

export default function TeamSection() {


    return (
        <Section color="black">
            <div className="py-4">

                <div className="flex justify-center" data-aos="fade-up">
                    <div className="w-96 text-center">
                        <SectionTitle title="Meet our team of experts" />
                    </div>
                </div>


                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 mt-11"
                    data-aos="fade-up"
                >
                    {team.map((items, index) => (
                        <div
                            key={index}
                            className="relative group w-full h-[442px] rounded-3xl border-2 border-[#FFFFFF]/80 overflow-hidden shadow-lg"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            data-aos-once="false"
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
                                    <h3 className="text-2xl font-[600] mb-2">{items.name}</h3>
                                    <span className="block text-xl font-[500]">{items.role}</span>
                                </div>
                                <p className="text-xl text-black opacity-0 font-[500] transition-opacity duration-300 group-hover:opacity-100 leading-[2rem]">
                                    {items.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
