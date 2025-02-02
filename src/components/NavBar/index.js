
"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import Button from '../Button';
import PaddingX from '../PaddingX';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Courses', href: '/courses' },
        { name: 'Mentors', href: '/mentors' },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <nav className="bg-white shadow mb-2">
            <PaddingX>
                <div className="flex justify-between items-center py-4  ">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-semibold ">
                            Home Tutors
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-[#000000BF] hover:text-[#FF3366] px-3 py-2 text-base font-medium">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center  space-x-4">
                        <Link href="/signin" className='hidden md:flex'>
                            <Button title="Sign In" bgGreen={true} />
                        </Link>

                        <Link href="/getstarted" className='hidden md:flex'>
                            <Button title="Get Started" />
                        </Link>

                        <div className=" flex lg:hidden items-center ">
                            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>

                </div>
            </PaddingX>

            <AnimatePresence>
                <motion.div
                    className="fixed top-0  right-0 h-full w-[85%] sm:w-[40%] md: bg-[#0f0f11] shadow-lg transition-transform transform duration-500 ease-in-out text-base"
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                                {item.name}
                            </a>
                        ))}
                        <a href="/signin" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                            Sign In
                        </a>
                        <a href="/getstarted" className="block bg-blue-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-600">
                            Get Started
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>
        </nav>
    );
};

