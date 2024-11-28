"use client"

import React from 'react'
import StarsBackground from "@/components/ui/stars-background";
import ShootingStars from "./ui/shooting-stars";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full">
      <h2 className='relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8'>
        <span>this is my website</span>

      </h2>
    
    </div>
  )
}

export default Hero
