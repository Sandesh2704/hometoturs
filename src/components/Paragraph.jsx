import React from 'react'

export default function Paragraph({text, black, balance}) {
  return (
    <div className={`text-base leading-[1.7rem] 
       ${black ? 'text-gray-400' : "text-black"}
        ${balance ? 'text-balance' : ""}`}
       >{text}</div>
  )
}
