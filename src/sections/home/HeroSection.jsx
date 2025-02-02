
import Button from '@/components/Button'
import Section from '@/components/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {

    const stats = [
        { label: "Students", value: "100+", bg: "bg-[#2EC4B636]" },
        { label: "Teachers", value: "100+", bg: "bg-[#FF336652] " },
        { label: "Courses", value: "100+", bg: "bg-[#011627] text-white" },
    ];


    return (
        <>
            <Section>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
                    <div className="md:pr-10">
                        <h1 className="text-4xl leading-[3rem]  font-bold mb-5 text-balance">
                            Elevate your child's learning experience with our professional home tuition services.
                        </h1>
                        <p className="text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem]  mb-6">
                            Say goodbye to academic struggles and confusion. Our professional tutors ensure a personalized learning experience, empowering your child to excel every day.
                        </p>
                        <div className="flex items-center  space-x-4">
                            <Link href="/signin">
                                <Button title="Sign In" bgGreen={true} />
                            </Link>

                            <Link href="/getstarted" >
                                <Button title="Get Started" />
                            </Link>
                        </div>


                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-10">
                            {stats.map((items, index) => (
                                <div key={index} className={`text-center ${items.bg} py-5 px-8 border rounded-2xl`}>
                                    <h6 className={`text-base mb-3 ${items.text}`}>{items.label}</h6>
                                    <h3 className="text-3xl md:text-4xl font-bold">{items.value}</h3>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-2 md:gap-4">

                        <Image
                            src="/assests/heroSection/00bec2872c1d0f42d1c3565a5995a521.png"
                            alt="Main Teacher"
                            className="rounded-2xl  h-[320px] object-cover col-span-2"
                            width={1000}
                            height={1000}
                            priority
                        />

                        <Image
                            src="/assests/heroSection/6fb32429b68ae24ea78c4bb8bb1a3cf1.png"
                            alt="Teacher 1"
                            className="rounded-2xl  h-[170px] object-cover"
                            width={1000}
                            height={1000}
                            priority
                        />
                        <Image
                            src="/assests/heroSection/ca7b69c39f5863c6d90999b27501e9f4.png"
                            alt="Teacher 2"
                            className="rounded-2xl h-[170px] object-cover"
                            width={1000}
                            height={1000}
                            priority
                        />
                    </div>
                </div>


                <div className="grid lg:grid-cols-2 gap-7 pt-16 bg-white">


                    <div className="grid grid-cols-2 h-fit gap-2 md:gap-4 order-last lg:order-first">

                        <Image
                            src="/assests/heroSection/8c4d92e9786756077e88b423410795d3.jpg"
                            alt="Main Teacher"
                            className="rounded-2xl object-cover w-full h-[400px] md:h-full row-span-2"
                            width={900}
                            height={900}
                            priority
                        />


                        <div className="flex flex-col gap-2 md:gap-4 h-full">
                            <Image
                                src="/assests/heroSection/d035daee1752e70310c09850f74d9617.jpg"
                                alt="Teacher 1"
                                className="rounded-2xl object-cover w-full min-h-[195px] lg:h-full flex-1"
                                width={1000}
                                height={1000}
                                priority
                            />
                            <Image
                                src="/assests/heroSection/c12c7f59a8a354143d29f7ed1349f148.jpg"
                                alt="Teacher 2"
                                className="rounded-2xl object-cover w-full min-h-[195px] lg:h-full flex-1"
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                    </div>

                    <div className="px-6 h-full border border-[#01162780]  rounded-[32px]">
                        <h1 className="text-4xl leading-[3.2rem]  font-[600] mb-5">
                            Our platform provides a wide range of online courses for you to discover.
                        </h1>
                        <p className="text-lg lg:text-xl leading-[1.8rem] lg:leading-[2rem]  mb-6">
                            Unlock limitless learning opportunities on our platform with a wide variety of online courses. Dive into
                            different topics and grow your skills at your own pace.       </p>
                        <div className="flex items-center  space-x-4">
                            <Link href="/learn" className='hidden md:flex'>
                                <Button title="Learn More" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}