'use client'

import PageHeader from '@/components/ui/PageHeader'
import Services from '@/components/home/Services'
import Container from '@/components/ui/Container'
import { Check } from 'lucide-react'
import { servicesExpanded } from '@/data/services'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Services." 
        subtitle="What I Offer"
        description="End-to-end design capabilities to help you solve complex problems and deliver exceptional user experiences."
      />
      
      <div className="pb-24">
        <Services />
      </div>

      <Container className="pb-24">
         <div className="space-y-16">
            {servicesExpanded.map((service, index) => (
              <div key={index} className="border-t border-gray-200 pt-12">
                <h3 className="text-3xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Typical Deliverables</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
         </div>

         <div className="mt-24 grid md:grid-cols-2 gap-16">
            <div>
               <h3 className="text-4xl font-serif mb-8">What You Get</h3>
               <div className="space-y-6">
                  {[
                     "18+ years of senior design experience",
                     "Research-driven, validated solutions",
                     "Scalable design systems that grow with you",
                     "Close collaboration with your team",
                     "Ongoing support and iteration"
                  ].map((item, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 text-green-600">
                           <Check size={14} />
                        </div>
                        <p className="text-xl text-gray-700">{item}</p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-3xl">
               <h3 className="text-3xl font-serif mb-6">Not Sure What You Need?</h3>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  Every project is unique. Let's hop on a discovery call to discuss your goals and figure out the best way to move forward. No strings attached.
               </p>
               <a 
                  href="/contact" 
                  className="inline-block border-b border-black pb-1 text-lg font-medium hover:text-gray-600 hover:border-gray-600 transition-colors"
               >
                  Get in Touch
               </a>
            </div>
         </div>

         <div className="mt-24">
            <h3 className="text-3xl font-serif mb-12 text-center">Industries I've Worked In</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Fintech", "Healthcare", "AI & ML", "E-commerce", "Government", "Enterprise", "Banking", "Consulting"].map((industry, i) => (
                    <div key={i} className="p-6 border border-gray-100 rounded-xl text-center hover:border-black transition-colors cursor-default">
                        <span className="text-lg text-gray-600">{industry}</span>
                    </div>
                ))}
            </div>
         </div>
      </Container>
    </div>
  )
}
