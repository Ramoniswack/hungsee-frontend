"use client"
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { CLASSES, PROGRAMS } from '@/lib/mockData'

const DATES = [
  { day: 'MON', date: '21', active: true },
  { day: 'TUE', date: '22', active: false },
  { day: 'WED', date: '23', active: false },
  { day: 'THU', date: '24', active: false },
  { day: 'FRI', date: '25', active: false },
]
const CATEGORIES = ['All', 'Strength', 'Cardio', 'Flexibility', 'Combat']

function ClassesContent() {
  const searchParams = useSearchParams()
  const isLoggedIn = searchParams.get('loggedIn') === 'true'
  
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeDate, setActiveDate] = useState('21')

  const filteredClasses = CLASSES.filter(cls => {
    // Check Date match (assuming cls.date is like 'Mon, Sep 21' and activeDate is '21')
    const matchesDate = cls.date.includes(activeDate)
    
    // Check Category match
    const program = PROGRAMS.find(p => p.id === cls.programId)
    const matchesCategory = activeFilter === 'All' || program?.category === activeFilter
    
    return matchesDate && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0b1120] text-[#f4f5f7]">
      <Navbar />
      
      {/* HEADER */}
      <section className="pt-40 pb-16 px-8 bg-[#0f172a] border-b border-white/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="mb-6 flex flex-col items-center gap-4">
             <div className="w-8 h-1 bg-[#93c5fd]"></div>
             <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.25em', color: '#93c5fd', textTransform: 'uppercase' }}>Train On Your Terms</span>
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', marginBottom: '1.5rem', color: '#ffffff' }}>
            Class Schedule
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '600px', mx: 'auto' }}>
            Find your next session and reserve your place.
          </p>
        </div>
      </section>

      {/* FILTER & SCHEDULE */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
            {/* Dates */}
            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0">
              {DATES.map(d => (
                <button
                  key={d.date}
                  onClick={() => setActiveDate(d.date)}
                  className="flex flex-col items-center justify-center min-w-[70px] h-[80px] border transition-all"
                  style={{
                    borderColor: activeDate === d.date ? '#93c5fd' : 'rgba(255,255,255,0.1)',
                    background: activeDate === d.date ? 'rgba(147, 197, 253, 0.05)' : 'transparent',
                  }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: activeDate === d.date ? '#93c5fd' : '#64748b' }}>{d.day}</span>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: activeDate === d.date ? '#ffffff' : '#cbd5e1', lineHeight: 1.2 }}>{d.date}</span>
                </button>
              ))}
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '0.6rem 1.2rem',
                    border: '1px solid ' + (activeFilter === cat ? '#ffffff' : 'rgba(255,255,255,0.1)'),
                    background: activeFilter === cat ? '#ffffff' : 'transparent',
                    color: activeFilter === cat ? '#0f172a' : '#cbd5e1',
                    transition: 'all 0.2s'
                  }}
                  className="hover:border-white hover:text-white"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-4">
            {filteredClasses.length > 0 ? filteredClasses.map((cls, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-8 items-center border border-white/5 bg-[#0f172a] hover:border-white/20 transition-all rounded-xl">
              <div className="md:col-span-4 flex flex-col gap-2">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', color: '#93c5fd' }}>{cls.time}</span>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.1 }}>{cls.name}</h3>
              </div>
              
              <div className="md:col-span-4">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#cbd5e1' }}>with {cls.trainerId.split('-').map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' ')}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{cls.duration}</p>
              </div>
              
              <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-start md:justify-end gap-4 md:gap-6 mt-4 md:mt-0">
                  <div className="w-full md:w-auto">
                    <span 
                      className="inline-flex justify-center items-center w-full md:w-auto px-4 py-3 md:py-1.5 rounded text-xs font-bold tracking-widest uppercase"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        background: cls.slots === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(147,197,253,0.1)',
                        color: cls.slots === 0 ? '#64748b' : '#93c5fd',
                        border: '1px solid ' + (cls.slots === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(147,197,253,0.3)')
                      }}
                    >
                      {cls.slots === 0 ? 'Full' : cls.slots + ' Slots Left'}
                    </span>
                  </div>
                  {cls.slots > 0 ? (
                    <Link href={`/book/${cls.id}${isLoggedIn ? '?loggedIn=true' : ''}`} className="w-full md:w-auto">
                      <button 
                        className="relative w-full overflow-hidden rounded group px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all bg-[#0b1120] border border-[#93c5fd]/30 hover:border-[#93c5fd] shadow-[0_0_15px_rgba(147,197,253,0.1)] hover:shadow-[0_0_25px_rgba(147,197,253,0.2)] flex items-center justify-center gap-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="relative z-10">Book Class</span>
                        <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/50 to-[#2563eb]/20 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                      </button>
                    </Link>
                  ) : (
                    <button 
                      disabled
                      className="relative w-full md:w-auto overflow-hidden rounded px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#64748b] bg-transparent border border-white/10 cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Waitlist Full
                    </button>
                  )}
                </div>
              </div>
            )) : (
              <div className="p-16 text-center border border-white/5 bg-[#0f172a]">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#64748b' }}>No classes scheduled for this category on the selected date.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ClassesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b1120]"></div>}>
      <ClassesContent />
    </Suspense>
  )
}
