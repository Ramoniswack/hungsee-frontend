"use client"
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { CLASSES, PROGRAMS, TRAINERS } from '@/lib/mockData'

import { Suspense } from 'react'

function BookingContent() {
  const params = useParams()
  const searchParams = useSearchParams()
  const isConfirmed = searchParams.get('status') === 'confirmed'
  const classId = params.id as string
  
  const cls = CLASSES.find(c => c.id === classId) || CLASSES[0]
  const program = PROGRAMS.find(p => p.id === cls.programId)
  const trainer = TRAINERS.find(t => t.id === cls.trainerId)

  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <div className="w-full max-w-[600px] bg-[#0f172a] border border-white/5 p-8 md:p-12 relative overflow-hidden rounded-xl">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] opacity-5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="mb-10 text-center relative z-10">
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', color: 'var(--text-main, #ffffff)' }}>
            {isConfirmed ? 'Booking Confirmed' : 'Confirm Your Session'}
          </h1>
          <div className="w-12 h-1 bg-[#93c5fd] mx-auto mt-6"></div>
        </div>

        <div className="space-y-8 relative z-10">
          <div className="text-center">
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase', lineHeight: 1.2 }}>{cls.name}</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'var(--text-muted, #cbd5e1)', marginTop: '0.5rem' }}>with {trainer?.name}</p>
          </div>

          <div className="bg-[#0b1120] border border-white/5 p-6 space-y-4 rounded-xl">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted-lighter, #64748b)' }}>Date</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>{cls.date}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted-lighter, #64748b)' }}>Time</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>{cls.time}</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted-lighter, #64748b)' }}>Duration</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>{cls.duration}</span>
            </div>
          </div>

          <div className="text-center">
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: isConfirmed ? '#4ade80' : '#93c5fd' }}>
              {isConfirmed ? 'You are successfully booked!' : cls.slots + ' Spots Remaining'}
            </span>
          </div>

          <Link href={isConfirmed ? '/member/dashboard' : ('/member/book/' + cls.id + '?status=confirmed')} className="block w-full">
            <button 
              className="w-full transition-colors hover:bg-gray-200 rounded"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-inverted, #0f172a)', background: 'var(--text-main, #ffffff)', padding: '1.2rem', border: 'none', cursor: 'pointer' }}
            >
              {isConfirmed ? 'Back to Dashboard' : 'Confirm Booking'}
            </button>
          </Link>
          
          <div className="text-center mt-4">
            <Link href="/member/classes" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-muted-lighter, #64748b)', textDecoration: 'underline' }} className="hover:text-white transition-colors">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MemberBookingPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
      <BookingContent />
    </Suspense>
  )
}
