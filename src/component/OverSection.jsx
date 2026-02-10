import React from 'react'
import Over from './Over'

const OverSection = () => {
  return (
    <div className='flex gap-2 bg-white max-w-250 rounded-xl divide-x mx-auto -mt-25  '>
      <Over
      number="01."
      topic="Causes"
      paragraph="We support education, healthcare, and poverty reduction."
      link="See Proof"
      />
      <Over
      number="02."
      topic="Get involved"
      paragraph="Volunteer or donate your skills to make a difference."
      link="View Financials"
      />
      <Over
      number="03."
      topic="Donation"      
      paragraph="Contribute today and help us change lives and build a better future."
      link="Learn More"
      />
    </div>
  )
}

export default OverSection