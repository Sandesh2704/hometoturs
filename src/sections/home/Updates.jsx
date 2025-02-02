
import PaddingX from '@/components/PaddingX';
import Paragraph from '@/components/Paragraph';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import React from 'react';

export default function Updates() {
    const updates = [
        {
            id: 1,
            date: 'Dec 18th 2024',
            title: 'practical learning and problem-solving.',
            description: "Whether you're searching for the perfect tutor, browsing our FAQs, or exploring personalized learning solutions, we're here to support you. Our goal is to provide clear guidance and ensure your child's education journey is seamless and enriching",
            isMain: true,
        },
        {
            id: 2,
            date: 'Dec 18th 2024',
            title: 'practical learning and problem-solving.',
            description: "Whether you're searching for the perfect tutor, browsing our FAQs, or exploring personalized learning solutions,",
        },
        {
            id: 3,
            date: 'Dec 18th 2024',
            title: 'practical learning and problem-solving.',
            description: "Whether you're searching for the perfect tutor, browsing our FAQs, or exploring personalized learning solutions,",
        },
        {
            id: 4,
            date: 'Dec 18th 2024',
            title: 'practical learning and problem-solving.',
            description: "Whether you're searching for the perfect tutor, browsing our FAQs, or exploring personalized learning solutions,",
        },
    ];

    return (
        <section className="bg-[#011627] py-16">
            <PaddingX>
                <SectionTitle title="Latest Updates" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

                    <div className="relative flex flex-col rounded-2xl h-full overflow-hidden group">
                        <Image
                            width={100}
                            height={100}
                            priority
                            src="/assests/blog/20d838ab647cce1ba4660b9888db145e.jpg"
                            alt="Wooden desk with typewriter"
                            className="w-full h-full  rounded-2xl relative z-0"
                        />

                        <div className=' absolute z-10 top-0 right-0 h-full w-full bg-gradient-to-t from-black/95 to-transparent ' />

                        <div
                            className='absolute z-40 rounded-2xl bottom-0 left-0 right-0 p-6 '
                        // className="absolute z-40 rounded-2xl bottom-0 left-0 right-0 p-6 
                        // transition-all duration-300 ease-in-out transform translate-y-[calc(100%-10rem)] group-hover:translate-y-0"

                        >
                            <span className="text-gray-300 text-sm">{updates[0].date}</span>
                            <div className='mt-1'>
                                <SectionTitle title={updates[0].title} />
                            </div>
                            <div className='mt-3'>
                                <Paragraph text={updates[0].description} black={true} />
                            </div>
                        </div>
                    </div>


                    <div className="space-y-7">
                        {updates.slice(1).map((update) => (
                            <div
                                key={update.id}
                                className="flex   "
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    priority
                                    src="/assests/blog/3ffba104a65172e47c851115f0ea8450.jpg"
                                    alt="Desk setup"
                                    className="w-2/5 h-[160px] object-cover rounded-lg"
                                />
                                <div className="px-4 flex-1">
                                    <span className="text-gray-400 text-xs">{update.date}</span>
                                    <h3 className="text-white text-xl font-semibold mt-1 text-balance">{update.title}</h3>
                                    <p className="text-gray-400 text-base leading-[1.7rem] mt-2">
                                        {update.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </PaddingX>

        </section>
    );
};
