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
