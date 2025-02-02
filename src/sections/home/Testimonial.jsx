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
     id:1,
    name: 'Joshua Enith',
    role: 'Student',
    image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
    quote: 'Finding the right tutor for my child was such a relief. The personalized sessions have improved not only their grades but also their confidence. Highly recommended!',
    rating: 5
  },
  {
    id:2,
    name: 'Joshua Enith',
    role: 'Student',
    image: '/assests/testmonials/b08ed33d47db4b9049c21f94a74a01ab.jpg',
    quote: 'Finding the right tutor for my child was such a relief. The personalized sessions have improved not only their grades but also their confidence. Highly recommended!',
    rating: 5
  },
  {
    id:3,
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
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="px-20 py-5">
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
                            <span className='text-yellow-400 text-lg' key={i}> <FaStar/></span>
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
