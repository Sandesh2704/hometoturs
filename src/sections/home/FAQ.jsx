"use client"

import PaddingX from '@/components/PaddingX';
import SectionTitle from '@/components/SectionTitle';
import { useState } from 'react';
import { RxArrowTopRight } from "react-icons/rx";

export default function FAQ() {
    const [selectedQuestion, setSelectedQuestion] = useState(1);

    const faqs = [
        {
            id: 1,
            question: "How do I find the right tutor for my child?",
            answer: "You can browse through our tutor profiles and filter by subject expertise, experience level, and availability to find the perfect match for your child's needs."
        },
        {
            id: 2,
            question: "Are the tutors qualified and experienced?",
            answer: "Yes, all our tutors are thoroughly vetted, professionally trained, and have proven expertise in their respective fields."
        },
        {
            id: 3,
            question: "Can I choose between online and in-person tutoring?",
            answer: "Yes, we offer both online and in-person tutoring options to accommodate your preferences and schedule."
        },
        {
            id: 4,
            question: "What subjects and grade levels do you cover?",
            answer: "We cover a wide range of subjects across all grade levels, from elementary to high school and beyond."
        },
        {
            id: 5,
            question: "How flexible are the schedules?",
            answer: "Our tutoring schedules are highly flexible, allowing you to book sessions at times that work best for you and your child."
        }
    ];

    return (
        <div className="bg-white py-16">
            <PaddingX>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left column - expanded answer */}
                    <div>
                        <SectionTitle title="Some of our most frequently asked questions" black={true} balance={true} />

                        <div className="border border-[#01162752] p-6 rounded-2xl mt-6">
                            <h3 className=" text-xl font-medium mb-3">
                                {faqs[selectedQuestion - 1].question}
                            </h3>
                            <p className="text-gray-600 text-base leading-[1.7rem]">
                                {faqs[selectedQuestion - 1].answer}
                            </p>
                        </div>

                    </div>


                    {/* Right column - question list */}
                    <div>
                        <p className="text-gray-600 text-base leading-[1.7rem]">
                            Whether you're searching for the perfect tutor, browsing our FAQs, or exploring
                            personalized learning solutions, we're here to support you. Our goal is to provide
                            clear guidance and ensure your child's education journey is seamless and enriching
                        </p>

                        <div className="space-y-3 mt-6">

                            {faqs.map((faq) => (
                                <button
                                    key={faq.id}
                                    onClick={() => setSelectedQuestion(faq.id)}
                                    className={`w-full px-6 py-3 rounded-2xl flex items-center justify-between ${selectedQuestion === faq.id
                                        ? 'bg-[#FF3366] text-white'
                                        : 'bg-white border border-[#01162752] hover:border-[#FF3366] text-black'
                                        }`}
                                >
                                    <span className="flex text-base text-medium items-center">
                                        <span className="mr-2 text-medium ">
                                            {String(faq.id).padStart(2, '0')}
                                        </span>
                                        {faq.question}
                                    </span>
                                    <div className={`p-3 text-xl rounded-full
                                        ${selectedQuestion === faq.id ? 'bg-[#2EC4B6] ' : 'bg-black text-white'
                                        }`}>
                                        <RxArrowTopRight />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </PaddingX>
        </div>
    );
};

