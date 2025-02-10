
"use client"
import SectionTitle from "@/components/SectionTitle"
import Image from "next/image"
import Section from "@/components/Section"
import services from "@/deta/services"


export default function ResponsiveHelp() {
  
    return (
        <>
            <Section>
                <div className="py-7 overflow-hidden">
                    <div className="flex justify-center w-full" data-aos="fade-up">
                        <SectionTitle title="How we can help you succeed" black={true} />
                    </div>

                    <div className="space-y-7 md:space-y-12 w-full xl:w-[85%] mx-auto mt-12">
                        {services.map((item, index) => (
                            <div
                                className="flex flex-col md:flex-row gap-4 md:gap-0"
                                key={index}
                                data-aos="fade-up"
                            >
                                
                                <div className="flex md:hidden items-center justify-center mb-2 relative z-10">
                                    <div className="text-3xl text-white bg-[#011627] p-3 rounded-full">{item.icon}</div>
                                    <div className="flex-1 w-full border border-dashed border-[#011627]/50" />
                                </div>

                               
                                <div
                                    className={`w-full md:w-[550px] bg-[#B4EAE4] py-6 md:py-8 px-6 lg:px-8 rounded-xl order-none ${
                                        index % 2 !== 0 ? "md:order-first" : "md:order-last"
                                    }`}
                                    data-aos="fade-right"
                                >
                                    <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h2>
                                    <div className="text-base md:text-lg leading-[2rem] text-black">{item.description}</div>
                                </div>

                               
                                <div
                                    className="hidden md:flex w-[150px] flex-col justify-center items-center"
                                    data-aos="flip-up"
                                >
                                    <div className="text-2xl md:text-4xl font-bold text-white bg-[#011627] p-3 md:p-4 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 h-2 border-l-2 border-dashed border-[#011627]/50" />
                                </div>

                            
                                <div
                                    className={`w-full md:w-[550px] order-none ${
                                        index % 2 !== 0 ? "md:order-last" : "md:order-first"
                                    }`}
                                    data-aos="fade-left"
                                >
                                    <Image
                                        src={item.imageUrl || "/placeholder.svg"}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="h-48 md:h-full lg:h-52 w-full object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}
