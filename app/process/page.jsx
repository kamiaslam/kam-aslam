'use client'

import PageHeader from '@/components/ui/PageHeader'
import Process from '@/components/home/Process'
import Container from '@/components/ui/Container'
import { collaborationTools } from '@/data/process'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="How I Work." 
        subtitle="My Process"
        description="A proven methodology refined over 18+ years that ensures consistent, high-quality outcomes."
      />
      
      <div className="pb-24">
        <Process />
      </div>

      <Container className="pb-24">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h3 className="text-4xl font-serif mb-6">Why Process Matters</h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Creativity thrives within constraints. My process provides the structure needed to explore ideas freely while ensuring alignment with business goals and user needs. It's not about rigid rules; it's about a reliable framework for innovation.
               </p>
               <ul className="space-y-4">
                  {[
                     "Reduces risk and ensures alignment",
                     "Focuses on validated user needs",
                     "Enables rapid iteration and learning",
                     "Delivers measurable business results"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg font-medium">
                        <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">{i + 1}</span>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative">
               <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
                  alt="Process meeting" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
         </div>

         <div className="mt-24 border-t border-gray-100 pt-24">
            <h3 className="text-3xl font-serif mb-12 text-center">Collaboration Stack</h3>
            <div className="grid min-[480px]:grid-cols-2 md:grid-cols-4 gap-8">
                {collaborationTools.map((tool, i) => (
                    <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                        <div className="font-bold text-lg mb-1">{tool.name}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wider">{tool.role}</div>
                    </div>
                ))}
            </div>
         </div>
      </Container>
    </div>
  )
}
