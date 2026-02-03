'use client'

import PageHeader from '@/components/ui/PageHeader'
import Testimonials from '@/components/home/Testimonials'
import Container from '@/components/ui/Container'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Client Love." 
        subtitle="Testimonials"
        description="Don't just take my word for it. Here's what clients and collaborators have to say."
      />
      
      <div className="pb-24">
        <Testimonials />
      </div>

      <Container className="pb-24">
         <div className="grid min-[480px]:grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-24">
            {[
               'logoipsum-402.svg',
               'logoipsum-406.svg',
               'logoipsum-408.svg',
               'logoipsum-410.svg',
               'logoipsum-412.svg',
               'logoipsum-414.svg',
               'logoipsum-416.svg',
               'logoipsum-418.svg'
            ].map((logo, i) => (
               <div key={i} className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center p-8 hover:bg-white transition-colors border border-transparent hover:border-gray-100">
                  <img 
                     src={`/images/${logo}`} 
                     alt={`Client logo ${i + 1}`}
                     className="w-full h-full object-contain"
                  />
               </div>
            ))}
         </div>

         <div className="bg-black text-white rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
                <div>
                    <div className="text-4xl md:text-5xl font-light mb-2">98%</div>
                    <div className="text-gray-400 uppercase tracking-widest text-sm">Client Retention</div>
                </div>
                <div className="pt-12 md:pt-0">
                    <div className="text-4xl md:text-5xl font-light mb-2">50+</div>
                    <div className="text-gray-400 uppercase tracking-widest text-sm">Projects Delivered</div>
                </div>
                <div className="pt-12 md:pt-0">
                    <div className="text-4xl md:text-5xl font-light mb-2">5.0</div>
                    <div className="text-gray-400 uppercase tracking-widest text-sm">Average Rating</div>
                </div>
            </div>
         </div>
      </Container>
    </div>
  )
}
