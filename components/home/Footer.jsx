import { ArrowUpRight, Mail, MapPin, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import siteConfig from '@/data/siteConfig'

export default function Footer() {

  return (
    <footer className="bg-white text-black py-20 relative overflow-hidden">
      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="z-10 order-2 lg:order-1">
          <h2 className="text-6xl md:text-8xl mb-8 font-serif font-light leading-[0.9]">
            Let's <br />
            <span className="italic text-gray-400">connect.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
            Experience Designer specialising in fintech, healthcare, and AI. I'm always interested in hearing about new projects and opportunities.
          </p>

          {/* Contact link temporarily hidden - coming soon
          <Link 
            href="/contact" 
            className="group inline-flex items-center gap-2 text-xl font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors mb-12"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          */}

          <div className="space-y-6 mb-12">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Get in Touch</h3>
            
            <div className="space-y-4">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span>{siteConfig.email}</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Connect</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
             <p>© {new Date().getFullYear()} Kam Aslam. All rights reserved.</p>
             <p>Designed with purpose.</p>
          </div>
        </div>

        <div className="relative h-[600px] w-full grayscale hover:grayscale-0 transition-all duration-1000 ease-out order-1 lg:order-2">
          <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
             <img 
               src="/images/kam-portrait.png" 
               alt="Kam Aslam Portrait" 
               className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
             />
          </div>
        </div>
      </Container>
    </footer>
  )
}
