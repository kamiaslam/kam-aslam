'use client'

import PageHeader from '@/components/ui/PageHeader'
import Skills from '@/components/home/Skills'
import Container from '@/components/ui/Container'
import { toolsOfTrade, softSkills, learningAreas } from '@/data/skills'

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHeader 
        title="Capabilities." 
        subtitle="Skills & Expertise"
        description="18+ years of skills honed across fintech, healthcare, AI, and enterprise sectors."
      />
      
      <div className="pb-24">
        <Skills />
      </div>

      <Container className="pb-24">
        <div className="grid md:grid-cols-2 gap-16">
           <div className="bg-gray-50 p-12 rounded-3xl">
              <h3 className="text-3xl font-serif mb-6">Tools of Trade</h3>
              <ul className="space-y-4 text-gray-600">
                 {toolsOfTrade.map((tool, i) => (
                   <li key={i} className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      {tool}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-black text-white p-12 rounded-3xl">
              <h3 className="text-3xl font-serif mb-6">Soft Skills</h3>
              <ul className="space-y-4 text-gray-300">
                 {softSkills.map((skill, i) => (
                   <li key={i} className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {skill}
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        <div className="mt-24 text-center">
            <h3 className="text-3xl font-serif mb-8">Areas of Focus</h3>
            <div className="flex flex-wrap justify-center gap-4">
                {learningAreas.map((tag, i) => (
                    <span key={i} className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:border-black hover:text-black transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </Container>
    </div>
  )
}
