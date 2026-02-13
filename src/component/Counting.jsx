import React from 'react'

const Counting = () => {
  const Numb = [
    {
      number: 20,
      Paragraph: "People served worldwide",
    },
    {
      number: 120859,
      Paragraph: "Projects funded",
    },
    {
      number: 1.8,
      Paragraph: "People to take action",
    },
    {
      number: 5260,
      Paragraph: "Partner organizations",
    },
  ];
  return (
    <div className='flex gap-2 divide-x-1 mt-30 mb-30 text-center justify-center'>
      { Numb.map((Numb, idx) => (
        <div key="idx" className='p-8'>
          <h1  className='text-5xl text-black font-bold'>
            {Numb.number}
          </h1>
          <h3 className='text-md text-gray-500 font-semibold mt-2'>
              {Numb.Paragraph}
          </h3> 
        </div>
        ))}
    </div>
  )
}

export default Counting