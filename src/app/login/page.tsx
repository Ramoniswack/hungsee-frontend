"use client"
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect')
  
  const [email, setEmail] = useState('user@hungsee.com')
  const [password, setPassword] = useState('password123')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Demo Logic based on email input
    if (email.toLowerCase().includes('admin')) {
      localStorage.setItem('isAdmin', 'true')
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/admin/dashboard')
    } else {
      localStorage.setItem('isAdmin', 'false')
      localStorage.setItem('isLoggedIn', 'true')
      if (redirect) {
        router.push(redirect)
      } else {
        router.push('/member/dashboard')
      }
    }
  }

  return (
    <div className="w-full max-w-[440px] mx-auto">
      <div className="mb-12">
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Welcome Back</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#cbd5e1' }}>Access your member portal.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-2">
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#0f172a] border border-white/20 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#93c5fd] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Tip: Use admin@hungsee.com for admin portal</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>Password</label>
            <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#93c5fd' }} className="hover:text-white transition-colors">Forgot?</a>
          </div>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0f172a] border border-white/20 p-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#93c5fd] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              )}
            </button>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full flex justify-center items-center gap-2 group hover:gap-4 transition-all"
          style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', background: '#ffffff', padding: '1rem', border: 'none', cursor: 'pointer' }}
        >
          Sign In
          <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </form>

      <p className="mt-8 text-center" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#64748b' }}>
        Not a member yet? <Link href="/" className="text-white hover:text-[#93c5fd] font-bold transition-colors">Join the Arena</Link>
      </p>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0b1120]">
      {/* Left Image Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1600&fit=crop" 
          alt="Fitness Training" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col justify-end p-16 pb-24">
          <Link href="/" className="mb-auto">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff' }}>HUNGSEE</span>
          </Link>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '4rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1 }}>
            Train Harder.<br/>Go Further.
          </h2>
        </div>
      </div>

      {/* Right Login Panel */}
      <div className="flex-1 flex flex-col justify-center px-8 py-20 lg:p-24 relative overflow-y-auto">
        <div className="lg:hidden absolute top-8 left-8">
          <Link href="/">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff' }}>HUNGSEE</span>
          </Link>
        </div>
        
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}