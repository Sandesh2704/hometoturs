import React from 'react';
import Link from 'next/link';
import PaddingX from '../PaddingX';
import Paragraph from '../Paragraph';
import SectionTitle from '../SectionTitle';
import { RxArrowTopRight } from "react-icons/rx";
import Image from 'next/image';


const footerData = {
  companyInfo: {
    title: "Home tutors",
    description: "Our team of tutors consists of dedicated professionals with years of experience and expertise in their respective fields.",
    communityText: "Join a community of 100+ successful students",
    Imges: [
      "/assests/footer/23cfad77518a87ed584fd876f15475f1.png",
      "/assests/footer/d0b69d873d205c11baf035716923dcf5.png",
      "/assests/footer/34a6277fc3c71c809062c9bd784caa25.png",
      "/assests/footer/4c8c58ca88650363e7fb08ee0c19d728.png",

    ]
  },

  navigation: {
    title: "Navigation Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact", href: "/contact" }
    ]
  },

  socials: {
    title: "Socials",
    links: [
      { name: "Twitter", href: "#", newTab: true },
      { name: "Instagram", href: "#", newTab: true },
      { name: "Facebook", href: "#", newTab: true },
      { name: "WhatsApp", href: "#", newTab: true }
    ]
  },

  legals: {
    title: "Legals",
    links: [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
      { name: "Contact", href: "/contact" }
    ]
  },

  contact: {
    title: "Contact",
    links: [
      { name: "Hometutors@gmail.com", href: "mailto:Hometutors@gmail.com", newTab: true },
      { name: "+91 946 643 56", href: "+91 946 643 56", newTab: true },
      { name: "123 Address", href: "123 Address", newTab: true },
    ]
  },
};

const FooterLinks = ({ title, links }) => (
  <div>
    <h3 className="text-xl font-semibold mb-5">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-base" target={link.newTab ? "_blank" : "_self"}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);



export default function Footer() {
  return (
    <footer className=" relative overflow-hidden bg-black text-white py-12 border-[2px] border-[#2EC4B636]">
      <PaddingX>
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <Link href="/" className="text-3xl font-semibold">
              {footerData.companyInfo.title}
            </Link>
            <div className="text-gray-400 mt-5 w-[90%]">
              <Paragraph text={footerData.companyInfo.description} black={true} />
            </div>

            <div className='mt-7'>
              <Image
                src="/assests/footer/7dd198174d74c377c1942bd6ef24e745.png"
                alt="img"
                height={1000}
                width={1000}
                className="w-10 rotate-45"
              />

              <div className='flex items-center gap-10 mt-5'>
                <Paragraph text={footerData.companyInfo.communityText} black={true} />
                <div className='flex items-center  -space-x-3'>
                  {
                    footerData.companyInfo.Imges.map((items, index) => (
                      <Image
                        src={items}
                        alt={`Image ${index + 1}`}
                        height={1000}
                        width={1000}
                        className="object-cover relative w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                        key={index}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div>

            <SectionTitle title="Stay updated by subscribing to our newsletter" />
            <div className="mt-7 flex items-center border border-[#2EC4B6] rounded-full px-10 py-4 ">
              <input
                type="email"
                placeholder="jessicabrown@gmail.com"
                className="flex-grow tracking-wide bg-transparent outline-none text-gray-400 placeholder-gray-400"
              />
              <button className="ml-2 p-3 text-xl  rounded-full bg-[#2EC4B6] text-black hover:bg-cyan-500 focus:outline-none">
                <RxArrowTopRight />
              </button>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-[#FFFFFF26]">
          <FooterLinks title={footerData.navigation.title} links={footerData.navigation.links} />
          <FooterLinks title={footerData.socials.title} links={footerData.socials.links} />
          <FooterLinks title={footerData.legals.title} links={footerData.legals.links} />
          <FooterLinks title={footerData.contact.title} links={footerData.contact.links} />
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-gray-400 text-sm">Copyright@Hometutors</p>
        </div>

        <div className=' absolute -top-44 -right-44 w-96 h-96 bg-[#2EC4B6] blur-[400px] ' />
        <div className=' absolute -bottom-48 -left-48 w-96 h-96 bg-[#2EC4B6] blur-[400px] ' />
      </PaddingX>
    </footer>
  );
}
