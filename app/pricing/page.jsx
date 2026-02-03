'use client'

import PageHeader from '@/components/ui/PageHeader'
import Pricing from '@/components/home/Pricing'
import Container from '@/components/ui/Container'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Investment." 
        subtitle="Pricing"
        description="Transparent pricing packages designed to deliver maximum value for your business."
      />
      
      <div className="pb-24">
        <Pricing />
      </div>

      <Container className="pb-24">
         <div className="mb-24">
            <h3 className="text-3xl font-serif mb-12 text-center">Common Add-ons</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Logo Design", price: "$2,000+" },
                    { name: "Copywriting", price: "$1,500+" },
                    { name: "Interaction Design", price: "$1,000+" }
                ].map((addon, i) => (
                    <div key={i} className="flex justify-between items-center p-6 border-b border-gray-200">
                        <span className="font-medium text-lg">{addon.name}</span>
                        <span className="text-gray-500">{addon.price}</span>
                    </div>
                ))}
            </div>
         </div>

         <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-serif mb-8">All packages include</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
               {[
                  "Dedicated project manager",
                  "Weekly progress updates",
                  "Source files ownership",
                  "Post-launch support (30 days)",
                  "Accessibility compliance check",
                  "SEO best practices"
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                     <span className="w-2 h-2 bg-black rounded-full"></span>
                     <span className="text-gray-700">{item}</span>
                  </div>
               ))}
            </div>
         </div>
      </Container>
    </div>
  )
}
