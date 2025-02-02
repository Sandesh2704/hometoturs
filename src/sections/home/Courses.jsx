"use client"
import Button from "@/components/Button";

import SectionTitle from "@/components/SectionTitle";
import Image from "next/image"
import img1 from "/public/assests/courses/493e45b9a4565571115f40c08b3d5150.png"
import img2 from "/public/assests/courses/52ad9022dd097bd74e08523d802aaa5e.png"
import img3 from "/public/assests/courses/497fbc93915cb6d1d676a82fbb4418c6.png"
import Paragraph from "@/components/Paragraph";
import PaddingX from "@/components/PaddingX";

const courses = [
    {
        title: 'Mathematics Mastery Program',
        instructor: 'John Doe',
        description: 'Build a strong foundation in mathematics with our comprehensive program. From basic arithmetic to advanced problem-solving techniques.',
        price: '50',
        img: img2,
        imgClass: "w-80 h-80 -bottom-3 -right-16"
    },
    {
        title: 'Science Simplified for Young Minds',
        instructor: 'Mickie FAsh',
        description: 'Discover the wonders of science with hands-on learning and engaging explanations. This course covers key concepts in biology, chemistry, and physics, tailored to each student’s level.',
        price: '50',
        img: img1,
        imgClass: "w-96 h-96 -bottom-24 -right-16"
    },
    {
        title: 'English Language Excellence',
        instructor: 'Ella Buckit',
        description: 'Build a strong foundation in mathematics with our comprehensive program. From basic arithmetic to advanced problem-solving techniques.',
        price: '50',
        img: img3,
        imgClass: "w-96 h-full -bottom-28 right-0"
    },
];


export default function Courses() {
    return (
        <section className="bg-[#F5F5F5] py-16 ">
            <PaddingX>
                <div className="flex justify-center">
                    <div className="w-96 text-center">
                        <SectionTitle title="Meet our team of experts" black={true} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">

                    {courses.map((items, index) => (
                        <div className="relative rounded-2xl flex flex-col overflow-hidden w-full bg-white py-9  px-5 border border-[#011627]"
                            key={index}>
                            <div className="flex flex-col h-72">
                                <span className="text-[#011627BF] font-normal text-base ">{items.instructor}</span>
                                <div className="font-semibold text-2xl leading-9  mt-2">{items.title}</div>
                                <p className="mt-4 text-lg leading-[1.7rem] text-gray-600"> {items.description}</p>
                                <span className="text-6xl font-semibold border-text my-4">{items.instructor}</span>
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
            </PaddingX>
        </section>
    );
}

