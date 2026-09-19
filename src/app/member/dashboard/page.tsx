"use client"
import { useState } from 'react'
import Link from 'next/link'
import { CLASSES, TRAINERS } from '@/lib/mockData'

export default function MemberDashboard() {
  const [showQR, setShowQR] = useState(false)
  const nextClass = CLASSES.find(c => c.id === 'hiit-blast-1') || CLASSES[0]
  const nextTrainer = TRAINERS.find(t => t.id === nextClass.trainerId)

  return (
    <div className="space-y-12 pb-16">
      {/* Header Profile Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#93c5fd] to-[#1e3a8a] flex items-center justify-center border-4 border-[#0b1120] shadow-xl overflow-hidden relative group">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff' }}>AC</span>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-[10px] text-white tracking-widest uppercase">Edit</span>
            </div>
          </div>
          <div>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1 }}>
              Alex Carter
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_15px_rgba(234,179,8,0.3)]" style={{ fontFamily: "'Inter', sans-serif" }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z"/></svg>
                Elite Tier
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b' }}>Member since 2024</span>
            </div>
          </div>
        </div>
        
        <div className="flex w-full md:w-auto mt-6 md:mt-0 bg-[#0f172a] md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-white/5 md:border-0 justify-around md:justify-end gap-0 md:gap-8 items-center">
          <div className="text-center md:text-right">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748b' }}>Current Streak</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: '#ffffff' }} className="flex items-center justify-center md:justify-end gap-2 leading-none mt-1">
              <svg className="w-5 h-5 text-[#f97316]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" /></svg>
              12 Days
            </p>
          </div>
          <div className="w-px h-12 bg-white/10 mx-4 md:mx-0"></div>
          <div className="text-center md:text-right">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748b' }}>Total Points</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: '#93c5fd' }} className="leading-none mt-1">2,450</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Gamification: Next Reward */}
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a]/20 border border-[#93c5fd]/20 p-6 rounded-lg relative overflow-hidden flex items-center justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#93c5fd] opacity-5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93c5fd' }}>Monthly Challenge</h3>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', color: '#ffffff', marginTop: '0.2rem' }}>Complete 10 Classes this month</p>
            </div>
            <div className="flex flex-col items-end">
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#ffffff' }}>7/10</span>
              <div className="w-32 h-2 bg-[#0b1120] rounded-full mt-2 overflow-hidden border border-white/10">
                <div className="h-full bg-[#93c5fd] w-[70%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-white/5 p-8 relative overflow-hidden group hover:border-white/20 transition-all">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1.5rem' }}>Your Next Session</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1.1 }}>{nextClass.name}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#cbd5e1', marginTop: '0.5rem' }}>with {nextTrainer?.name}</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#93c5fd' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {nextClass.date}
                  </span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#64748b' }}></span>
                  <span className="flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#93c5fd' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {nextClass.time}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setShowQR(true)}
                className="relative overflow-hidden rounded group px-8 py-3 w-full md:w-auto text-xs font-bold uppercase tracking-widest text-white transition-all bg-[#0b1120] border border-[#93c5fd]/30 hover:border-[#93c5fd] shadow-[0_0_15px_rgba(147,197,253,0.1)] hover:shadow-[0_0_25px_rgba(147,197,253,0.2)] flex items-center justify-center gap-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10">Check-in Code</span>
                <svg className="w-4 h-4 relative z-10 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/50 to-[#2563eb]/20 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
              </button>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-white/5 p-8">
            <div className="flex justify-between items-end mb-6">
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94a3b8' }}>Upcoming Schedule</h2>
              <Link href="/member/classes" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff' }} className="hover:text-[#93c5fd] transition-colors">
                + Add Class
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-white/5 bg-[#0b1120] hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 flex flex-col items-center justify-center text-center">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b' }}>THU</span>
                    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>24</span>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 500, color: '#ffffff', textTransform: 'uppercase' }}>Vinyasa Yoga</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b' }}>08:00 AM - 60 Min</p>
                  </div>
                </div>
                <Link href="/book/vinyasa-1?status=confirmed" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#93c5fd', fontWeight: 600, textTransform: 'uppercase' }} className="px-4 py-2 hover:bg-white/5 transition-colors">Manage</Link>
              </div>
            </div>
          </div>
          
          {/* Achievements Section */}
          <div className="bg-[#0f172a] border border-white/5 p-8">
             <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1.5rem' }}>Recent Badges</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { 
                   icon: <svg className="w-8 h-8 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
                   name: 'Sharpshooter', desc: '5 Perfect Attendances' 
                 },
                 { 
                   icon: <svg className="w-8 h-8 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, 
                   name: 'High Voltage', desc: '3 HIIT Classes' 
                 },
                 { 
                   icon: <svg className="w-8 h-8 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M4 8v8M20 8v8M8 10v4M16 10v4" /></svg>, 
                   name: 'Silverback', desc: 'Lifted 10,000kg' 
                 },
                 { 
                   icon: <svg className="w-8 h-8 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, 
                   name: 'Locked In', desc: 'Booked 7 Days Ahead', locked: true 
                 }
               ].map((b, i) => (
                 <div key={i} className={`p-4 border border-white/5 flex flex-col items-center text-center gap-3 transition-all hover:bg-white/5 cursor-pointer ${b.locked ? 'opacity-40 grayscale' : ''}`}>
                   <div className="mb-2">{b.icon}</div>
                   <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#ffffff' }}>{b.name}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Side Column - Membership & Stats */}
        <div className="space-y-6">
          <div className="bg-[#0f172a] border border-[#93c5fd]/20 p-8 relative">
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1.5rem' }}>Access Pass</h2>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1 }}>PRO</h3>
            <div className="mt-6 space-y-3 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b' }}>Renewal</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1' }}>Dec 20, 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b' }}>Guest Passes</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1' }}>2 Remaining</span>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border border-white/10 hover:border-white/30 text-white text-xs font-bold tracking-widest uppercase transition-colors">
              Upgrade Tier
            </button>
          </div>

          <div className="bg-[#0f172a] border border-white/5 p-8">
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1.5rem' }}>Activity Breakdown</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Strength</span>
                  <span className="text-white">45%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-blue-400 w-[45%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">HIIT</span>
                  <span className="text-white">35%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-red-400 w-[35%]"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400 font-bold uppercase tracking-wider">Recovery</span>
                  <span className="text-white">20%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-green-400 w-[20%]"></div></div>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#0f172a] border border-white/5 p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
              <svg className="w-6 h-6 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbd5e1' }}>Billing</span>
            </button>
            <button className="bg-[#0f172a] border border-white/5 p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
              <svg className="w-6 h-6 text-[#93c5fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbd5e1' }}>Profile</span>
            </button>
          </div>

        </div>

      </div>

      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowQR(false)}>
          <div className="bg-[#0f172a] border border-white/10 p-8 max-w-sm w-full text-center relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white/50 hover:text-white" onClick={() => setShowQR(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Scan at Reception</h3>
            <div className="bg-white p-4 rounded-lg inline-block mb-6">
              {/* Real QR Code Demo */}
              <div className="w-48 h-48 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=HUNGSEE-CHECKIN-${nextClass.id}-ALEX`}
                  alt="Check-in QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#cbd5e1' }}>Class: <strong className="text-white">{nextClass.name}</strong></p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>Valid for today only</p>
          </div>
        </div>
      )}

    </div>
  )
}