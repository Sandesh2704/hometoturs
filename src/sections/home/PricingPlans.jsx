"use client"
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import SectionTitle from '@/components/SectionTitle';
import Section from "@/components/Section";
import pricingPlans from "@/deta/pricing";



const PricingPlans = () => {
  return (
    <Section>
      <div className=' flex justify-center'>
        <div className='sm:w-3/12 md:w-6/12 text-center'>
          <SectionTitle title="Find the perfect plan that fits your budget" black={true} balance={true} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 lg:px-20 mt-16">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </Section>
  );
};

export default PricingPlans;


const PricingCard = ({ plan }) => {
  return (
    <div className={`rounded-2xl   flex flex-col h-full relative overflow-hidden w-full  px-4 py-8 ${plan.isPopular ? 'bg-[#011627]' : ' bg-white border border-[#011627] '}`}>
      {plan.isPopular && (
        <div className="flex gap-2 ">
          <span className="bg-[#2EC4B6] text-black px-4 py-2 rounded-full text-sm">
            Advance Plan
          </span>
          <span className="bg-[#FF3366] text-white px-4 py-2 rounded-full text-sm">
            Popular
          </span>
        </div>
      )}
      {!plan.isPopular && (
        <div >
          <span className="bg-[#2EC4B6] text-white px-4 py-2 rounded-full text-sm">
            {plan.tag}
          </span>
        </div>
      )}

      <div className="mt-7">
        <div className="text-5xl  flex items-baseline">
          <span className={`font-semibold ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>${plan.price}</span>
          <span className={` ml-1 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>/month</span>
        </div>
        <p className={`mt-5 ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
          {plan.description}
        </p>
      </div>

      <div className="flex-grow mt-6">
        <ul className="space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              {feature.included ? (
                <FaCheck className={`  text-3xl p-2 flex-shrink-0 rounded-full ${plan.isPopular ? 'text-black bg-white' : ' bg-[#2EC4B6] text-white '}`} />
              ) : (
                <RxCross2 className="bg-[#FF3366] text-white text-3xl p-2 flex-shrink-0 rounded-full" />
              )}
              <span className={plan.isPopular ? 'text-white' : 'text-gray-700'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-8 w-full py-3 px-6 rounded-full font-medium ${plan.isPopular ? 'text-black bg-white' : ' bg-black text-white '} hover:opacity-90 transition-opacity`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};
