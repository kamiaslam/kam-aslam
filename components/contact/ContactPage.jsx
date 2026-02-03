'use client'

import { useEffect, useRef, useState } from 'react'
import { Instagram, Linkedin, Twitter, Mail, MapPin, ArrowRight, Check } from 'lucide-react'
import Container from '@/components/ui/Container'
import { gsap } from 'gsap'
import siteConfig from '@/data/siteConfig'

export default function ContactPage() {
  const containerRef = useRef(null)
  const [activeServices, setActiveServices] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const services = ["UX Strategy & Research", "Product Design", "Design Systems", "Workshop Facilitation", "Team Leadership", "Other"]

  const toggleService = (service) => {
    if (activeServices.includes(service)) {
      setActiveServices(activeServices.filter(s => s !== service))
    } else {
      setActiveServices([...activeServices, service])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send to Node.js email server
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          services: activeServices,
          message: formData.message
        })
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({ name: '', email: '', message: '' })
        setActiveServices([])
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.contact-header > *', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out'
      })

      // Form & Info Animation
      gsap.from('.contact-content', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black pt-32 pb-20">
      <Container>
        
        {/* Header */}
        <div className="contact-header mb-20 md:mb-32 max-w-4xl">
           <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 block">
              Contact
           </span>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light leading-[0.9] mb-8">
             Let's discuss your <br/>
             <span className="italic text-gray-400">project.</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
             Interested in working together? I'm always open to discussing new projects, especially those involving complex challenges, AI, fintech, or enterprise transformation. 
             I’ll buy the coffee.
           </p>
        </div>

        <div className="contact-content grid lg:grid-cols-12 gap-16 lg:gap-24">
           
           {/* Form Section */}
           <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                 {/* Success/Error Messages */}
                 {submitStatus === 'success' && (
                   <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center gap-3">
                     <Check size={20} />
                     <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
                   </div>
                 )}
                 {submitStatus === 'error' && (
                   <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
                     <span>Sorry, there was an error sending your message. Please try emailing me directly.</span>
                   </div>
                 )}

                 {/* Basic Info */}
                 <div className="grid md:grid-cols-2 gap-12">
                    <div className="group">
                       <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                          What's your name?
                       </label>
                       <input 
                         type="text"
                         name="name"
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         required
                         className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 font-serif" 
                         placeholder="John Doe" 
                       />
                    </div>
                    <div className="group">
                       <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                          Your email address
                       </label>
                       <input 
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         required
                         className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 font-serif" 
                         placeholder="john@example.com" 
                       />
                    </div>
                 </div>

                 {/* Services Selection */}
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-6">
                       What services do you need?
                    </label>
                    <div className="flex flex-wrap gap-4">
                       {services.map((service) => (
                         <button
                           key={service}
                           type="button"
                           onClick={() => toggleService(service)}
                           className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${
                             activeServices.includes(service)
                               ? 'bg-black text-white border-black'
                               : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
                           }`}
                         >
                           {service}
                         </button>
                       ))}
                    </div>
                 </div>

                 {/* Message */}
                 <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 group-focus-within:text-black transition-colors">
                       Tell me about your project
                    </label>
                    <textarea 
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-xl md:text-2xl focus:outline-none focus:border-black transition-colors resize-none placeholder:text-gray-300 font-serif" 
                      placeholder="I need a redesign for..."
                    ></textarea>
                 </div>

                 {/* Submit Button */}
                 <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
                 </button>
              </form>
           </div>

           {/* Contact Details Sidebar */}
           <div className="lg:col-span-4 lg:pl-12 space-y-16">
              
              {/* Contact Info */}
              <div>
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                   Contact Details
                 </h3>
                 <div className="space-y-6">
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-lg hover:text-gray-600 transition-colors group">
                       <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                          <Mail size={18} />
                       </div>
                       <span>{siteConfig.email}</span>
                    </a>
                    <div className="flex items-center gap-4 text-lg text-gray-600 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                         <MapPin size={18} />
                      </div>
                      <span>{siteConfig.location}</span>
                   </div>
                 </div>
              </div>

              {/* Socials */}
              <div>
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
                   Socials
                 </h3>
                 <div className="flex gap-4">
                    <a 
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                 </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                 <h4 className="font-serif text-xl mb-4">Have questions?</h4>
                 <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                   Check out the FAQ section to find answers to common questions about my process and pricing.
                 </p>
                 <a href="/#faq" className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                   Read FAQ
                 </a>
              </div>

           </div>

        </div>
      </Container>
    </div>
  )
}
