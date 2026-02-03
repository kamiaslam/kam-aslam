'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { faqs } from '@/data/faq'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0)

  return (
    <section id="faq" className="bg-[#f5f5f5] py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 block">
              Questions
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-black">
              Frequently <span className="italic text-gray-400">Asked</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-none border border-transparent hover:border-gray-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full p-8 text-left flex items-center justify-between group"
                >
                  <h3 className="text-xl font-medium pr-4 font-serif-display">{faq.question}</h3>
                  {openFAQ === index ? (
                    <Minus className="text-black flex-shrink-0 transition-transform duration-300" size={20} />
                  ) : (
                    <Plus className="text-gray-400 group-hover:text-black flex-shrink-0 transition-all duration-300" size={20} />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 pt-0 text-gray-500 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6 font-light">Still have questions?</p>
            <Link 
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
