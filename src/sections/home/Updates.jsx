"use client";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import updates from "@/deta/updates";
import Image from "next/image";
import React from "react";

export default function Updates() {


    return (
        <Section color="#011627">
            <div className="overflow-hidden">
          
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                <SectionTitle title="Latest Updates" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mt-12 ">
                <div 
                    className="relative flex flex-col h-full overflow-hidden group"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-once="true"
                >
                    <Image
                        width={100}
                        height={100}
                        priority
                        src="/assests/blog/20d838ab647cce1ba4660b9888db145e.jpg"
                        alt="Wooden desk with typewriter"
                        className="w-full h-full md:h-[390px] rounded-b-3xl sm:rounded-b-none rounded-t-3xl  relative z-0"
                    />

                    <div className='hidden md:flex flex-col border border-white/30 py-6 px-3'>
                        <span className="text-gray-300 text-sm">{updates[0].date}</span>
                        <div className='mt-1'>
                            <SectionTitle title={updates[0].title} />
                        </div>

                        <p className="text-gray-300 text-base leading-[1.7rem] mt-3">
                            {updates[0].description}
                        </p>
                    </div>

                    <div className="flex flex-col md:hidden md:flex-1 px-4 py-6">
                        <span className="text-gray-400 text-xs">{updates[0].date}</span>
                        <h3 className="text-white text-xl font-semibold mt-1 text-balance">{updates[0].title}</h3>
                        <p className="text-gray-300 text-base leading-[1.7rem] mt-2">
                            {updates[0].description}
                        </p>
                    </div>
                </div>

                <div className="gap-6 flex flex-col overflow-hidden">
                    {updates.slice(1).map((update, index) => (
                        <div
                            key={update.id}
                            className="flex flex-col md:flex-row items-start space-y-3 space-x-2"
                            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                            data-aos-duration="1000"
                            data-aos-delay={index * 200}
                            data-aos-once="true" // Animates every time on scroll
                        >
                            <Image
                                width={100}
                                height={100}
                                priority
                                src="/assests/blog/3ffba104a65172e47c851115f0ea8450.jpg"
                                alt="Desk setup"
                                className="w-full md:w-[327px] h-full md:h-[203px] px-2 object-cover rounded-3xl"
                            />

                            <div className="md:flex-1">
                                <span className="text-white text-base">{update.date}</span>
                                <h3 className="text-white text-xl leading-8 font-semibold mt-2 md:text-balance">
                                    {update.title}
                                </h3>
                                <p className="text-gray-300 text-base leading-[1.7rem] mt-3">
                                    {update.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </Section>
    );
}

