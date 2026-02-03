'use client'

import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      name: 'Sprint',
      price: '$2,500',
      duration: '1 week',
      description: 'Rapid design solutions for specific challenges or prototypes.',
      features: [
        'UI/UX Design',
        'Interactive Prototype',
        '2 Revision Rounds',
        'Source Files'
      ],
      popular: false
    },
    {
      name: 'Project',
      price: '$8,500',
      duration: '4-6 weeks',
      description: 'End-to-end product design from discovery to developer handoff.',
      features: [
        'Discovery & Research',
        'Complete UI/UX Design',
        'Design System',
        'Interactive Prototypes',
        'User Testing',
        'Developer Support'
      ],
      popular: true
    },
    {
      name: 'Partner',
      price: '$12k',
      duration: 'monthly',
      description: 'Ongoing design leadership and execution for growing teams.',
      features: [
        'Dedicated Designer',
        'Unlimited Requests',
        'Priority Support',
        'Design Strategy',
        'Team Mentorship',
        'Weekly Syncs'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="bg-white py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
           <div className="md:max-w-2xl">
             <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
                Invest in Quality
             </span>
             <h2 className="text-5xl md:text-7xl font-serif font-light text-black">
               Transparent<br />
               <span className="italic text-gray-400">Pricing</span>
             </h2>
           </div>
           <p className="text-lg text-gray-600 max-w-md leading-relaxed">
             Clear, fixed pricing packages for projects of all sizes. No hidden fees or surprises.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-10 flex flex-col transition-all duration-500 border ${
                plan.popular 
                  ? 'bg-[#111] text-white border-[#111]' 
                  : 'bg-white text-black border-gray-200 hover:border-gray-400'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                   <span className="text-5xl font-serif font-light">{plan.price}</span>
                   <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/ {plan.duration}</span>
                </div>
                <p className={`text-sm leading-relaxed mt-4 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={plan.popular ? 'text-white' : 'text-black'} />
                      <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact"
                className={`w-full py-4 px-6 text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-between group ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-gray-100">
          <p className="text-gray-500">
            Have a custom request? <Link 
              href="/contact"
              className="text-black font-medium border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors ml-1"
            >
              Let's discuss your needs
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
