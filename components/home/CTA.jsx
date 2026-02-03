'use client'

import { ArrowRight, Mail, Linkedin } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import siteConfig from '@/data/siteConfig'

export default function CTA() {
  return (
    <section id="cta" className="bg-[#111] text-white pb-8 pt-24 md:pt-40 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-5xl md:text-8xl font-light mb-10 leading-tight">
            Have a project
            <br />
            <span className="font-serif italic">in mind?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-6 max-w-xl mx-auto font-light leading-relaxed">
            Let's create something exceptional together.
          </p>
          
          <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always interested in hearing about new challenges, especially those involving complex problems, AI, fintech, or enterprise transformation.
          </p>

          {/* CTA Button temporarily hidden - coming soon
          <div className="mb-20">
            <Link 
              href="/contact"
              className="group bg-white hover:bg-gray-200 text-black px-10 py-5 rounded-full font-medium text-lg transition-all duration-500 flex items-center gap-4 mx-auto w-fit"
            >
              <Mail size={20} />
              Start a Conversation
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>
          */}

          {/* Social Media Links */}
          <div className="mb-20">
            <p className="text-xs text-gray-500 mb-8 uppercase tracking-[0.2em]">Connect</p>
            <div className="flex justify-center items-center gap-6">
              <a 
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border border-white/10 hover:border-white rounded-full flex items-center justify-center transition-all duration-500 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Simple stats */}
          <div className="flex justify-center items-center gap-8 ss:gap-16 md:gap-24 border-t border-white/10 pt-12">
            <div className="text-center">
              <div className="text-3xl font-serif text-white mb-2">{siteConfig.yearsExperience}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-serif text-white mb-2">{siteConfig.projectsCompleted}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-serif text-white mb-2">5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Countries</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
