'use client'
import Image from 'next/image'
import Slider from 'react-slick'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Section from '@/components/Section'
import SectionTitle from '@/components/SectionTitle'
import testimonials from '@/deta/testimonials'


function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors"
      aria-label="Next slide"
    >
      <IoIosArrowForward className="text-2xl md:text-3xl xl:text-5xl  font-normal" />
    </button>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors"
      aria-label="Previous slide"
    >
      <IoIosArrowBack className="text-2xl md:text-3xl xl:text-5xl font-normal" />
    </button>
  )
}

export default function Testimonial() {
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
    <Section color="black">
      <div className='py-2 overflow-hidden'>
        <div className="flex justify-center">
          <div className="w-full sm:w-[40rem] text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true" >

            <SectionTitle title="Discover what our students say about us" balance={true} />
          </div>
        </div>
        <div className="relative flex justify-center bg-cover bg-center overflow-hidden">
          <div className="absolute inset-0 m-auto w-96 h-96 bg-[#2EC4B652] blur-[220px]" />
          <div className="w-full xl:w-[75%] mx-auto mt-6">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-5 md:px-10 xl:px-24 py-8">
                  <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12">
                    <div className="relative py-8 px-3 rounded-3xl border-2 border-[#2EC4B6] md:-rotate-3 lg:-rotate-6">
                      <Image
                        height={400}
                        width={300}
                        priority
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-2xl object-cover w-full md:w-[316px] h-40 md:h-52 lg:h-[254px]"
                      />
                      <div className="flex text-center flex-col py-3 mt-4">
                        <h3 className="text-white text-2xl font-semibold">{testimonial.name}</h3>
                        <span className="text-gray-300 text-xl mt-4">{testimonial.role}</span>
                        <div className="flex items-center gap-1 mt-3 justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span className="text-yellow-400 text-xl md:text-2xl" key={i}><FaStar /></span>
                          ))}
                        </div>
                      </div>
                      <div className="flex md:hidden px-3 mt-4">
                        <p className="text-white text-sm sm:text-base sm:leading-[2.5rem]">{testimonial.quote}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-1 px-5 md:px-3">
                      <p className="text-white text-lg lg:text-xl xl:text-2xl sm:leading-9 ">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  )
}
