
"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Button from '../Button';

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
        <nav className="bg-white px-4 sm:px-7 md:px-10 lg:px-14 shadow mb-2">
            <div className="flex justify-between items-center py-5  ">
                <div className="flex-shrink-0">
                    <Link href="/" className="text-2xl font-semibold ">
                        Home Tutors
                    </Link>
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-[#000000BF] hover:text-secondary px-3 py-2 text-base font-medium">
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

                    <div className=" flex lg:hidden items-center pr-2">
                        <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

            </div>

            {isOpen && (
                <div
                    className="fixed top-0 h-full inset-0 bg-black/60 z-0"
                    onClick={() => setIsOpen(!isOpen)}
                ></div>
            )}

            <AnimatePresence>
                <motion.div
                    className="fixed top-0 left-0 h-full w-[80%] sm:w-[50%] md:w-[40%] bg-[#0f0f11] shadow-lg transform duration-500 ease-in-out text-base z-50"
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
                >
                    <div className="flex justify-between items-center px-5 py-2 shadow-md">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-semibold text-white ">
                                Home Tutors
                            </Link>
                        </div>
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu} className="text-white">
                                <FaTimes size={30} />
                            </button>
                        </div>
                    </div>


                    <div className='px-4 sm:px-7'>
                        <div className=" pt-8 pb-4 space-y-1 sm:px-3 text-white">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FF3366] transition-colors"
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}

                        </div>

                        <div className="flex items-center justify-center mt-7 space-x-4">
                            <Link href="/signin" >
                                <Button title="Sign In" bgGreen={true} />
                            </Link>

                            <Link href="/getstarted" >
                                <Button title="Get Started" />
                            </Link>
                        </div>


                    </div>

                </motion.div>
            </AnimatePresence>
        </nav>
    );
};


