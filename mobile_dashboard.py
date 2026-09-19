import re

with open('src/app/admin/dashboard/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

mobile_cards = '''              {/* Mobile View */}
              <div className="md:hidden flex flex-col gap-4 mt-4">
                {CLASSES.slice(0, 4).map((cls, i) => {
                  const trainer = TRAINERS.find(t => t.id === cls.trainerId)
                  const fillPercentage = ((cls.capacity - cls.slots) / cls.capacity) * 100
                  return (
                    <div key={i} className="bg-[#0f172a] border border-white/5 p-5 rounded-lg flex flex-col gap-4" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-main, #ffffff)', textTransform: 'uppercase' }}>{cls.name}</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted-light, #cbd5e1)', marginTop: '0.2rem' }}>{cls.time}</p>
                        </div>
                        <div>
                          {cls.slots === 0 ? (
                            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest bg-red-400/10 px-2 py-1 rounded">Waitlist</span>
                          ) : fillPercentage > 80 ? (
                            <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-2 py-1 rounded">Filling Fast</span>
                          ) : (
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-2 py-1 rounded">Open</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden shrink-0"><img src={trainer?.image} alt={trainer?.name} className="w-full h-full object-cover" /></div>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted, #cbd5e1)' }}>{trainer?.name}</span>
                      </div>
                      
                      <div className="pt-4 border-t border-white/5">
                        <div className="flex justify-between items-center mb-2">
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted, #64748b)' }}>Capacity</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-main, #ffffff)' }}>{cls.capacity - cls.slots} / {cls.capacity}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-blue-400" style={{ width: ${fillPercentage}% }}></div></div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Desktop View */}
              <div className="hidden md:block bg-[#0f172a] border border-white/5 overflow-hidden" style={{ backgroundColor: 'var(--bg-surface, #0f172a)' }}>'''

text = text.replace('<div className="bg-[#0f172a] border border-white/5 overflow-hidden" style={{ backgroundColor: \'var(--bg-surface, #0f172a)\' }}>', mobile_cards)

# Now remove the class 'mobile-cards-table' from the table because we don't need it on desktop
text = text.replace('className="mobile-cards-table w-full', 'className="w-full')

with open('src/app/admin/dashboard/page.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
