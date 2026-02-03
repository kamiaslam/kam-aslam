'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import { Menu, X, FileText, Layers, GitMerge, Image as ImageIcon, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react'
import siteConfig from '@/data/siteConfig'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownRef = useRef(null)
  const pathname = usePathname()

  const handleNavClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const navigationMenu = [
    { label: 'About', id: 'about', type: 'dropdown', items: [
      { label: 'Manifesto', id: 'manifesto', icon: FileText },
      { label: 'Skills', id: 'skills', icon: Layers },
      { label: 'Process', id: 'process', icon: GitMerge }
    ]},
    { label: 'Work', id: 'work', type: 'dropdown', items: [
      { label: 'Portfolio', id: 'work', icon: ImageIcon },
      { label: 'Testimonials', id: 'testimonials', icon: MessageSquare }
    ]},
    { label: 'Services', id: 'services', type: 'button' },
    { label: 'Resources', id: 'resources', type: 'dropdown', items: [
      { label: 'FAQ', id: 'faq', icon: HelpCircle }
    ]}
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isLight = isMenuOpen
  const textColor = isLight ? 'text-white' : 'text-black'
  const hoverColor = isLight ? 'hover:text-gray-300' : 'hover:text-gray-600'

  const isActive = (path) => pathname === path
  const isParentActive = (items) => items.some(item => pathname === `/${item.id}`)

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled && !isMenuOpen 
            ? 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-100' 
            : 'py-6 bg-transparent'
        }`}
      >
        <Container className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/"
            onClick={handleNavClick}
            className={`text-xl font-serif font-medium tracking-tight cursor-pointer transition-colors z-50 relative ${textColor}`}
          >
            {siteConfig.name}
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide" ref={dropdownRef}>
            {navigationMenu.map((menuItem) => (
              menuItem.type === 'button' ? (
                <Link
                  key={menuItem.id}
                  href={`/${menuItem.id}`}
                  onClick={handleNavClick}
                  className={`transition-colors uppercase tracking-widest text-xs relative group ${
                    isActive(`/${menuItem.id}`) ? 'text-black font-bold' : textColor
                  } ${hoverColor}`}
                >
                  {menuItem.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ${
                    isActive(`/${menuItem.id}`) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ) : (
                <div key={menuItem.id} className="relative group">
                  <button 
                    onClick={() => toggleDropdown(menuItem.id)}
                    className={`transition-colors uppercase tracking-widest text-xs flex items-center gap-1 relative ${
                      isParentActive(menuItem.items) ? 'text-black font-bold' : textColor
                    } ${hoverColor}`}
                  >
                    {menuItem.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === menuItem.id ? 'rotate-180' : ''}`} />
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ${
                      isParentActive(menuItem.items) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </button>
                  
                  {/* Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2`}>
                     <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-100 min-w-[160px] overflow-hidden">
                        {menuItem.items.map((item) => (
                          <Link
                            key={item.id}
                            href={`/${item.id}`}
                            onClick={handleNavClick}
                            className={`flex items-center gap-3 w-full text-left px-4 py-3 text-xs uppercase tracking-widest transition-colors rounded-md ${
                              isActive(`/${item.id}`) 
                                ? 'bg-black text-white' 
                                : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                            }`}
                          >
                            {item.icon && <item.icon size={16} />}
                            {item.label}
                          </Link>
                        ))}
                     </div>
                  </div>
                </div>
              )
            ))}

            {/* Contact button temporarily hidden - coming soon
            <Link 
              href="/contact"
              onClick={handleNavClick} 
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                isActive('/contact') ? 'bg-black text-white ring-2 ring-black ring-offset-2' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Let's Talk
            </Link>
            */}
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden z-50 relative ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-start pt-28 px-8 pb-20 overflow-y-auto">
          <div className="space-y-6">
            {navigationMenu.map((item) => (
               <div key={item.id} className="overflow-hidden">
                 {item.type === 'button' ? (
                    <Link
                      href={`/${item.id}`}
                      onClick={handleNavClick}
                      className={`block text-4xl font-serif hover:text-gray-400 transition-colors ${isMenuOpen ? 'translate-y-0' : 'translate-y-20'} transition-transform duration-700 delay-100 ${
                        isActive(`/${item.id}`) ? 'text-white italic' : 'text-white/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                 ) : (
                    <div className={`${isMenuOpen ? 'translate-y-0' : 'translate-y-20'} transition-transform duration-700 delay-100`}>
                      <div className="text-4xl font-serif text-white/50 mb-4">{item.label}</div>
                      <div className="pl-4 space-y-4">
                        {item.items.map(subItem => (
                          <Link
                            key={subItem.id}
                            href={`/${subItem.id}`}
                            onClick={handleNavClick}
                            className={`flex items-center gap-3 text-2xl font-serif hover:text-gray-400 transition-colors ${
                                isActive(`/${subItem.id}`) ? 'text-white italic' : 'text-white/80'
                            }`}
                          >
                            {subItem.icon && <subItem.icon size={24} />}
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                 )}
               </div>
            ))}
            {/* Contact link temporarily hidden - coming soon
            <div className="overflow-hidden pt-6">
              <Link
                href="/contact"
                onClick={handleNavClick}
                className={`block text-4xl font-serif hover:text-gray-300 transition-colors ${isMenuOpen ? 'translate-y-0' : 'translate-y-20'} transition-transform duration-700 delay-300 ${
                    isActive('/contact') ? 'text-white italic' : 'text-white/80'
                }`}
              >
                Contact Me
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>
    </>
  )
}
