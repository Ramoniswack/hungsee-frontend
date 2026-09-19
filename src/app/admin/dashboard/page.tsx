"use client"
import { useState, useRef, useEffect } from 'react'
import { CLASSES, TRAINERS } from '@/lib/mockData'

const DATE_FILTERS = [
  'Today', 'Yesterday', 'This Week', 'This Month', 'Last Month', 
  '3 Months', '6 Months', 'Last Year', 'Last 12 Months', 'Lifetime', 'Custom Range...'
]

export default function AdminDashboard() {
  const [activeDate, setActiveDate] = useState('Today')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])
  
  // Calculate mock multipliers based on date filter to make stats change
  const getMultiplier = (val: string) => {
    switch(val) {
      case 'Today': return 1;
      case 'Yesterday': return 0.8;
      case 'This Week': return 4.5;
      case 'This Month': return 18.2;
      case 'Last Month': return 17.5;
      case '3 Months': return 52.1;
      case '6 Months': return 105.4;
      case 'Last Year': return 210.8;
      case 'Last 12 Months': return 220.3;
      case 'Lifetime': return 580.6;
      default: return 12.5; // Custom
    }
  }
  const m = getMultiplier(activeDate)

  return (
    <div className="space-y-12 max-w-[1400px] mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', color: '#93c5fd', textTransform: 'uppercase' }}>Good Morning</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase', lineHeight: 1.2, marginTop: '0.5rem', wordBreak: 'break-word' }}>
            Arena Command Center
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between min-w-[180px] bg-[#0f172a] border border-white/10 hover:bg-white/5 text-white text-xs font-bold tracking-widest uppercase py-3 px-4 transition-colors"
              style={{ color: 'var(--text-main, #ffffff)', backgroundColor: 'var(--bg-surface, #0f172a)' }}
            >
              <span>{activeDate}</span>
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[220px] bg-[#0b1120] border border-white/10 shadow-xl z-50 overflow-hidden" style={{ backgroundColor: 'var(--bg-base, #0b1120)' }}>
                <div className="max-h-[300px] overflow-y-auto">
                  {DATE_FILTERS.map((filter, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (filter === 'Custom Range...') {
                          setShowCalendar(true);
                          setIsDropdownOpen(false);
                        } else {
                          setActiveDate(filter);
                          setIsDropdownOpen(false);
                        }
                      }}
                      className={`w-full text-left px-4 py-3 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-[#93c5fd]/10 hover:text-[#93c5fd]
                        ${activeDate === filter ? 'bg-[#93c5fd]/10 text-[#93c5fd] border-l-2 border-[#93c5fd]' : 'text-gray-400 border-l-2 border-transparent'}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button style={{ color: 'var(--text-main, #ffffff)' }} className="bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold tracking-widest uppercase py-3 px-6 transition-colors">
            Export Report
          </button>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0f172a] border border-white/5 p-6 border-t-2 border-t-[#93c5fd] relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main, #ffffff)', lineHeight: 1 }}>{Math.floor(128 * (activeDate === 'Today' || activeDate === 'Yesterday' ? 1 : m/4))}</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)', marginTop: '0.5rem' }}>Active Members</p>
          <span className="absolute top-6 right-6 text-green-400 text-xs font-bold">+12%</span>
        </div>
        <div className="bg-[#0f172a] border border-white/5 p-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main, #ffffff)', lineHeight: 1 }}>{Math.floor(24 * m)}</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)', marginTop: '0.5rem' }}>Bookings</p>
          <span className="absolute top-6 right-6 text-green-400 text-xs font-bold">+5%</span>
        </div>
        <div className="bg-[#0f172a] border border-white/5 p-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main, #ffffff)', lineHeight: 1 }}>{Math.floor(92 - (m%10))}%</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)', marginTop: '0.5rem' }}>Class Utilization</p>
          <span className="absolute top-6 right-6 text-red-400 text-xs font-bold">-2%</span>
        </div>
        <div className="bg-[#0f172a] border border-white/5 p-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main, #ffffff)', lineHeight: 1 }}>NPR {Math.floor(45 * m).toLocaleString()}K</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)', marginTop: '0.5rem' }}>Revenue</p>
          <span className="absolute top-6 right-6 text-green-400 text-xs font-bold">+18%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Main Column - Operations */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Revenue & Attendance Graph Placeholder */}
          <div className="bg-[#0f172a] border border-white/5 p-8" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
            <div className="flex justify-between items-center mb-6">
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>Attendance vs Capacity</h2>
              <div className="flex gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className="text-[#93c5fd]">This Week</span>
                <span>/</span>
                <span className="hover:text-white cursor-pointer transition-colors">Last Week</span>
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-between gap-2 border-b border-l border-white/10 pb-4 pl-4 relative">
              {/* Fake Graph Bars */}
              {[40, 60, 80, 50, 90, 70, 85].map((h, i) => (
                <div key={i} className="w-full relative group cursor-pointer h-full flex items-end">
                  <div className="w-full bg-[#1e3a8a]/40 group-hover:bg-[#1e3a8a] transition-all relative z-10" style={{ height: `${h}%` }}></div>
                  <div className="absolute bottom-0 left-0 w-full bg-white/5 h-[80%] z-0"></div>
                </div>
              ))}
              <div className="absolute bottom-[-24px] left-4 right-0 flex justify-between text-[10px] text-gray-500 font-bold tracking-widest">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
            </div>
          </div>

          {/* Today's Classes */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>Live Schedule</h2>
              <button className="text-xs font-bold text-[#93c5fd] hover:text-white transition-colors tracking-widest uppercase">View All</button>
            </div>
            <div className="bg-[#0f172a] border border-white/5 overflow-hidden" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
              <div className="overflow-x-auto no-scrollbar pb-4 md:pb-0">
                <table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
                  <thead>
                    <tr className="border-b border-white/5 bg-[#0b1120]" style={{ backgroundColor: 'var(--bg-base, #0b1120)' }}>
                      <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Time</th>
                      <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Class</th>
                      <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Trainer</th>
                      <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Capacity</th>
                      <th className="p-4 text-right" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CLASSES.slice(0, 4).map((cls, i) => {
                      const trainer = TRAINERS.find(t => t.id === cls.trainerId)
                      const fillPercentage = ((cls.capacity - cls.slots) / cls.capacity) * 100
                      return (
                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                          <td className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted-light, #cbd5e1)' }}>{cls.time}</td>
                          <td className="p-4">
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>{cls.name}</p>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img src={trainer?.image} alt={trainer?.name} className="w-full h-full object-cover" /></div>
                              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted-light, #cbd5e1)' }}>{trainer?.name}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3 w-32">
                              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-muted-light, #cbd5e1)' }}>{cls.capacity - cls.slots}/{cls.capacity}</span>
                              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-blue-400" style={{ width: `${fillPercentage}%` }}></div></div>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            {cls.slots === 0 ? (
                              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest bg-red-400/10 px-2 py-1 rounded">Waitlist</span>
                            ) : fillPercentage > 80 ? (
                              <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-2 py-1 rounded">Filling Fast</span>
                            ) : (
                              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-2 py-1 rounded">Open</span>
                            )}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Side Column - Live Feed & Action */}
        <div className="space-y-8">
          <div className="bg-[#0f172a] border border-[#93c5fd]/20 p-8" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Front Desk Needs Attention</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border border-red-400/20 bg-red-400/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                  <span className="text-sm text-gray-300">Member check-in failed (Unpaid)</span>
                </div>
                <button className="text-xs font-bold text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors">Resolve</button>
              </div>
              <div className="flex justify-between items-center p-3 border border-yellow-400/20 bg-yellow-400/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-gray-300">2 New Lead Inquiries</span>
                </div>
                <button className="text-xs font-bold text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded transition-colors">View</button>
              </div>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-white/5 p-8" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
            <div className="flex justify-between items-end mb-6">
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>Recent Activity</h2>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {[
                { time: '10 mins ago', title: 'Alex Carter booked HIIT Blast', type: 'book' },
                { time: '25 mins ago', title: 'New Membership (PRO)', type: 'money' },
                { time: '1 hour ago', title: 'Sarah Jenkins checked in', type: 'checkin' },
                { time: '2 hours ago', title: 'Marcus Thorne updated schedule', type: 'system' }
              ].map((activity, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/10 bg-[#0b1120] text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" style={{ backgroundColor: 'var(--bg-base, #0b1120)' }}></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-white/5 bg-[#0b1120]" style={{ backgroundColor: 'var(--bg-base, #0b1120)' }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-xs" style={{ color: 'var(--text-main, #ffffff)' }}>{activity.title}</div>
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Custom Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowCalendar(false)}>
          <div className="bg-[#0f172a] border border-white/10 p-6 max-w-2xl w-full shadow-2xl relative" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>Select Date Range</h3>
              <button className="text-gray-400 hover:text-white" onClick={() => setShowCalendar(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {/* Left Calendar */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <button className="text-gray-400 hover:text-white">&lt;</button>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>August 2024</span>
                  <button className="text-gray-400 hover:text-white">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <div key={d} className="text-[10px] font-bold text-gray-500">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {Array.from({length: 31}).map((_, i) => (
                    <button key={i} className={`p-2 text-xs rounded hover:bg-white/10 transition-colors ${i >= 15 && i <= 31 ? 'bg-[#93c5fd]/20 text-[#93c5fd]' : 'text-gray-300'}`}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Right Calendar */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <button className="text-gray-400 hover:text-white">&lt;</button>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>September 2024</span>
                  <button className="text-gray-400 hover:text-white">&gt;</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <div key={d} className="text-[10px] font-bold text-gray-500">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {Array.from({length: 30}).map((_, i) => (
                    <button key={i} className={`p-2 text-xs rounded hover:bg-white/10 transition-colors ${i <= 5 ? 'bg-[#93c5fd]/20 text-[#93c5fd]' : 'text-gray-300'}`}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-sm font-bold text-[#93c5fd]">Aug 16 - Sep 06</span>
              <button 
                onClick={() => { setActiveDate('Aug 16 - Sep 06'); setShowCalendar(false); }}
                className="bg-[#93c5fd] hover:bg-white text-[#0f172a] text-xs font-bold tracking-widest uppercase py-2 px-6 transition-colors"
              >
                Apply Range
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}