"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Classes', href: '/classes' },
  { name: 'Memberships', href: '/#memberships' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [])
  
  const currentNavLinks = [
    ...NAV_LINKS,
    ...(isLoggedIn ? [] : [{ name: 'Login', href: '/login' }])
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        background: scrolled || menuOpen ? 'rgba(15, 23, 42, 0.95)' : 'transparent', 
        backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none', 
        borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        padding: scrolled ? '0.5rem 0' : '1.5rem 0'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between relative">
        <div className="hidden lg:flex items-center flex-1">
          <ul className="flex items-center gap-10">
            {currentNavLinks.slice(0, 2).map(l => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex flex-col items-center leading-none z-50 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.2rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff' }}>HUNGSEE</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#93c5fd', textTransform: 'uppercase', marginTop: '0.2rem' }}>Fitness Arena</span>
        </Link>
        
        <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
          <ul className="flex items-center gap-10">
            {currentNavLinks.slice(2).map(l => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbd5e1', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          {!isLoggedIn ? (
            <Link
              href="/classes"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0f172a', background: '#ffffff', padding: '0.8rem 1.8rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
              className="hover:bg-[#93c5fd] rounded"
            >
              Join Now
            </Link>
          ) : (
            <Link
              href="/member/dashboard"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0f172a', background: '#93c5fd', padding: '0.8rem 1.8rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
              className="hover:bg-white rounded"
            >
              Member Portal
            </Link>
          )}
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 transition-all bg-white" style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
          <span className="block w-6 h-0.5 transition-all bg-white" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 transition-all bg-white" style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#0f172a] pt-24 pb-12 px-8 flex flex-col gap-6 border-b border-white/10 z-40">
          {currentNavLinks.map(l => (
            <Link key={l.name} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff' }}>
              {l.name}
            </Link>
          ))}
          {!isLoggedIn && (
            <Link
              href="/classes"
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0f172a', background: '#ffffff', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}
            >
              Join Now
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
