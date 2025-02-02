
// "use client"
// import PaddingX from '@/components/PaddingX';
// import SectionTitle from '@/components/SectionTitle'
// import Image from 'next/image';
// import React, { useState } from 'react'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { FaStar } from "react-icons/fa6";


// export default function Testimonial() {
//   const testimonials = [
//     {
//       name: 'Joshua Enith',
//       role: 'Student',
//       image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
//       rating: 5,
//       text: 'Finding the right tutor for my child was such a relief. The personalized sessions have improved not only their grades but also their confidence. Highly recommended!'
//     },
//     {
//       name: 'Sarah Chen',
//       role: 'Parent',
//       image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
//       rating: 5,
//       text: 'The tutoring platform has been a game-changer for my daughter. The quality of instruction is outstanding.'
//     },
//     {
//       name: 'Michael Roberts',
//       role: 'Student',
//       image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
//       rating: 5,
//       text: 'I appreciate how flexible and accommodating the tutors are. My grades have improved significantly.'
//     }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };



//   return (
//     <>
//       <section className="bg-black text-white py-16">
//         <PaddingX>
//           <div className="flex justify-center">
//             <div className="w-[40rem] text-center">
//               <SectionTitle title="Discover what our students say about us" balance={true} />
//             </div>
//           </div>


//           <div className="flex justify-center bg-cover bg-center" style={{backgroundImage:  "url('/assests/testmonials/9a964c330c0bb6912707d1d23495af18.png')"}}>
        
//               <div className="relative ">
//                 <button
//                   onClick={prevSlide}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
//                 >
//                   <FaChevronLeft className="w-6 h-6 text-white" />
//                 </button>

//                 <div className="">
//                   <div className="flex flex-col md:flex-row items-center gap-8">
//                     <div className=" relative py-7 px-2 rounded-2xl border-2  -rotate-6 border-[#2EC4B6]">
//                       <Image
//                         height={400}
//                         width={200}
//                         priority
//                         src={testimonials[currentSlide].image}
//                         alt={testimonials[currentSlide].name}
//                         className="rounded-lg object-cover w-full h-full"
//                       />

//                       <div className='flex text-center flex-col mt-4'>
//                         <h3 className="text-white text-xl font-semibold">
//                           {testimonials[currentSlide].name}
//                         </h3>
//                         <span className="text-gray-400 text-base mt-1">
//                           {testimonials[currentSlide].role}
//                         </span>

//                         <div className="flex items-center gap-1 mt-2 justify-center">
//                           {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
//                             <span className='text-yellow-400 text-lg'> <FaStar/></span>
//                           ))}
//                         </div>
//                       </div>

//                     </div>

//                     <div className="flex-1 w-40 text-center md:text-left">
//                       <p className="text-white text-lg mb-4">
//                         {testimonials[currentSlide].text}
//                       </p>

//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
//                 >
//                   <FaChevronRight className="w-6 h-6 text-white" />
//                 </button>
//               </div>
//             </div>

//         </PaddingX>
//       </section>
//     </>
//   )
// }


'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import PaddingX from '@/components/PaddingX';
import SectionTitle from '@/components/SectionTitle'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
  {
    name: 'Joshua Enith',
    role: 'Student',
    image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
    quote: 'Finding the right tutor for my child was such a relief. The personalized sessions have improved not only their grades but also their confidence. Highly recommended!',
    rating: 5
  },
  {
    name: 'Joshua Enith',
    role: 'Student',
    image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
    quote: 'Finding the right tutor for my child was such a relief. The personalized sessions have improved not only their grades but also their confidence. Highly recommended!',
     rating: 5
  },
  {
    name: 'Joshua Enith',
    role: 'Student',
    image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
    quote: 'Finding the right tutor for my child was such a relief. The personalized sessions have improved not only their grades but also their confidence. Highly recommended!',
    rating: 5
  }
]

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors"
      aria-label="Next slide"
    >
      <IoIosArrowForward className="w-8 h-8" />
    </button>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors"
      aria-label="Previous slide"
    >
      <IoIosArrowBack className="w-8 h-8" />
    </button>
  )
}

export default function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
          <section className="bg-black text-white py-16 ">
        <PaddingX>
          <div className="flex justify-center">
            <div className="w-[40rem] text-center">
              <SectionTitle title="Discover what our students say about us" balance={true} />
            </div>
          </div>
          <div  className="relative flex justify-center bg-cover bg-center" >

          <div className="absolute inset-0 m-auto w-96 h-96 bg-[#2EC4B652] blur-[220px]" />

    <div className="max-w-5xl mx-auto mt-10"  >
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="px-20 py-5">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className=" relative py-7 px-3 rounded-2xl border-2  -rotate-6 border-[#2EC4B6]">
                       <Image
                        height={400}
                        width={300}
                        priority
                        src={testimonial.image }
                        alt={testimonial.name}
                        className="rounded-lg object-cover w-[316px] h-[254px]"
                      />

                      <div className='flex text-center flex-col mt-4'>
                        <h3 className="text-white text-xl font-semibold">
                        {testimonial.name}
                        </h3>
                        <span className="text-gray-400 text-base mt-1">
                        {testimonial.role}
                        </span>

                        <div className="flex items-center gap-1 mt-2 justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span className='text-yellow-400 text-lg'> <FaStar/></span>
                          ))}
                        </div>
                      </div>

                    </div>
              <div className="flex-1 px-3">
                <p className="text-white text-2xl leading-[2rem] ">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </PaddingX>
  </section>
  )
}
