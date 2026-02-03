'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'

export default function Manifesto() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return

    const ctx = window.gsap.context(() => {
      // Content Animation
      window.gsap.from('.manifesto-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      })

      // Values Animation
      window.gsap.from('.manifesto-value', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.manifesto-values',
          start: 'top 80%',
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const values = [
    { title: "Research First", desc: "Every decision grounded in real user insights." },
    { title: "Systems Thinking", desc: "Building scalable solutions, not just screens." },
    { title: "Impact Focus", desc: "Measuring success by outcomes, not outputs." }
  ]

  return (
    <section id="about" ref={sectionRef} className="bg-[#111] text-white py-32">
      <Container>
        <div className="manifesto-content">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-8 block">
            Design Philosophy
          </span>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left Column */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                I believe great design is invisible. When it works perfectly, people don't notice the design at all - they just notice that their problem went away. Every decision I make is grounded in research, validated through testing, and refined through iteration.
              </p>
              
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                My approach combines strategic thinking with hands-on craft. Whether I'm facilitating design sprints with stakeholders, conducting user interviews, or building design systems in Figma, I stay close to both the research and the execution.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                I've spent 18+ years working across fintech, healthcare, AI, and enterprise sectors. From HSBC to AWS, Dell to EY, I've helped organisations translate complex challenges into elegant, user-centred solutions.
              </p>
              
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                Design for the edges. When you design for users with the most challenging needs, you create better experiences for everyone. Accessibility isn't an afterthought - it's the foundation.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="manifesto-values grid md:grid-cols-3 gap-8 pt-16 border-t border-gray-800">
            {values.map((value, index) => (
              <div key={index} className="manifesto-value">
                <h3 className="text-2xl font-serif font-medium mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
