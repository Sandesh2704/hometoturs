import React from 'react'

export default function Button({ title, bgGreen, roundedfull }) {
    return (
        <div className={`px-5 py-3 text-base font-medium w-fit
        ${bgGreen ? "bg-[#2EC4B6] text-black" : "bg-[#FF3366] text-white"}
        ${roundedfull? "rounded-full" : "rounded-lg"}`}>
            {title}
        </div>
    )
}
