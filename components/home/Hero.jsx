'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import { gsap } from 'gsap'
import Link from 'next/link'
import siteConfig from '@/data/siteConfig'

export default function Hero({ startAnimation = true }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/images/kam-1.png',
    '/images/kam-2.png',
    '/images/kam-3.png',
    '/images/kam-4.png'
  ]

  useEffect(() => {
    // Hide elements initially if animation hasn't started
    if (!startAnimation) {
      gsap.set('.hero-text', { y: 100, opacity: 0 })
      gsap.set('.hero-image-container', { scale: 1.1, opacity: 0 })
      gsap.set('.hero-meta', { opacity: 0, y: 20 })
      return
    }
    
    setIsLoaded(true)
    
    // Simple entrance animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.to('.hero-text', 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.05 }
    )
    .to('.hero-image-container',
      { scale: 1, opacity: 1, duration: 1 },
      '-=0.6'
    )
    .to('.hero-meta',
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 },
      '-=0.6'
    )

  }, [startAnimation])

  // Image carousel effect
  useEffect(() => {
    if (!startAnimation) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [startAnimation, images.length])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 bg-[#f9f9f9] overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="overflow-hidden mb-6">
              <span className="hero-text inline-block text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-2">
                {siteConfig.hero.subtitle}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-serif font-light text-black mb-8 -ml-1">
              <div className="overflow-hidden">
                <span className="hero-text block">Designing</span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-text block italic text-gray-800">Digital</span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-text block">Experiences</span>
              </div>
            </h1>

            <div className="overflow-hidden max-w-lg mb-10">
              <p className="hero-text text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {siteConfig.hero.description}
              </p>
            </div>

            <div className="hero-meta flex flex-wrap gap-6 items-center">
              <Link 
                href="/#work"
                className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-800"
              >
                <span className="text-lg font-medium">{siteConfig.hero.cta}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {siteConfig.availability}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh]">
             <div className="hero-image-container w-full h-full relative rounded-none overflow-hidden">
               {/* Abstract Background Shape */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f0f0f0] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
               
               {/* Image Carousel */}
               {images.map((image, index) => (
                 <img 
                   key={image}
                   src={image}
                   alt={`Kam Aslam - Photo ${index + 1}`}
                   className={`absolute inset-0 w-full h-full object-cover object-center grayscale transition-opacity duration-1000 ease-in-out ${
                     index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                   }`}
                 />
               ))}
            </div>
            
            {/* Decorative floating card */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 shadow-xl max-w-xs hidden md:block hero-meta z-20">
              <p className="font-serif text-2xl italic text-gray-900 leading-snug">
                "{siteConfig.hero.quote.text}"
              </p>
              <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">{siteConfig.hero.quote.author}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
