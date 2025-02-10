
// import Button from '@/components/Button'
// import Section from '@/components/Section'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// export default function HeroSection() {

//     const stats = [
//         { label: "Students", value: "100+", bg: "bg-[#2EC4B636]" },
//         { label: "Teachers", value: "100+", bg: "bg-[#FF336652] " },
//         { label: "Courses", value: "100+", bg: "bg-[#011627] text-white" },
//     ];


//     return (
//         <>
//             <Section>
//                 <div className="grid lg:grid-cols-2 gap-14 mt-2">
//                     <div className="md:pr-10">
//                         <h1 className="text-4xl leading-[54px]  font-bold mb-2 text-balance">
//                             Elevate your child's learning experience with our professional home tuition services.
//                         </h1>
//                         <p className="text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem] font-normal text-[#0A0A0A]/75  mb-8">
//                             Say goodbye to academic struggles and confusion. Our professional tutors ensure a personalized learning experience, empowering your child to excel every day.
//                         </p>
//                         <div className="flex items-center  space-x-6">
//                             <Link href="/signin">
//                                 <Button title="Sign In" bgGreen={true} />
//                             </Link>

//                             <Link href="/getstarted" >
//                                 <Button title="Get Started" />
//                             </Link>
//                         </div>

//                         <div className="flex flex-wrap justify-center md:justify-start gap-3.5 mt-12">
//                             {stats.map((items, index) => (
//                                 <div key={index} className={`text-center ${items.bg} py-[19px] px-[34px] border border-[#011627]/30 rounded-3xl`}>
//                                     <h6 className={`text-xl font-normal mb-4 ${items.text}`}>{items.label}</h6>
//                                     <h3 className="text-3xl md:text-4xl font-semibold">{items.value}</h3>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-4 md:gap-6">
//                         <Image
//                             src="/assests/heroSection/00bec2872c1d0f42d1c3565a5995a521.png"
//                             alt="Main Teacher"
//                             className="rounded-3xl  h-[364px] object-cover "
//                             width={1000}
//                             height={1000}
//                             priority
//                         />
//                         <div className="grid grid-cols-2 gap-3 md:gap-4">
//                             <Image
//                                 src="/assests/heroSection/6fb32429b68ae24ea78c4bb8bb1a3cf1.png"
//                                 alt="Teacher 1"
//                                 className="rounded-3xl  h-[172px] object-cover"
//                                 width={1000}
//                                 height={1000}
//                                 priority
//                             />
//                             <Image
//                                 src="/assests/heroSection/ca7b69c39f5863c6d90999b27501e9f4.png"
//                                 alt="Teacher 2"
//                                 className="rounded-3xl h-[172px] object-cover"
//                                 width={1000}
//                                 height={1000}
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </Section>

//             <div className='mt-5'>
//                 <Section>
//                     <div className="grid lg:grid-cols-2 gap-5 bg-white">
//                         <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 order-last lg:order-first">
//                             <div className='col-span-1 row-span-2  w-full h-[540px] lg:h-[486px]'>
//                             <Image
//                                 className="rounded-3xl object-cover w-full h-full"
//                                 src="/assests/heroSection/8c4d92e9786756077e88b423410795d3.jpg"
//                                 alt="Main Teacher"
//                                 width={900}
//                                 height={900}
//                                 priority
//                             />

//                             </div>
                           
//                             <div className='flex flex-col gap-y-2 md:gap-y-2.5  h-[486px]'>
//                                 <Image
//                                     src="/assests/heroSection/d035daee1752e70310c09850f74d9617.jpg"
//                                     alt="Teacher 1"
//                                     width={1000}
//                                     height={1000}
//                                     priority
//                                     className="rounded-3xl object-cover w-full h-full"
//                                 />
//                                 <Image
//                                     src="/assests/heroSection/c12c7f59a8a354143d29f7ed1349f148.jpg"
//                                     alt="Teacher 2"
//                                     width={1000}
//                                     height={1000}
//                                     priority
//                                     className="rounded-3xl object-cover w-full lg:h-full"
//                                 />
//                             </div>
//                         </div>

//                         <div className="px-6 py-12 border border-[#01162780] h-full  rounded-[32px] order-first lg:order-last">
//                             <h1 className="text-4xl leading-[3.3rem]  font-[600] mb-3 pr-5">
//                                 Our platform provides a wide range of online courses for you to discover.
//                             </h1>
//                             <p className="text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem]  mb-7">
//                                 Unlock limitless learning opportunities on our platform with a wide variety of online courses. Dive into
//                                 different topics and grow your skills at your own pace.       </p>
//                             <div className="flex items-center">
//                                 <Link href="/learn">
//                                     <Button title="Learn More" />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </Section>
//             </div>
//         </>
//     )
// }


