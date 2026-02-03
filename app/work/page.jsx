'use client'

import PageHeader from '@/components/ui/PageHeader'
import WorkList from '@/components/home/WorkList'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Selected Work." 
        subtitle="Portfolio"
        description="Case studies from 18+ years of designing products for global brands across fintech, healthcare, AI, and enterprise sectors."
      />
      
      <div className="pb-24">
        <WorkList hideHeader={true} />
      </div>

      <Container className="pb-24">
         <div className="grid md:grid-cols-3 gap-8 mb-24">
             {[
                 { title: "User-Centric", desc: "Every design decision starts and ends with the user's needs." },
                 { title: "Data-Driven", desc: "We use analytics and insights to validate our assumptions." },
                 { title: "Scalable", desc: "Building systems that grow with your business, not against it." }
             ].map((item, i) => (
                 <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                     <h4 className="text-xl font-serif mb-4">{item.title}</h4>
                     <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                 </div>
             ))}
         </div>

         <div className="bg-black text-white rounded-3xl p-8 min-[480px]:p-16 text-center">
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Want to see more?</h3>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
               I have a private archive of additional case studies available upon request.
            </p>
            <Link 
               href="/contact"
               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
               Request Access
               <ArrowUpRight size={20} />
            </Link>
         </div>
      </Container>
    </div>
  )
}
