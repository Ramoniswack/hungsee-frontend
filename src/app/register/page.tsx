import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0b1120]">
      {/* Left Image Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&h=1600&fit=crop" 
          alt="Fitness Arena" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end p-16 pb-24">
          <Link href="/" className="mb-auto">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff' }}>HUNGSEE</span>
          </Link>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1 }}>
            Join The<br/>Arena.
          </h2>
        </div>
      </div>

      {/* Right Register Panel */}
      <div className="flex-1 flex flex-col justify-center px-8 py-20 lg:p-24 relative overflow-y-auto">
        <div className="lg:hidden absolute top-8 left-8">
          <Link href="/">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff' }}>HUNGSEE</span>
          </Link>
        </div>
        
        <div className="w-full max-w-[440px] mx-auto">
          <div className="mb-10">
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Create Account</h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#cbd5e1' }}>Start your journey with us.</p>
          </div>

          <form action="/member/dashboard" className="space-y-5">
            <div className="space-y-2">
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#0f172a] border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            
            <div className="space-y-2">
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-[#0f172a] border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            
            <div className="space-y-2">
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#0f172a] border border-white/20 p-4 text-white focus:outline-none focus:border-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <button 
              type="submit"
              className="w-full mt-6 transition-colors hover:bg-gray-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0f172a', background: '#ffffff', padding: '1.2rem', border: 'none', cursor: 'pointer' }}
            >
              Create Account
            </button>
          </form>

          <div className="mt-10 text-center">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#64748b' }}>
              Already have an account?{' '}
              <Link href="/login" style={{ color: '#ffffff', fontWeight: 600 }}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
