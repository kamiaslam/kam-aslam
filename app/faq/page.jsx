'use client'

import PageHeader from '@/components/ui/PageHeader'
import FAQ from '@/components/home/FAQ'
import Container from '@/components/ui/Container'
import Link from 'next/link'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Common Questions." 
        subtitle="FAQ"
        description="Answers to the most frequent questions about my process, pricing, and availability."
      />
      
      <div className="pb-24">
        <FAQ />
      </div>

      <Container className="pb-24">
         <div className="mb-24 grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Response Time</h4>
                <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days (Mon-Fri).</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Revisions</h4>
                <p className="text-gray-600">All projects include 2 rounds of revisions to ensure the final output meets your expectations.</p>
            </div>
         </div>

         <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-serif mb-4">Still have questions?</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
               Can't find the answer you're looking for? Feel free to reach out directly.
            </p>
            <Link 
               href="/contact" 
               className="inline-block px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
               Contact Support
            </Link>
         </div>
      </Container>
    </div>
  )
}
