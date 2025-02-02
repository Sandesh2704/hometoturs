import React from 'react'

export default function Section({children, color}) {
  return (
    <section className='px-4 sm:px-7 md:px-10 lg:px-14 py-10 lg:py-14' style={{backgroundColor: color}}>
      {children}
    </section>
  )
}

