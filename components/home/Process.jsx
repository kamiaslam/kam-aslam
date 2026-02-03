'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import { processSteps } from '@/data/process'

export default function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return

    const ctx = window.gsap.context(() => {
      window.gsap.fromTo('.process-step', 
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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
    <section id="process" ref={sectionRef} className="py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky top-32">
             <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                How I Work
             </span>
            <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 text-black">
              A proven <br />
              <span className="italic text-gray-400">methodology</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              A structured approach that ensures every project delivers exceptional results while keeping you involved at every critical decision point.
            </p>
            <div className="p-8 rounded-none border-l-2 border-black bg-gray-50">
              <h3 className="text-xl font-serif font-medium mb-3">Why Process Matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This methodology reduces risk, ensures alignment across stakeholders, focuses on user value, and delivers measurable results. It's not about rigid rules - it's about a reliable framework for innovation.
              </p>
            </div>
          </div>

          <div className="space-y-16 mt-8 lg:mt-0">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step flex gap-8 items-baseline group">
                <div className="text-sm font-bold tracking-widest text-gray-300 group-hover:text-black transition-colors duration-300">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-medium mb-4 group-hover:italic transition-all duration-300">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
