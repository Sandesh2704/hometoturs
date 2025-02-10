import React from 'react'

export default function Paragraph({ text, black, balance }) {
  return (
    <div className={`text-base md:text-lg  leading-[2rem] 
       ${black ? 'text-gray-400' : "text-gray-600"}
        ${balance ? 'text-balance' : ""}`}
    >{text}</div>
  )
}


