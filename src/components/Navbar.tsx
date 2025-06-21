// src/components/Navbar.tsx
'use client'

import ProgressBarLink from './ProgressBarLink'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import LocaleSwitcher from './LocaleSwitcher'
import { Locale } from '@/i18n.config'

// Define the shape of the navigation props
interface NavigationProps {
  navigation: {
    home: string
    about: string
    projects: string
    contact: string
  }
  lang: Locale
}

export default function Navbar({ navigation, lang }: Readonly<NavigationProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    // The home path is just `/[lang]`, so it has a length of 3
    if (path === `/${lang}` && pathname.length === 3) return true
    // For other paths, check if the pathname starts with the given path
    if (path !== `/${lang}`) return pathname.startsWith(path)
    return false
  }

  const navLinks = [
    { href: `/${lang}`, label: navigation.home },
    { href: `/${lang}/about`, label: navigation.about },
    { href: `/${lang}/projects`, label: navigation.projects },
    { href: `/${lang}/contact`, label: navigation.contact },
  ]

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <ProgressBarLink href={`/${lang}`} className="text-2xl font-bold text-white uppercase tracking-wider">
          <p>Camilo Cruz</p>
        </ProgressBarLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8">
          <ul className="flex gap-x-8 md:gap-x-2 lg:gap-x-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <ProgressBarLink
                  href={link.href}
                  className={`
                    relative px-2 py-1 text-white/70 hover:text-white transition-colors duration-300 whitespace-nowrap
                    
                    /* Top-left corner bracket (::before) */
                    before:content-[''] before:absolute before:top-0 before:left-0
                    before:w-2 before:h-2 before:border-l-2 before:border-t-2
                    before:opacity-0 before:transition-all before:duration-300
                    md:hover:before:w-2 md:hover:before:h-2 md:hover:before:opacity-0
                    lg:hover:before:w-full lg:hover:before:h-full lg:hover:before:opacity-100

                    /* Bottom-right corner bracket (::after) */
                    after:content-[''] after:absolute after:bottom-0 after:right-0
                    after:w-2 after:h-2 after:border-r-2 after:border-b-2
                    after:opacity-0 after:transition-all after:duration-300
                    md:hover:after:w-2 md:hover:after:h-2 md:hover:after:opacity-0
                    lg:hover:after:w-full lg:hover:after:h-full lg:hover:after:opacity-100

                    /* Style for the active link */
                    ${isActive(link.href)
                      ? 'text-white font-bold before:w-full before:h-full before:opacity-100 after:w-full after:h-full after:opacity-100 md:before:opacity-0 md:after:opacity-0 lg:before:opacity-100 lg:after:opacity-100'
                      : ''
                    }
                  `}
                >
                  {link.label}
                </ProgressBarLink>
              </li>
            ))}
          </ul>
          <LocaleSwitcher />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80">
          <ul className="flex flex-col items-center gap-y-4 py-4">
             {navLinks.map(link => (
              <li key={link.href}>
                <ProgressBarLink
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={`text-white/70 hover:text-white transition-colors text-lg ${isActive(link.href) ? 'text-white font-bold' : ''}`}
                >
                  {link.label}
                </ProgressBarLink>
              </li>
            ))}
            <li className='pt-4'>
                <LocaleSwitcher />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}