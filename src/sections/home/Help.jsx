
"use client"

import PaddingX from '@/components/PaddingX';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { TbTarget } from "react-icons/tb";
import { LuBookOpen } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import Paragraph from '@/components/Paragraph';

export default function Help() {
    const services = [
        {
            title: "Understanding Your Goals",
            description: "We begin by learning about your child's unique learning requirements, academic goals, and preferred teaching style to ensure a customized tutoring experience",
            icon: <TbTarget />,
            imageUrl: "/assests/help/07446903b07a56a8f431d15375c66be3.png",
            isReversed: false
        },
        {
            title: "Finding the Perfect Tutor",
            description: "Based on your preferences, we pair your child with an experienced tutor who specializes in the subject and grade level, ensuring the perfect match.",
            icon: <LuBookOpen />,
            imageUrl: "/assests/help/8cf5a92713f114f959795a7de6b73dca.png",
            isReversed: true
        },
        {
            title: "Personalized Learning Sessions",
            description: "Our tutors deliver tailored lessons, focusing on building understanding and confidence while addressing key areas for improvement.",
            icon: <CiCalendarDate />,
            imageUrl: "/assests/help/ca7b69c39f5863c6d90999b27501e9f4.png",
            isReversed: false
        },
        {
            title: "Tracking Progress & Feedback",
            description: "We provide regular progress updates and encourage open communication to ensure your child is thriving and achieving their academic goals.",
            icon: <VscGraph />,
            imageUrl: "/assests/help/07446903b07a56a8f431d15375c66be3.png",
            isReversed: true
        }
    ];

    return (
        <div className="bg-white py-16">
            <PaddingX>

                <div className='flex justify-center w-full'>
                    <SectionTitle title="How we can help you succeed" black={true} />
                </div>
                <div className="space-y-7 w-[85%] mx-auto  mt-12">
                    {services.map((item, index) => (
                        <div className={`h-full grid grid-cols-12`} key={index}>
                            <div className={`col-span-5 bg-[#B4EAE4] h-52 w-full p-8 rounded-xl  ${index % 2 !== 0 ? 'order-first ' : 'order-last'} `}>
                                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                <Paragraph text={item.description} />
                            </div>
                            <div className='col-span-2 px-10 flex flex-col justify-center items-center'>
                                <div className='text-3xl text-white bg-[#011627] p-4 rounded-full '>
                                    {item.icon}
                                </div>
                                <div className="flex-1 border-l-2 border-dashed border-[#011627]/50" />
                            </div>
                            <div className={`col-span-5 w-full ${index % 2 !== 0 ? 'order-last ' : 'order-first'}`}>
                                <Image src={item.imageUrl} alt={item.title} width={500} height={500} className="h-52 w-full  object-cover  rounded-xl " />
                            </div>
                        </div>
                    ))}
                </div>
            </PaddingX>
        </div>
    );
};