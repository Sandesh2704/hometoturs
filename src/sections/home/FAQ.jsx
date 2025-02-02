"use client"
import Paragraph from '@/components/Paragraph';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import faqs from '@/deta/faq';
import { useState } from 'react';
import { RxArrowTopRight } from "react-icons/rx";

export default function FAQ() {
    const [selectedQuestion, setSelectedQuestion] = useState(1);
    return (
        <>
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <SectionTitle title="Some of our most frequently asked questions" black={true} balance={true} />
                        <div className="border border-[#01162752] p-6 rounded-2xl mt-6">
                            <h3 className=" text-xl font-medium mb-3">
                                {faqs[selectedQuestion - 1].question}
                            </h3>
                            <Paragraph text={faqs[selectedQuestion - 1].answer} />
                        </div>
                    </div>

                    <div>
                        <Paragraph text=" Whether you're searching for the perfect tutor, browsing our FAQs, or exploring
                            personalized learning solutions, we're here to support you. Our goal is to provide
                            clear guidance and ensure your child's education journey is seamless and enriching"/>
                        <div className="space-y-3 mt-6">
                            {faqs.map((faq) => (
                                <button
                                    key={faq.id}
                                    onClick={() => setSelectedQuestion(faq.id)}
                                    className={`w-full px-3 md:px-6 py-3 rounded-2xl flex items-center justify-between gap-4 ${selectedQuestion === faq.id
                                        ? 'bg-[#FF3366] text-white'
                                        : 'bg-white border border-[#01162752] hover:border-[#FF3366] text-black'
                                        }`}
                                >
                                    <span className="flex text-base text-medium items-start text-start">
                                        <span className="mr-2 text-medium ">
                                            {String(faq.id).padStart(2, '0')}
                                        </span>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 md:p-3 text-base lg::text-xl rounded-full
                                        ${selectedQuestion === faq.id ? 'bg-[#2EC4B6] ' : 'bg-black text-white'
                                        }`}>
                                        <RxArrowTopRight />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

