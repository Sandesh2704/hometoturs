import Paragraph from '@/components/Paragraph';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import updates from '@/deta/updates';
import Image from 'next/image';
import React from 'react';

export default function Updates() {
    return (
        <Section color="#011627">
            <SectionTitle title="Latest Updates" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6  mt-12">
                <div className="relative flex flex-col rounded-2xl h-full overflow-hidden group">
                    <Image
                        width={100}
                        height={100}
                        priority
                        src="/assests/blog/20d838ab647cce1ba4660b9888db145e.jpg"
                        alt="Wooden desk with typewriter"
                        className="w-full h-full rounded-2xl object-cover relative z-0"
                    />
                    <div className='hidden md:flex absolute z-10 top-0 right-0 h-full w-full bg-gradient-to-t from-black/95 to-transparent' />

                    <div className='hidden md:flex flex-col absolute z-40 rounded-2xl bottom-0 left-0 right-0 p-6'>
                        <span className="text-gray-300 text-sm">{updates[0].date}</span>
                        <div className='mt-1'>
                            <SectionTitle title={updates[0].title} />
                        </div>
                        <div className='mt-3 '>
                            <Paragraph text={updates[0].description} black={true} />
                        </div>
                    </div>

                    <div className="flex flex-col md:hidden md:flex-1 px-4 py-6">
                        <span className="text-gray-400 text-xs">{updates[0].date}</span>
                        <h3 className="text-white text-xl font-semibold mt-1 text-balance">{updates[0].title}</h3>
                        <p className="text-gray-400 text-base leading-[1.7rem] mt-2">
                            {updates[0].description}
                        </p>
                    </div>
                </div>


                <div className="space-y-7">
                    {updates.slice(1).map((update) => (
                        <div key={update.id} className="flex flex-col md:flex-row  items-start gap-y-5 space-x-4">
                            <div className="w-full md:w-5/12">
                                <Image
                                    width={100}
                                    height={100}
                                    priority
                                    src="/assests/blog/3ffba104a65172e47c851115f0ea8450.jpg"
                                    alt="Desk setup"
                                    className="w-full h-[200px] md:h-[160px] object-cover rounded-lg"
                                />
                            </div>
                            <div className="md:flex-1">
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
        </Section>
    );
};
