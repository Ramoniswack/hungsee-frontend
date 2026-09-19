"use client"
import { useState } from 'react'
import { CLASSES, PROGRAMS, TRAINERS } from '@/lib/mockData'

export default function AdminClasses() {
  const [classes, setClasses] = useState(CLASSES)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newClass, setNewClass] = useState({
    name: '', programId: PROGRAMS[0].id, trainerId: TRAINERS[0].id, date: '2024-09-21', time: '06:00 AM', duration: '60 Min', capacity: 20, slots: 20, intensity: 'High', status: 'Scheduled'
  })

  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault()
    const added = { ...newClass, id: 'new-' + Date.now(), slots: newClass.capacity }
    setClasses([added, ...classes])
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase', lineHeight: 1.2 }}>
            Manage Classes
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted, #64748b)' }}>Schedule and organize arena sessions</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-inverted, #0f172a)', background: 'var(--text-main, #ffffff)', padding: '0.8rem 1.5rem', border: 'none', cursor: 'pointer' }} className="hover:bg-gray-200 transition-colors">
          + Add Class
        </button>
      </div>

      <div className="bg-[#0f172a] border border-white/5 overflow-hidden">
        <div className="overflow-x-auto no-scrollbar pb-4 md:pb-0">
          <table className="mobile-cards-table w-full text-left border-collapse whitespace-nowrap md:min-w-[800px]">
            <thead>
              <tr className="border-b border-white/5 bg-[#0b1120]">
                <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Date & Time</th>
                <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Class Name</th>
                <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Trainer</th>
                <th className="p-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Bookings</th>
                <th className="p-4 text-right" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls, i) => {
                const program = PROGRAMS.find(p => p.id === cls.programId)
                const trainer = TRAINERS.find(t => t.id === cls.trainerId)
                return (
                  <tr key={cls.id || i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4" data-label="Date & Time">
                        <div className="flex flex-col items-end">
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>{cls.date}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-muted, #64748b)' }}>{cls.time}</p>
                    </div></td>
                    <td className="p-4" data-label="Class Name">
                        <div className="flex flex-col items-end"><p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>{cls.name}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{program?.category}</p>
                    </div>
                      </td>
                    <td className="p-4" data-label="Trainer">
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted-light, #cbd5e1)' }}>{trainer?.name}</p>
                    </td>
                    <td className="p-4" data-label="Bookings">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white tracking-widest">{cls.capacity - cls.slots} / {cls.capacity}</span>
                    </td>
                    <td className="p-4 text-right" data-label="Actions">
                      <button className="text-gray-400 hover:text-white transition-colors mr-3 text-sm">Edit</button>
                      <button 
                        onClick={() => setClasses(classes.filter(c => c.id !== cls.id))}
                        className="text-red-400 hover:text-red-300 transition-colors text-sm">Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-[#0f172a] border border-white/10 p-8 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white/50 hover:text-white" onClick={() => setIsModalOpen(false)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Add New Class</h3>
            
            <form onSubmit={handleAddClass} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Class Name</label>
                <input required type="text" value={newClass.name} onChange={e => setNewClass({...newClass, name: e.target.value})} className="w-full bg-[#0b1120] border border-white/10 p-3 focus:border-[#93c5fd] focus:outline-none" style={{ color: "var(--text-main, #ffffff)" }} placeholder="e.g. Morning Vinyasa" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Program</label>
                  <select value={newClass.programId} onChange={e => setNewClass({...newClass, programId: e.target.value})} className="w-full bg-[#0b1120] border border-white/10 p-3 focus:border-[#93c5fd] focus:outline-none appearance-none" style={{ color: 'var(--text-main, #ffffff)' }}>
                    {PROGRAMS.map(p => <option key={p.id} value={p.id} style={{ color: '#000' }}>{p.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Trainer</label>
                  <select value={newClass.trainerId} onChange={e => setNewClass({...newClass, trainerId: e.target.value})} className="w-full bg-[#0b1120] border border-white/10 p-3 focus:border-[#93c5fd] focus:outline-none appearance-none" style={{ color: 'var(--text-main, #ffffff)' }}>
                    {TRAINERS.map(t => <option key={t.id} value={t.id} style={{ color: '#000' }}>{t.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Date</label>
                  <input required type="text" value={newClass.date} onChange={e => setNewClass({...newClass, date: e.target.value})} className="w-full bg-[#0b1120] border border-white/10 p-3 focus:border-[#93c5fd] focus:outline-none" style={{ color: "var(--text-main, #ffffff)" }} placeholder="e.g. Thu, Sep 24" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Time</label>
                  <input required type="text" value={newClass.time} onChange={e => setNewClass({...newClass, time: e.target.value})} className="w-full bg-[#0b1120] border border-white/10 p-3 focus:border-[#93c5fd] focus:outline-none" style={{ color: "var(--text-main, #ffffff)" }} placeholder="e.g. 08:00 AM" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Capacity</label>
                <input required type="number" value={newClass.capacity} onChange={e => setNewClass({...newClass, capacity: parseInt(e.target.value)})} className="w-full bg-[#0b1120] border border-white/10 p-3 focus:border-[#93c5fd] focus:outline-none" style={{ color: "var(--text-main, #ffffff)" }} min="1" max="100" />
              </div>
              
              <div className="pt-4 mt-6 border-t border-white/10 text-right">
                <button type="submit" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-inverted, #0f172a)', background: '#93c5fd', padding: '1rem 2rem', border: 'none', cursor: 'pointer' }} className="hover:bg-white transition-colors">
                  Save Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}