"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  

    const stats = [
        { label: "Students", value: "100+", bg: "bg-[#2EC4B636]" },
        { label: "Teachers", value: "100+", bg: "bg-[#FF336652] " },
        { label: "Courses", value: "100+", bg: "bg-[#011627] text-white" },
    ];

    return (
        <>
            <Section>
                <div className="grid lg:grid-cols-2 gap-14 mt-2 overflow-hidden">
          
                    <div className="md:pr-10">
                        <h1 
                            className="text-4xl leading-[54px] font-bold mb-2 text-balance"
                             data-aos="fade-up"
                             data-aos-once="true" 
                        >
                            Elevate your child's learning experience with our professional home tuition services.
                        </h1>


                        <p 
                            className="text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem] font-normal text-[#0A0A0A]/75 mb-8"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-once="true" 
                        >
                            Say goodbye to academic struggles and confusion. Our professional tutors ensure a personalized learning experience, empowering your child to excel every day.
                        </p>

                        <div 
                            className="flex items-center space-x-6"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-once="true" 
                        >
                            <Link href="/signin">
                                <Button title="Sign In" bgGreen={true} />
                            </Link>
                            <Link href="/getstarted">
                                <Button title="Get Started" />
                            </Link>
                        </div>

                        <div 
                            className="flex flex-wrap justify-center md:justify-start gap-3.5 mt-12"
                        >
                            {stats.map((items, index) => (
                                <div 
                                    key={index} 
                                    className={`text-center ${items.bg} py-[19px] px-[34px] border border-[#011627]/30 rounded-3xl`}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 200}
                                >
                                    <h6 className="text-xl font-normal mb-4">{items.label}</h6>
                                    <h3 className="text-3xl md:text-4xl font-semibold">{items.value}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Images */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        <Image
                            src="/assests/heroSection/00bec2872c1d0f42d1c3565a5995a521.png"
                            alt="Main Teacher"
                            className="rounded-3xl h-[364px] object-cover"
                            width={1000}
                            height={1000}
                            priority
                            data-aos="fade-left"
                            data-aos-once="true" 
                        />
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <Image
                                src="/assests/heroSection/6fb32429b68ae24ea78c4bb8bb1a3cf1.png"
                                alt="Teacher 1"
                                className="rounded-3xl h-[172px] object-cover"
                                width={1000}
                                height={1000}
                                priority
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-once="true" 
                            />
                            <Image
                                src="/assests/heroSection/ca7b69c39f5863c6d90999b27501e9f4.png"
                                alt="Teacher 2"
                                className="rounded-3xl h-[172px] object-cover"
                                width={1000}
                                height={1000}
                                priority
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-once="true" 
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Second Section */}
            <div className="mt-5">
                <Section>
                    <div className="grid lg:grid-cols-2 gap-5 bg-white overflow-hidden">
                        <div 
                            className="grid grid-cols-2 gap-x-2 md:gap-x-4 order-last lg:order-first"
                            data-aos="fade-right"
                        >
                            <div className="col-span-1 row-span-2 w-full h-[540px] lg:h-[486px]">
                                <Image
                                    className="rounded-3xl object-cover w-full h-full"
                                    src="/assests/heroSection/8c4d92e9786756077e88b423410795d3.jpg"
                                    alt="Main Teacher"
                                    width={900}
                                    height={900}
                                    priority
                                />
                            </div>

                            <div className="flex flex-col gap-y-2 md:gap-y-2.5 h-[486px]">
                                <Image
                                    src="/assests/heroSection/d035daee1752e70310c09850f74d9617.jpg"
                                    alt="Teacher 1"
                                    width={1000}
                                    height={1000}
                                    priority
                                    className="rounded-3xl object-cover w-full h-full"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-once="true" 
                                />
                                <Image
                                    src="/assests/heroSection/c12c7f59a8a354143d29f7ed1349f148.jpg"
                                    alt="Teacher 2"
                                    width={1000}
                                    height={1000}
                                    priority
                                    className="rounded-3xl object-cover w-full lg:h-full"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-once="true" 
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div 
                            className="px-6 py-12 border border-[#01162780] h-full rounded-[32px] order-first lg:order-last"
                            data-aos="fade-left"
                            data-aos-duration="500"
                            data-aos-once="true" 
                        >
                            <h1 className="text-4xl leading-[3.3rem] font-[600] mb-3 pr-5">
                                Our platform provides a wide range of online courses for you to discover.
                            </h1>
                            <p className="text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem] mb-7">
                                Unlock limitless learning opportunities on our platform with a wide variety of online courses. Dive into
                                different topics and grow your skills at your own pace.
                            </p>
                            <div className="flex items-center">
                                <Link href="/learn">
                                    <Button title="Learn More" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
}
