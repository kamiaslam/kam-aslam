'use client'

import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="About Me." 
        subtitle="The Designer"
        description="Experience Designer with 18+ years delivering impactful UX, service, and product design for leading brands."
      />
      
      <Container className="pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-600">
            <p>
              I'm Kam Aslam, an Experience Designer with over 18 years of experience delivering impactful UX, service, and product design for leading brands across fintech, healthcare, AI, and enterprise sectors in the UK, Europe, and the US.
            </p>
            <p>
              Expert in Design Thinking and Lean UX, I specialise in creating intuitive, data-driven solutions and scalable design systems using Figma and Sketch. I'm recognised for building and leading high-performing design teams - onshore and offshore - while driving agile best practices and design sprints.
            </p>
          </div>
          <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-gray-600">
            <p>
              My portfolio includes transformative work for AWS, Dell, Philip Morris International, HSBC, Barclays, and EY, consistently translating complex challenges into elegant, user-centred experiences that drive engagement and business results.
            </p>
            <p>
              I believe great design is invisible. When it works perfectly, people don't notice the design - they just notice that their problem went away. That's what I strive for in every project.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Kam Aslam - Experience Designer" 
            className="w-full h-[600px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12">
            {[
                { title: "Research First", desc: "Every design decision grounded in real user insights." },
                { title: "Systems Thinking", desc: "Building scalable solutions that grow with your business." },
                { title: "Impact Focus", desc: "Measuring success by outcomes that matter." }
            ].map((value, i) => (
                <div key={i} className="border-t border-gray-200 pt-8">
                    <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                    <p className="text-gray-500">{value.desc}</p>
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}
