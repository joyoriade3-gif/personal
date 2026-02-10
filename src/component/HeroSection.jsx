import React from 'react'

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 text-center max-w-4xl mx-auto px-4">
      <h1 className="font-semibold text-7xl text-amber-50 -mt-15">
        Empowering Change, One Step at a Time
      </h1>

      <p className="mt-3 text-xl text-gray-200 max-w-2xl">
        Every small act of kindness creates a ripple of positive change. Join us in making a difference lives together.
      </p>

      <button className="mt-4 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:text-black hover:bg-white hover:cursor-pointer transition">
        Donate Now
      </button>
    </div>
    )
}

export default HeroSection