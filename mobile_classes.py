import re

with open('src/app/admin/classes/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

mobile_cards = '''        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-4">
          {classes.map((cls, i) => {
            const program = PROGRAMS.find(p => p.id === cls.programId)
            const trainer = TRAINERS.find(t => t.id === cls.trainerId)
            return (
              <div key={cls.id || i} className="bg-[#0f172a] border border-white/5 p-5 rounded-lg flex flex-col gap-4 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>{cls.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{program?.category}</p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main, #ffffff)' }}>{cls.date}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-muted, #64748b)' }}>{cls.time}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex flex-col">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Trainer</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--text-main, #ffffff)', marginTop: '0.2rem' }}>{trainer?.name}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Bookings</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white tracking-widest mt-1">{cls.capacity - cls.slots} / {cls.capacity}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex justify-end gap-4 mt-2">
                  <button className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Edit</button>
                  <button onClick={() => setClasses(classes.filter(c => c.id !== cls.id))} className="text-red-400 hover:text-red-300 transition-colors text-sm font-bold uppercase tracking-widest">Delete</button>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block bg-[#0f172a] border border-white/5 overflow-hidden">'''

text = text.replace('<div className="bg-[#0f172a] border border-white/5 overflow-hidden">\n          <div className="overflow-x-auto no-scrollbar pb-4 md:pb-0">', mobile_cards + '\n          <div className="overflow-x-auto no-scrollbar pb-4 md:pb-0">')

# Remove the class 'mobile-cards-table'
text = text.replace('className="mobile-cards-table w-full', 'className="w-full')

with open('src/app/admin/classes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
