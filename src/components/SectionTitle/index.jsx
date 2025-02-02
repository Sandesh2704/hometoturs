import React from 'react'

export default function SectionTitle({ title, black, balance }) {
    return (
        <div className={`text-4xl leading-[3rem] font-[600] tracking-wider
        ${black ? 'text-black' : "text-white"}
        ${balance ? 'text-balance' : ""}`}>
            {title}
        </div>
    )
}