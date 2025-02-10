"use client"
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image"
import courses from "@/deta/courses";
import Section from "@/components/Section";


export default function Courses() {
    return (
        <>
            <Section color='#F5F5F5'>
                <div className="flex justify-center">
                    <div className="md:w-96 text-center"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-once="true">
                        <SectionTitle title="Explore our most sought-after courses" black={true} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[27px] mt-8">
                    {courses.map((items, index) => (
                        <div className="relative rounded-3xl flex flex-col overflow-hidden w-full bg-white py-9  px-4 border border-[#011627]"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            data-aos-once="false">
                            <div className="flex flex-col lg:h-[350px]">
                                <span className="text-[#011627BF] font-medium text-xl ">{items.instructor}</span>
                                <div className="font-semibold text-2xl leading-9 w-80 mt-2">{items.title}</div>
                                <p className="mt-2 text-lg leading-[1.8rem] text-black/75"> {items.description}</p>
                                <span className="text-5xl lg:text-6xl font-semibold border-text my-5">{items.instructor2}</span>
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
        </>
    );
}

