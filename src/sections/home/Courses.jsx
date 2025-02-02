"use client"
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image"
import Paragraph from "@/components/Paragraph";
import courses from "@/deta/courses";
import Section from "@/components/Section";


export default function Courses() {
    return (
        <section className=" py-16 ">
            <Section color='#F5F5F5'>
                <div className="flex justify-center">
                    <div className="w-96 text-center">
                        <SectionTitle title="Meet our team of experts" black={true} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 mt-10">
                    {courses.map((items, index) => (
                        <div className="relative rounded-2xl flex flex-col overflow-hidden w-full bg-white py-9  px-5 border border-[#011627]"
                            key={index}>
                            <div className="flex flex-col lg:h-72">
                                <span className="text-[#011627BF] font-normal text-base ">{items.instructor}</span>
                                <div className="font-semibold text-2xl leading-9  mt-2">{items.title}</div>
                                <p className="mt-4 text-lg leading-[1.7rem] text-gray-600"> {items.description}</p>
                                <span className="text-5xl lg:text-6xl font-semibold border-text my-4">{items.instructor}</span>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-black text-4xl font-semibold">${items.price}</h1>
                                <button className="mt-6">
                                    <Button title="Enroll" />
                                </button>
                            </div>
                            <Image
                                src={items.img}
                                alt={items.instructor}
                                className={`absolute  ${items.imgClass}`}
                                width={2000}
                                height={2000}
                                priority
                            />
                        </div>
                    ))}
                </div>
            </Section>
        </section>
    );
}

