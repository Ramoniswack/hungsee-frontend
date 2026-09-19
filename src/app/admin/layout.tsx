"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const ADMIN_LINKS = [
  { name: 'Overview', href: '/admin/dashboard', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> },
  { name: 'Members', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> },
  { name: 'Leads', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> },
  { name: 'Classes', href: '/admin/classes', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> },
  { name: 'Bookings', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
  { name: 'Trainers', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg> },
  { name: 'Memberships', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg> },
  { name: 'Payments', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg> },
  { name: 'Content', href: '#', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg> },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  return (
    <div className={`min-h-screen bg-[#0b1120] text-[#f4f5f7] flex flex-col md:flex-row ${isLightMode ? 'theme-light' : ''}`}>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#0f172a] border-b border-white/5 sticky top-0 z-30">
        <Link href="/">
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main, #ffffff)' }}>HUNGSEE</span>
        </Link>
        <div className="flex gap-3">
          <button onClick={() => setIsLightMode(!isLightMode)} className="w-8 h-8 flex items-center justify-center rounded bg-white/5 border border-white/10 text-gray-400">
            {isLightMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex items-center justify-center w-8 h-8 rounded bg-[#93c5fd]/10 text-[#93c5fd]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside 
        className={`${mobileMenuOpen ? 'fixed inset-y-0 left-0 z-50 translate-x-0' : 'hidden'} md:block ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 bg-[#0f172a] border-r border-white/5 flex-shrink-0 md:sticky md:top-0 md:h-screen flex flex-col justify-between`}
        style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}
      >
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className={`flex items-center justify-between p-6 pb-6 border-b border-white/5 md:border-transparent`}>
            {!isCollapsed && (
              <div className="flex flex-col">
                <Link href="/" className="block mb-0.5">
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-main, #ffffff)' }}>HUNGSEE</span>
                </Link>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd' }}>Admin</span>
              </div>
            )}
            {isCollapsed && (
              <Link href="/" className="mx-auto block text-[#93c5fd] font-bold text-xl">H</Link>
            )}
            
            {/* Collapse Toggle */}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)} 
              className="hidden md:flex p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <svg className={`w-5 h-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
            </button>
            <button className="md:hidden p-1.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <nav className="p-3 space-y-1 mt-2">
            {ADMIN_LINKS.map(link => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  title={isCollapsed ? link.name : undefined}
                  className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg transition-all ${isActive ? 'bg-[#93c5fd]/10 text-[#93c5fd]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: '0.85rem', 
                    fontWeight: isActive ? 700 : 500, 
                    letterSpacing: '0.02em',
                  }}
                >
                  <span className={`${isActive ? 'text-[#93c5fd]' : 'opacity-70'}`}>
                    {link.icon}
                  </span>
                  {!isCollapsed && <span>{link.name}</span>}
                </Link>
              )
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-white/5 flex flex-col gap-2">
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors group`}
            title={isCollapsed ? "Toggle Theme" : undefined}
          >
            <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
              {isLightMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              )}
              {!isCollapsed && (
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500 }}>
                  {isLightMode ? 'Dark Mode' : 'Light Mode'}
                </span>
              )}
            </div>
          </button>
          
          <button 
            onClick={() => {
              localStorage.removeItem('isLoggedIn');
              localStorage.removeItem('isAdmin');
              window.location.href = '/login';
            }}
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors group`}
            title={isCollapsed ? "Log Out" : undefined}
          >
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            {!isCollapsed && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500 }}>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full p-4 sm:p-6 md:p-10 overflow-x-hidden min-h-[calc(100vh-64px)] md:min-h-screen">
        {children}
      </main>
    </div>
  )
}
