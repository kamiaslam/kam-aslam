'use client'

import { useEffect, useRef } from 'react'
import { Search, Layers, Users, Smartphone, Monitor, Mic } from 'lucide-react'
import Container from '@/components/ui/Container'
import { services } from '@/data/services'

export default function Services() {
  const sectionRef = useRef(null)

  const iconMap = {
    Search: <Search size={32} strokeWidth={1.5} />,
    Layers: <Layers size={32} strokeWidth={1.5} />,
    Users: <Users size={32} strokeWidth={1.5} />,
    Monitor: <Monitor size={32} strokeWidth={1.5} />,
    Smartphone: <Smartphone size={32} strokeWidth={1.5} />,
    Mic: <Mic size={32} strokeWidth={1.5} />
  }

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return

    const ctx = window.gsap.context(() => {
      window.gsap.fromTo('.service-card', 
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="bg-white py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 gap-8">
          <div className="md:max-w-2xl">
             <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                What I Do
             </span>
             <h2 className="text-5xl md:text-7xl font-serif font-light text-black">
               End-to-end design<br />
               <span className="italic text-gray-400">expertise</span>
             </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-gray-600 leading-relaxed">
              Specialised in creating digital products that blend research, strategy, and craft - ensuring every design decision serves both users and business.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-t border-gray-200 pt-16">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="mb-8 text-gray-400 group-hover:text-black transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-serif font-medium mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
