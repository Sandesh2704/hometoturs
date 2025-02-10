import React from 'react'

export default function SectionTitle({ title, black, balance }) {
    return (
        <div className={`text-4xl leading-[3.2rem] font-[600] tracking-wide
        ${black ? 'text-black' : "text-white"}
        ${balance ? 'text-balance' : ""}`}>
            {title}
        </div>
    )
}