'use client'

import { useEffect, useRef } from 'react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectDetailClient({ project, nextProject }) {
  const containerRef = useRef(null)
  const hasExtended = project.extended && Object.keys(project.extended).length > 0

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      })

      gsap.from('.hero-image', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out'
      })

      // Content Sections
      gsap.utils.toArray('.animate-up').forEach(elem => {
        gsap.from(elem, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
          }
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, [project])

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <Container>
          <div className="hero-content max-w-4xl mb-12 md:mb-20">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Works
            </Link>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              <span>{project.year}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-black">{project.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-[0.9] mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </Container>

        <div className="hero-image w-full h-[50vh] md:h-[80vh] relative bg-gray-100 flex items-center justify-center">
          <img 
            src={project.image} 
            alt={project.title} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </section>

      <Container>
        {/* Project Meta Grid */}
        <div className="animate-up grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16 md:py-24 border-b border-gray-100">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Client</span>
            <span className="text-base md:text-lg font-serif">{project.client || 'Confidential'}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Role</span>
            <span className="text-base md:text-lg font-serif">{project.role}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Duration</span>
            <span className="text-base md:text-lg font-serif">{hasExtended && project.extended.duration ? project.extended.duration : project.year}</span>
          </div>
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Services</span>
            <span className="text-base md:text-lg font-serif">{project.services || 'Product Design'}</span>
          </div>
          {hasExtended && project.extended.tools && (
            <div className="col-span-2">
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Tools</span>
              <span className="text-base md:text-lg font-serif">{project.extended.tools.join(', ')}</span>
            </div>
          )}
          {hasExtended && project.extended.figmaLink && (
            <div className="col-span-2">
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Design Files</span>
              <a 
                href={project.extended.figmaLink.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-lg font-serif text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                {project.extended.figmaLink.label}
              </a>
            </div>
          )}
        </div>
      </Container>

      {/* Figma Prototype Link */}
      {(project.figmaLink || project.extended?.figmaPrototype) && (
        <div className="animate-up py-8 border-b border-gray-100">
          <Container>
            <a 
              href={project.figmaLink || project.extended.figmaPrototype.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-bold text-gray-900">
                    {project.extended?.figmaPrototype?.label || 'View Design Files'}
                  </span>
                  <span className="text-xs text-gray-500">Open in Figma</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
            </a>
          </Container>
        </div>
      )}

      <Container>
        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 py-24 md:py-32">
          <div className="md:col-span-4 animate-up">
            <h3 className="text-3xl font-serif mb-6">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.challenge || "The main challenge was to create a cohesive experience that balances functionality with aesthetics. We needed to ensure that the user journey was intuitive while maintaining a high visual standard."}
            </p>
          </div>
          <div className="md:col-span-1 animate-up hidden md:block">
            <div className="w-[1px] h-full bg-gray-100 mx-auto"></div>
          </div>
          <div className="md:col-span-7 animate-up">
            <h3 className="text-3xl font-serif mb-6">The Solution</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.solution || "We approached this by first establishing a clear design system. This allowed us to iterate quickly and maintain consistency. We focused on micro-interactions to delight the user and used a clean, minimal layout to let the content breathe."}
            </p>
            
            {project.details && (
              <div className="mt-12 flex flex-wrap gap-3">
                {project.details.map((tag, i) => (
                  <span key={i} className="px-4 py-2 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Gallery */}
      {project.screens && project.screens.length > 0 && (
        <section className="py-12 bg-gray-50">
          <Container>
             <div className="grid gap-8 md:gap-16">
                {project.screens.map((screen, index) => {
                  const isVideo = screen.endsWith('.mp4');
                  const isFirstVideo = screen.includes('desktop-micro-interactions');
                  const isMobileVideo = screen.includes('account-detail-complete');
                  
                  return (
                    <div key={index} className="animate-up relative group overflow-hidden rounded-xl shadow-lg">
                      {isVideo ? (
                        <div className={`${isMobileVideo ? 'max-w-[375px] mx-auto' : ''} ${isFirstVideo ? 'h-[90%] overflow-hidden' : ''}`}>
                          <video 
                            src={screen} 
                            controls
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`w-full ${
                              isFirstVideo ? 'h-full object-cover object-top' : 'h-auto object-cover'
                            } ${
                              isMobileVideo ? 'aspect-[9/19.5]' : ''
                            }`}
                          />
                        </div>
                      ) : (
                        <img 
                          src={screen} 
                          alt={`Screen ${index + 1}`} 
                          className="w-full h-auto object-cover"
                        />
                      )}
                    </div>
                  );
                })}
             </div>
          </Container>
        </section>
      )}

      {/* Research & Discovery Section */}
      {hasExtended && project.extended.researchMethods && (
        <section className="py-24 border-t border-gray-100">
          <Container>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Research</span>
                <h3 className="text-3xl font-serif">Discovery & Research</h3>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-4">
                  {project.extended.researchMethods.map((method, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-600">
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Design Sprint Timeline */}
      {hasExtended && project.extended.designSprints && (
        <section className="py-24 bg-black text-white">
          <Container>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">Process</span>
              <h3 className="text-3xl md:text-4xl font-serif">Design Sprint Approach</h3>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Intensive, time-boxed sprints to move from ambiguity to validated prototype
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {project.extended.designSprints.map((sprint, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
                      {sprint.sprint}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold">{sprint.name}</h4>
                      <span className="text-sm text-gray-400">{sprint.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm">{sprint.focus}</p>
                  
                  <div className="mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Activities</h5>
                    <ul className="space-y-2">
                      {sprint.activities.map((activity, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Outputs</h5>
                    <div className="flex flex-wrap gap-2">
                      {sprint.outputs.map((output, k) => (
                        <span key={k} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Key Insights Section */}
      {hasExtended && project.extended.keyInsights && (
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16 animate-up">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Insights</span>
              <h3 className="text-3xl md:text-4xl font-serif">What We Learned</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.extended.keyInsights.map((insight, i) => (
                <div key={i} className="bg-white p-8 rounded-xl animate-up">
                  <h4 className="font-bold text-lg mb-3">{insight.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{insight.detail}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Design Principles Section */}
      {hasExtended && project.extended.designPrinciples && (
        <section className="py-24">
          <Container>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 animate-up">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Approach</span>
                <h3 className="text-3xl font-serif">Design Principles</h3>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-8">
                  {project.extended.designPrinciples.map((principle, i) => (
                    <div key={i} className="border-l-2 border-black pl-6 animate-up">
                      <h4 className="font-bold text-lg mb-2">{principle.title}</h4>
                      <p className="text-gray-600">{principle.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* GOV.UK Prototype Kit Section */}
      {hasExtended && project.extended.govukPrototypeKit && (
        <section className="py-24 bg-[#0b0c0c] text-white">
          <Container>
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                      <path d="M0 0h32v32H0z" fill="#0b0c0c"/>
                      <path d="M6 6h8v8H6zM18 6h8v8h-8zM6 18h8v8H6zM18 18h8v8h-8z" fill="#fff"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">GOV.UK</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">{project.extended.govukPrototypeKit.headline}</h3>
                <p className="text-gray-300 leading-relaxed">{project.extended.govukPrototypeKit.description}</p>
              </div>
              
              <div className="md:col-span-7 space-y-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h4 className="font-bold text-lg mb-4">Why Prototype-Driven Design?</h4>
                  <ul className="space-y-3">
                    {project.extended.govukPrototypeKit.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="w-5 h-5 rounded bg-[#00703c] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h4 className="font-bold text-lg mb-4">Technical Approach</h4>
                  <ul className="space-y-2">
                    {project.extended.govukPrototypeKit.technicalApproach.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Solution Details Section */}
      {hasExtended && project.extended.solutionDetails && (
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Solution</span>
              <h3 className="text-3xl md:text-4xl font-serif">{project.extended.solutionDetails.headline}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {project.extended.solutionDetails.components.map((component, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-xl font-bold pt-1">{component.name}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{component.description}</p>
                  {component.insight && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 italic">
                        <span className="font-medium text-gray-700">Design insight:</span> {component.insight}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Data Visualisation Approach */}
      {hasExtended && project.extended.dataVisualisationApproach && (
        <section className="py-24">
          <Container>
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Data Visualisation</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">{project.extended.dataVisualisationApproach.headline}</h3>
                
                {project.extended.dataVisualisationApproach.tools && (
                  <div className="mt-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.extended.dataVisualisationApproach.tools.map((tool, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-7">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h4 className="font-bold text-lg mb-6">Design Principles for Data</h4>
                  <ul className="space-y-4">
                    {project.extended.dataVisualisationApproach.principles.map((principle, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-gray-700">{principle}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Usability Testing Section */}
      {hasExtended && project.extended.usabilityTesting && (
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Validation</span>
              <h3 className="text-3xl md:text-4xl font-serif">{project.extended.usabilityTesting.headline}</h3>
            </div>
            
            <div className="space-y-8">
              {project.extended.usabilityTesting.rounds.map((round, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-xl">{round.phase}</h4>
                        <p className="text-sm text-gray-500">{round.participants} participants • {round.method}</p>
                      </div>
                    </div>
                    <div className="md:ml-auto">
                      <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                        {round.focus}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Findings & Changes</h5>
                    <ul className="grid md:grid-cols-3 gap-4">
                      {round.keyFindings.map((finding, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Before & After Section */}
      {hasExtended && project.extended.beforeAfterExample && (
        <section className="py-24 bg-black text-white">
          <Container>
            <div className="text-center mb-16 animate-up">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">Transformation</span>
              <h3 className="text-3xl md:text-4xl font-serif">Content Simplification</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-red-900/20 border border-red-800/30 p-8 rounded-xl animate-up">
                <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 block">Before</span>
                <p className="text-gray-300 leading-relaxed font-mono text-sm">{project.extended.beforeAfterExample.before}</p>
              </div>
              <div className="bg-green-900/20 border border-green-800/30 p-8 rounded-xl animate-up">
                <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4 block">After</span>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.extended.beforeAfterExample.after}</p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Results Section */}
      {hasExtended && project.extended.quantitativeResults && (
        <section className="py-24">
          <Container>
            <div className="text-center mb-16 animate-up">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Impact</span>
              <h3 className="text-3xl md:text-4xl font-serif">Measured Results</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.extended.quantitativeResults.map((result, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 rounded-xl animate-up">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">{result.after}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">{result.metric}</div>
                  {result.before !== 'Baseline' && (
                    <div className="text-xs text-green-600 font-medium">from {result.before}</div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Testimonial Section */}
      {hasExtended && project.extended.testimonial && (
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center animate-up">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-relaxed">
                "{project.extended.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-lg">{project.extended.testimonial.author}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{project.extended.testimonial.role}</div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Key Learnings Section */}
      {hasExtended && project.extended.learnings && (
        <section className="py-24 border-t border-gray-100">
          <Container>
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4 animate-up">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Reflection</span>
                <h3 className="text-3xl font-serif">What I Learned</h3>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-6">
                  {project.extended.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-4 animate-up">
                      <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                      <p className="text-gray-600 text-lg leading-relaxed pt-1">{learning}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Outcome - only show if no extended results */}
      {!hasExtended && (
        <Container className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-up">
            <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">The Outcome</span>
            <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
              "{project.outcome || 'The project was a huge success, leading to increased user engagement and positive feedback from stakeholders.'}"
            </h3>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
        </Container>
      )}

      {/* Next Project Navigation */}
      <section className="border-t border-gray-100 bg-black text-white py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">
            <div>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Next Project</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8">
                {nextProject.title}
              </h2>
              <Link 
                href={`/work/${nextProject.slug}`}
                className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
              >
                View Case Study
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden md:block opacity-50 text-9xl font-serif text-gray-800">
              {nextProject.id}
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
