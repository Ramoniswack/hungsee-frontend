"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const MEMBER_LINKS = [
  { name: 'Overview', href: '/member/dashboard' },
  { name: 'Classes', href: '/member/classes' },
  { name: 'My Bookings', href: '/member/dashboard' },
  { name: 'Membership', href: '/member/dashboard' },
  { name: 'Payments', href: '/member/dashboard' },
  { name: 'Profile', href: '/member/dashboard' }
]

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLightMode, setIsLightMode] = useState(false)

  const isActive = (href: string, isHome: boolean = false) => {
    if (isHome) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <div className={`min-h-screen bg-[#0b1120] text-[#f4f5f7] ${isLightMode ? 'theme-light' : ''}`}>
      {/* Top Nav */}
      <nav className="border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/member/dashboard" className="flex items-center gap-3">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-main, #ffffff)' }}>HUNGSEE</span>
            <span style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#93c5fd' }}>Member Portal</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {MEMBER_LINKS.map(link => {
              const active = isActive(link.href, link.name === 'Overview')
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: active && (link.name === 'Overview' || link.name === 'Classes') ? 'var(--text-main, #ffffff)' : 'var(--text-muted-light, #94a3b8)' }}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            })}
            
            <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }}></div>
            
            <button 
              onClick={() => setIsLightMode(!isLightMode)}
              className="text-[#94a3b8] hover:text-[#93c5fd] transition-colors"
              title="Toggle Theme"
            >
              {isLightMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              )}
            </button>
            
            <button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('isAdmin');
                window.location.href = '/login';
              }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}
              className="text-[#94a3b8] hover:text-red-400 transition-colors flex items-center gap-2 group"
            >
              <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Log Out
            </button>
          </div>

          {/* Mobile Profile & Logout (Top Right) */}
          <div className="lg:hidden flex items-center gap-6">
            <button 
              onClick={() => setIsLightMode(!isLightMode)}
              className="text-[#94a3b8] hover:text-[#93c5fd] transition-colors"
            >
              {isLightMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              )}
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('isAdmin');
                window.location.href = '/login';
              }}
              className="text-[#94a3b8] hover:text-red-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0b1120]/95 backdrop-blur-md border-t border-white/5 z-50">
        <div className="flex justify-around items-center h-16 px-2" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <Link href="/member/dashboard" className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${isActive('/member/dashboard', true) ? 'text-[#93c5fd]' : 'text-[#64748b] hover:text-[#cbd5e1]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Home</span>
          </Link>
          <Link href="/member/classes" className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${isActive('/member/classes') ? 'text-[#93c5fd]' : 'text-[#64748b] hover:text-[#cbd5e1]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Classes</span>
          </Link>
          <Link href="/member/bookings" className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${isActive('/member/bookings') ? 'text-[#93c5fd]' : 'text-[#64748b] hover:text-[#cbd5e1]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Bookings</span>
          </Link>
          <Link href="/member/profile" className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${isActive('/member/profile') ? 'text-[#93c5fd]' : 'text-[#64748b] hover:text-[#cbd5e1]'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Profile</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 py-12 pb-24 lg:pb-12">
        {children}
      </main>
    </div>
  )
}
