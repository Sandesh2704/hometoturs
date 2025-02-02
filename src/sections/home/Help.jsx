
"use client"
import SectionTitle from "@/components/SectionTitle"
import Image from "next/image"
import Paragraph from "@/components/Paragraph"
import Section from "@/components/Section"
import services from "@/deta/services"

export default function ResponsiveHelp() {

    return (
        <>
            <Section>
                <div className="flex justify-center w-full">
                    <SectionTitle title="How we can help you succeed" black={true} />
                </div>
                <div className="space-y-12 0 w-full xl:w-[85%] mx-auto mt-12">
                    {services.map((item, index) => (
                        <div className={`flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-0`} key={index}>
                            <div
                                className={`md:col-span-5 bg-[#B4EAE4] py-6 md:py-8 px-6 lg:px-8 rounded-xl order-2 md:order-none ${index % 2 !== 0 ? "md:order-first" : "md:order-last"}`}
                            >
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h2>
                                <Paragraph text={item.description} />
                            </div>

                            <div className="hidden md:flex md:col-span-2 px-4 md:px-10 flex-col justify-center items-center">
                                <div className="text-2xl md:text-3xl text-white bg-[#011627] p-3 md:p-4 rounded-full">{item.icon}</div>
                                <div className="flex-1  h-2 border-l-2 border-dashed border-[#011627]/50" />
                            </div>


                            <div
                                className={`md:col-span-5 w-full order-1 md:order-none ${index % 2 !== 0 ? "md:order-last" : "md:order-first"}`}
                            >
                                <Image
                                    src={item.imageUrl || "/placeholder.svg"}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="h-48 md:h-full lg:h-52 w-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="flex md:hidden items-center justify-center -mt-4 mb-2 relative z-10">
                                <div className="text-3xl text-white bg-[#011627] p-3 rounded-full">{item.icon}</div>
                                <div className="flex-1 w-full   border border-dashed border-[#011627]/50" />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    )
}
