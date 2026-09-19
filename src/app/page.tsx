"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const NAV_LINKS = ['Home', 'Arena', 'Classes', 'Trainers', 'Memberships', 'Contact']

const SLIDES = [
  {
    type: 'video',
    src: '/videos/2.mp4',
    eyebrow: 'Push Your Limits',
    headline: 'TRANSFORM YOUR BODY',
    sub: 'State-of-the-art facilities & expert training',
    cta: 'JOIN NOW',
      href: '/login',
  },
  {
    type: 'video',
    src: '/videos/3.mp4',
    eyebrow: 'Train Hard',
    headline: 'STRENGTH & CONDITIONING',
    sub: 'Achieve your peak performance',
    cta: 'BOOK A CLASS',
      href: '/classes',
  },
  {
    type: 'video',
    src: '/videos/5.mp4',
    eyebrow: 'Join The Community',
    headline: 'GROUP CLASSES',
    sub: 'High energy, motivating environment to push your limits',
    cta: 'VIEW SCHEDULE',
      href: '/classes',
  },
  {
    type: 'video',
    src: '/videos/1.mp4',
    eyebrow: 'Reach Your Peak',
    headline: 'ADVANCED TRAINING',
    sub: 'Personalized programs tailored for you',
    cta: 'MEET THE EXPERTS',
      href: '/login',
  },
  {
    type: 'video',
    src: '/videos/4.mp4',
    eyebrow: 'Find Your Balance',
    headline: 'YOGA & FLEXIBILITY',
    sub: 'Holistic wellness and recovery',
    cta: 'EXPLORE PROGRAMS',
      href: '/classes',
  },
]

const FACILITIES = [
  {
    title: 'Aesthetic Environment',
    desc: 'Architecturally designed spaces that inspire focus and intensity.',
    image: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=1200&h=1200&fit=crop',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Standard Equipments',
    desc: 'Fully equipped with premium, industry-leading machinery.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=600&fit=crop',
    span: 'md:col-span-2 md:row-span-1'
  },
  {
    title: 'Recovery Zones',
    desc: 'Saunas, ice baths, and dedicated stretching floors.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Fuel Bar',
    desc: 'Pre-workout shots and post-workout protein blends.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=600&fit=crop',
    span: 'md:col-span-1 md:row-span-1'
  }
]

const TRAINERS = [
  {
    name: 'Marcus Thorne',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&h=1000&fit=crop&auto=format',
    bio: 'With over a decade of experience, Marcus specializes in strength and conditioning.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop&auto=format',
    bio: 'Elena brings a holistic approach to fitness, focusing on core strength and flexibility.',
  },
  {
    name: 'David Chen',
    role: 'HIIT Specialist',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&auto=format',
    bio: 'David pushes limits with high-intensity interval training designed to burn fat.',
  },
]

const PROGRAM_CATEGORIES = ['All', 'Strength', 'Cardio', 'Flexibility', 'Combat']

const PROGRAMS = [
  { category: 'Strength', label: 'Strength', title: 'Powerlifting', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1200&fit=crop&auto=format' },
  { category: 'Cardio', label: 'Cardio', title: 'HIIT Blast', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=1200&fit=crop&auto=format' },
  { category: 'Flexibility', label: 'Flexibility', title: 'Vinyasa Yoga', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=1200&fit=crop&auto=format' },
  { category: 'Combat', label: 'Combat', title: 'Muay Thai', image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=1200&fit=crop&auto=format' },
]

const MEMBERSHIPS = [
  {
    title: 'Basic',
    price: 'NPR 3,000',
    period: '/ mo',
    features: ['Access to gym floor', 'Locker access', 'Free WiFi'],
  },
  {
    title: 'Pro',
    price: 'NPR 5,000',
    period: '/ mo',
    features: ['Access to gym floor', 'All group classes', '1 PT session/mo', 'Sauna access'],
  },
  {
    title: 'Elite',
    price: 'NPR 8,000',
    period: '/ mo',
    features: ['Unlimited access', 'Unlimited classes', '4 PT sessions/mo', 'Nutrition plan', 'Priority booking'],
  }
]

const SCHEDULE = [
  { time: '06:00 AM', name: 'CrossFit', trainer: 'Marcus Thorne', slots: 3, intensity: 'High' },
  { time: '08:00 AM', name: 'Vinyasa Yoga', trainer: 'Elena Rodriguez', slots: 12, intensity: 'Low' },
  { time: '05:30 PM', name: 'Powerlifting', trainer: 'Marcus Thorne', slots: 0, intensity: 'High' },
  { time: '07:00 PM', name: 'HIIT Blast', trainer: 'David Chen', slots: 5, intensity: 'High' },
]

const COMMUNITY_REVIEWS = [
  { name: 'Alex Thompson', rating: 5, date: '2 weeks ago', text: 'Best equipment in the city. The atmosphere completely changes your mindset the second you walk in.' },
  { name: 'Priya Sharma', rating: 5, date: '1 month ago', text: 'Incredible coaches. They don’t just watch you workout, they actually correct your form and push you.' },
  { name: 'James Carter', rating: 5, date: '2 months ago', text: 'Worth every penny. The facilities are spotless and the community is extremely supportive of beginners.' }
]

const TESTIMONIALS = [
  { text: "The energy in this arena is unmatched. The aesthetic environment and the standard of equipment pushed me further than I ever thought possible.", author: "SARAH JENKINS", role: "ELITE MEMBER" },
  { text: "I've trained in facilities all over the world. Hungsee brings a standard to fitness that you simply cannot find anywhere else.", author: "MICHAEL T.", role: "PRO ATHLETE" },
  { text: "More than a gym. It's a community pushing each other. The coaches actually care about your progression and longevity.", author: "DAVID CHEN", role: "POWERLIFTER" }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const slideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const goToNextSlide = () => {
    setCurrentSlide(s => (s + 1) % SLIDES.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote(q => (q + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const current = SLIDES[currentSlide];
    if (slideTimeout.current) clearTimeout(slideTimeout.current);
    slideTimeout.current = setTimeout(goToNextSlide, 5000);

    SLIDES.forEach((slide, i) => {
      if (slide.type === 'video' && videoRefs.current[i]) {
        if (i === currentSlide) {
          videoRefs.current[i]!.currentTime = 0;
          videoRefs.current[i]!.play().catch(e => console.log("Autoplay prevented:", e));
        } else {
          videoRefs.current[i]!.pause();
        }
      }
    });
    return () => {
      if (slideTimeout.current) clearTimeout(slideTimeout.current);
    }
  }, [currentSlide])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSlide = (i: number) => {
    setCurrentSlide(i)
  }

  const filteredPrograms = PROGRAMS.filter(p => activeFilter === 'All' || p.category === activeFilter)

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f4f5f7] overflow-x-hidden">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
        .text-outline-hover:hover {
          color: white;
          -webkit-text-stroke: 1px transparent;
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ 
          background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent', 
          backdropFilter: scrolled ? 'blur(10px)' : 'none', 
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          padding: scrolled ? '0.5rem 0' : '1.5rem 0'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between relative">
          
          {/* Left Links */}
          <div className="hidden lg:flex items-center flex-1">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.slice(0, 3).map(l => (
                <li key={l}>
                  <a
                    href="#"
                    style={{ 
                      fontFamily: "'Inter', sans-serif", 
                      fontSize: '0.75rem', 
                      fontWeight: 600,
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#cbd5e1', 
                      transition: 'color 0.2s' 
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Centered Text Logo */}
          <a href="#" className="flex flex-col items-center leading-none z-50 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.2rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff' }}>HUNGSEE</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#93c5fd', textTransform: 'uppercase', marginTop: '0.2rem' }}>Fitness Arena</span>
          </a>

          {/* Right Links + CTA */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-10">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.slice(3).map(l => (
                <li key={l}>
                  <a
                    href="#"
                    style={{ 
                      fontFamily: "'Inter', sans-serif", 
                      fontSize: '0.75rem', 
                      fontWeight: 600,
                      letterSpacing: '0.15em', 
                      textTransform: 'uppercase', 
                      color: '#cbd5e1', 
                      transition: 'color 0.2s' 
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/register"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: '0.75rem', 
                fontWeight: 700,
                letterSpacing: '0.15em', 
                textTransform: 'uppercase', 
                color: '#0f172a', 
                background: '#ffffff', 
                padding: '0.8rem 1.8rem', 
                border: 'none', 
                cursor: 'pointer',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#93c5fd' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff' }}
            >
              Join Now
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 transition-all bg-white" style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
            <span className="block w-6 h-0.5 transition-all bg-white" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 transition-all bg-white" style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full bg-[#0f172a] pt-24 pb-12 px-8 flex flex-col gap-6 border-b border-white/10">
              {NAV_LINKS.map(l => (
                <a key={l} href="#" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff' }}>{l}</a>
              ))}
              <Link href="/register" onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0f172a', background: '#ffffff', padding: '1rem', textAlign: 'center', marginTop: '1rem', textDecoration: 'none' }}>Join Now</Link>
            </div>
        )}
      </nav>

      {/* ── HERO SLIDER ── */}
      <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#000000]">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ 
              opacity: i === currentSlide ? 1 : 0,
              zIndex: i === currentSlide ? 10 : 0 
            }}
          >
            {slide.type === 'video' ? (
              <video
                ref={(el) => { if (el) videoRefs.current[i] = el; }}
                src={slide.src}
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* Added 40% black overlay for text legibility on all backgrounds */}
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 40%, transparent 100%)' }} />
            <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,1) 0%, transparent 20%)' }} />
          </div>
        ))}

        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 max-w-[1400px] mx-auto pt-20 pointer-events-none">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="absolute max-w-[900px] transition-all duration-700"
              style={{ 
                opacity: i === currentSlide ? 1 : 0, 
                transform: i === currentSlide ? 'translateX(0)' : 'translateX(-40px)', 
                pointerEvents: i === currentSlide ? 'auto' : 'none' 
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.25em', color: '#93c5fd', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{slide.eyebrow}</p>
              <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 10vw, 8rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{slide.headline}</h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', fontWeight: 400, color: '#cbd5e1', marginBottom: '3.5rem', maxWidth: '500px', lineHeight: 1.6 }}>{slide.sub}</p>
              
              <div className="flex flex-col sm:flex-row items-start gap-6 pointer-events-auto w-full max-w-[280px] sm:max-w-none">
                <Link
                  href={slide.href}
                  className="w-full sm:w-[280px] py-4 sm:py-5 flex items-center justify-center gap-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0f172a] bg-white transition-colors duration-300 hover:bg-[#93c5fd]"
                >
                  {slide.cta} <span className="text-xl leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-16 md:left-auto md:right-16 z-30 flex items-center gap-4 sm:gap-6 pointer-events-auto">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#cbd5e1' }}>0{currentSlide + 1}</span>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="transition-all duration-300"
                style={{ width: i === currentSlide ? '3rem' : '1rem', height: '2px', background: i === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer' }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: '#64748b' }}>0{SLIDES.length}</span>
        </div>
      </section>

      {/* ── TICKER MARQUEE ── */}
      <div className="w-full bg-[#f4f5f7] py-5 border-y border-gray-200 overflow-hidden relative z-20 flex group cursor-default">
        <div className="animate-scroll group-hover:[animation-play-state:paused] flex gap-12 font-['Oswald'] text-xl font-bold tracking-widest text-[#1e3a8a] uppercase opacity-100">
          {Array(8).fill('LIMITED TIME OFFER: 1ST MONTH FREE • OPEN 7 DAYS • AESTHETIC ENVIRONMENT • STANDARD EQUIPMENTS • PROFESSIONAL TRAINERS • ').map((text, i) => (
            <span key={i} className="whitespace-nowrap hover:text-[#0f172a] transition-colors">{text}</span>
          ))}
        </div>
      </div>

      {/* ── CINEMATIC PARALLAX ABOUT ── */}
      <section className="relative py-32 md:py-48 px-8 flex items-center justify-center min-h-[800px]">
        {/* Fixed Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover filter grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=2000&q=80')" }}
        />
        {/* Dark overlay for readability, strictly using #0f172a to maintain alternating section contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/95" />
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <div className="mb-8 flex flex-col items-center gap-4">
             <div className="w-12 h-1 bg-[#93c5fd]"></div>
             <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.25em', color: '#93c5fd', textTransform: 'uppercase' }}>The Arena</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', marginBottom: '2.5rem', color: '#ffffff' }}>
            REDEFINE YOUR LIMITS
          </h2>
          <div className="space-y-6 mb-16 mx-auto max-w-[800px]">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', lineHeight: 1.8, color: '#f8fafc', fontWeight: 300 }}>
              Hungsee Fitness Arena was born out of a desire to create a training environment that refuses to compromise on quality or aesthetic. 
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.8, color: '#cbd5e1' }}>
              We combine architectural aesthetics with elite standard equipments and professional educators. This isn't just a gym—it's an arena where you conquer yourself.
            </p>
          </div>

          {/* Clean Stats Grid centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12 max-w-[800px] mx-auto">
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1, marginBottom: '0.5rem' }}>10K+</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#93c5fd', textTransform: 'uppercase' }}>Sqft Space</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1, marginBottom: '0.5rem' }}>24/7</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#93c5fd', textTransform: 'uppercase' }}>Access</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1, marginBottom: '0.5rem' }}>50+</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#93c5fd', textTransform: 'uppercase' }}>Pro Classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID: THE ARENA FACILITIES ── */}
      <section className="py-24 px-8 bg-[#0b1120]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '1rem' }}>The Environment</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1 }}>Premium Facilities</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            {FACILITIES.map((fac, i) => (
              <div key={i} className={`relative group overflow-hidden ${fac.span} bg-slate-900`}>
                <img src={fac.image} alt={fac.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{fac.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#cbd5e1', maxWidth: '400px', transform: 'translateY(20px)', opacity: 0, transition: 'all 0.4s ease' }} className="group-hover:translate-y-0 group-hover:opacity-100">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELITE PROGRAMS (CMS-DRIVEN) ── */}
      <section id="programs" className="py-32 px-8 bg-[#0f172a] relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 text-center">
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1, marginBottom: '2rem' }}>Signature Programs</h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {PROGRAM_CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.8rem 1.8rem',
                  border: `1px solid ${activeFilter === cat ? '#93c5fd' : 'rgba(255,255,255,0.2)'}`,
                  background: activeFilter === cat ? '#93c5fd' : 'transparent',
                  color: activeFilter === cat ? '#0f172a' : '#cbd5e1',
                  transition: 'all 0.3s'
                }}
                className="hover:border-white hover:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all min-h-[400px]">
            {filteredPrograms.map((item, i) => (
              <div 
                key={`${item.title}-${activeFilter}`} 
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-black animate-reveal-up opacity-0"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter md:grayscale brightness-75 md:brightness-50 group-hover:grayscale-0 group-hover:brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '0.5rem' }}>{item.label}</p>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.2rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '1rem' }}>{item.title}</h3>
                  <button className="self-start text-xs font-bold uppercase tracking-widest bg-white text-black px-4 py-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Book Session
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1e3a8a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
            {filteredPrograms.length === 0 && (
               <div className="col-span-full text-center py-20 text-gray-500">No programs available in this category.</div>
            )}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL TRAINERS ── */}
      <section className="py-32 px-8 bg-[#0b1120] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
             <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase' }}>
               Expert Coaching Staff
             </h2>
             <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#94a3b8', marginTop: '1rem', maxWidth: '600px' }} className="mx-auto">
               Our trainers are proven athletes and dedicated educators committed to your progression.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TRAINERS.map((inst, i) => (
              <div key={i} className="flex flex-col group text-center cursor-pointer bg-[#131b2e] border border-white/10 pb-8 hover:border-white/30 transition-all rounded-sm overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#0b1120]">
                  <img src={inst.image} alt={inst.name} className="w-full h-full object-cover filter md:grayscale opacity-100 md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.8rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{inst.name}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', color: '#93c5fd', textTransform: 'uppercase', marginBottom: '1rem' }}>{inst.role}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '1.5rem', padding: '0 1rem' }}>{inst.bio}</p>
                  
                  {/* Real SVG Icons */}
                  <div className="flex justify-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-[#93c5fd] hover:border-[#93c5fd] hover:text-[#0f172a] transition-all" aria-label="Twitter">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-[#93c5fd] hover:border-[#93c5fd] hover:text-[#0f172a] transition-all" aria-label="Instagram">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-[#93c5fd] hover:border-[#93c5fd] hover:text-[#0f172a] transition-all" aria-label="Facebook">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS / QUOTE ── */}
      <section className="py-32 px-8 bg-[#0f172a] text-white flex items-center justify-center text-center relative overflow-hidden">
         <div className="max-w-[1000px] mx-auto relative z-10 w-full">
            <span style={{ fontSize: '4rem', color: '#93c5fd', lineHeight: 0.5, opacity: 0.5 }}>"</span>
            
            <div className="relative w-full h-[350px] sm:h-[250px] md:h-[200px]">
              {TESTIMONIALS.map((quote, i) => (
                <div 
                  key={i} 
                  className="absolute inset-0 flex flex-col justify-center px-4 transition-all duration-700 ease-in-out"
                  style={{ 
                    opacity: i === currentQuote ? 1 : 0, 
                    transform: i === currentQuote ? 'translateY(0)' : 'translateY(20px)',
                    pointerEvents: i === currentQuote ? 'auto' : 'none',
                    zIndex: i === currentQuote ? 10 : 0
                  }}
                >
                  <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, lineHeight: 1.4, textTransform: 'uppercase', marginBottom: '2rem' }}>
                    {quote.text}
                  </h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    — {quote.author}, {quote.role}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-3 mt-8 relative z-20">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentQuote(i)}
                  className="transition-colors duration-300 rounded-full"
                  style={{ width: i === currentQuote ? '24px' : '8px', height: '8px', background: i === currentQuote ? '#ffffff' : 'rgba(255,255,255,0.4)', padding: 0, border: 'none', cursor: 'pointer' }}
                  aria-label={`View quote ${i + 1}`}
                />
              ))}
            </div>
         </div>
      </section>

      {/* ── MEMBER REVIEWS ── */}
      <section className="py-32 px-8 bg-[#0b1120] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', marginBottom: '4rem', lineHeight: 1.2 }}>
            <span style={{ color: '#94a3b8' }}>REAL RESULTS.</span><br/>
            <span style={{ fontWeight: 700 }}>REAL MEMBERS.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {COMMUNITY_REVIEWS.map((review, i) => (
              <div key={i} className="flex flex-col bg-[#131b2e] p-8 border border-white/5 hover:border-white/20 transition-all rounded-sm relative">
                {/* Google-style rating stars */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '2rem', flexGrow: 1 }}>
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.1rem' }}>{review.name}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#64748b' }}>{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SCHEDULE TEASER ── */}
      <section className="py-32 px-8 bg-[#0f172a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#1e3a8a', marginBottom: '1rem' }}>Live Capacity</p>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', lineHeight: 1 }}>Today's Classes</h2>
            </div>
            <Link href="/classes" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', borderBottom: '1px solid #ffffff', paddingBottom: '0.2rem' }}>View Full Calendar →</Link>
          </div>

          <div className="space-y-4">
            {SCHEDULE.map((cls, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-[#0f172a] border border-white/5 hover:border-[#1e3a8a] transition-all group">
                <div className="flex flex-col md:flex-row md:items-center gap-6 w-full md:w-auto mb-6 md:mb-0">
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#93c5fd', minWidth: '100px' }}>{cls.time}</div>
                  <div>
                    <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{cls.name}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#94a3b8' }}>with <span className="text-white">{cls.trainer}</span> • {cls.intensity} Intensity</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6">
                  <div className="text-right">
                    <span 
                      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase ${cls.slots === 0 ? 'bg-gray-800 text-gray-400 border border-gray-700' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {cls.slots === 0 ? 'Full' : `${cls.slots} Slots Left`}
                    </span>
                  </div>
                  <Link 
                    href={cls.slots === 0 ? '#' : '/login'}
                    style={{ 
                      fontFamily: "'Inter', sans-serif", 
                      fontSize: '0.8rem', 
                      fontWeight: 700,
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase', 
                      color: cls.slots === 0 ? '#64748b' : '#0f172a', 
                      background: cls.slots === 0 ? '#1e293b' : '#ffffff', 
                      padding: '1rem 2.5rem', 
                      border: 'none', 
                      cursor: cls.slots === 0 ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s',
                      textDecoration: 'none',
                      display: 'inline-block',
                      textAlign: 'center'
                    }}
                    className={cls.slots > 0 ? "hover:bg-[#93c5fd]" : "pointer-events-none"}
                  >
                    {cls.slots === 0 ? 'Waitlist' : 'Reserve'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM MEMBERSHIPS ── */}
      <section className="relative py-32 px-8 bg-[#0b1120] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase' }}>Join The Arena</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#94a3b8', marginTop: '1rem' }}>No hidden fees. Just transparent, elite access.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {MEMBERSHIPS.map((plan, i) => (
              <div key={i} className={`p-10 md:p-14 relative group ${i === 1 ? 'bg-gradient-to-b from-[#1e3a8a] to-[#0b1120] border border-[#1e3a8a] lg:scale-105 z-10 shadow-2xl' : 'bg-[#0b1120] border border-white/10 hover:border-white/30'} transition-all duration-500`}>
                {i === 1 && <div className="absolute top-0 right-8 bg-white text-[#0f172a] text-xs font-bold tracking-widest px-3 py-1 uppercase translate-y-[-50%]">Most Popular</div>}
                
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '1rem' }}>{plan.title}</h3>
                <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: '3rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>{plan.price}</p>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#94a3b8', fontWeight: 600 }}>{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-12">
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span className="text-[#93c5fd] font-bold">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button
                  style={{ 
                    display: 'block', 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: '0.9rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: i === 1 ? '#0f172a' : '#ffffff', 
                    background: i === 1 ? '#ffffff' : 'transparent', 
                    border: `1px solid ${i === 1 ? '#ffffff' : 'rgba(255,255,255,0.2)'}`, 
                    padding: '1.2rem 0', 
                    textAlign: 'center',
                    cursor: 'pointer', 
                    transition: 'all 0.3s', 
                    width: '100%' 
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = i === 1 ? '#93c5fd' : '#ffffff'; e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderColor = i === 1 ? '#93c5fd' : '#ffffff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = i === 1 ? '#ffffff' : 'transparent'; e.currentTarget.style.color = i === 1 ? '#0f172a' : '#ffffff'; e.currentTarget.style.borderColor = i === 1 ? '#ffffff' : 'rgba(255,255,255,0.2)'; }}
                >
                  Pay with eSewa
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRM LEAD CAPTURE & CTA ── */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#0b1120] text-white relative overflow-hidden border-y border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 relative z-10">
          
          {/* CRM Form */}
          <div className="p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '1rem' }}>Experience The Arena</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, marginBottom: '2rem' }}>Claim Your Free Day Pass</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#cbd5e1', marginBottom: '3rem', maxWidth: '400px' }}>
              Drop your details below to activate your 24-hour full access pass. Step inside and feel the difference.
            </p>
            
            <form className="space-y-4 max-w-md" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-[#0b1120] border border-white/30 p-4 text-white placeholder-white/50 focus:outline-none focus:border-[#93c5fd] transition-colors shadow-inner" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-[#0b1120] border border-white/30 p-4 text-white placeholder-white/50 focus:outline-none focus:border-[#93c5fd] transition-colors shadow-inner" />
              <select defaultValue="" className="w-full bg-[#0b1120] border border-white/30 p-4 text-white/70 focus:outline-none focus:border-[#93c5fd] appearance-none transition-colors shadow-inner">
                <option value="" disabled>Primary Goal</option>
                <option value="strength">Strength & Muscle</option>
                <option value="weightloss">Weight Loss</option>
                <option value="endurance">Endurance & Cardio</option>
                <option value="general">General Fitness</option>
              </select>
              <button type="submit" style={{ width: '100%', background: '#ffffff', color: '#0f172a', padding: '1.4rem', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'background 0.3s' }} className="hover:bg-[#93c5fd] mt-4 shadow-lg shadow-black/20">
                Get Free Pass
              </button>
            </form>
          </div>

          {/* Location & Hours */}
          <div className="p-12 md:p-24 flex flex-col justify-center relative bg-[#0b1120]/50 backdrop-blur-sm">
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', marginBottom: '3rem' }}>Location & Hours</h3>
            
            <div className="space-y-10 relative z-10">
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', color: '#93c5fd', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Address</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#f8fafc', lineHeight: 1.6 }}>123 Lakeside Road<br/>Pokhara, Nepal 33700</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', color: '#93c5fd', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Hours of Operation</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.8 }}>Monday - Friday: <span className="text-white font-bold">24 Hours</span><br/>Weekends: <span className="text-white font-bold">6:00 AM - 10:00 PM</span></p>
              </div>
              <div className="pt-2 flex gap-6 items-center">
                <a href="#" className="text-white text-sm font-bold tracking-widest uppercase hover:text-[#93c5fd] transition-colors border-b border-white hover:border-[#93c5fd] pb-1">Get Directions</a>
              </div>
            </div>

            {/* Faded map graphic element */}
            <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 w-96 h-96 border-[40px] border-white/5 rounded-full pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-white pt-16 pb-12 px-8 bg-[#0b1120]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: '2.5rem', fontWeight: 700, letterSpacing: '0.05em', color: '#ffffff', display: 'block', lineHeight: 1 }}>HUNGSEE</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.25em', color: '#93c5fd', textTransform: 'uppercase' }}>Fitness Arena</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: '#64748b', maxWidth: '280px' }}>Empowering your fitness journey with aesthetic environments and standard equipments.</p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Explore</h4>
            <ul className="space-y-3">
              {['About Us', 'Classes & Programs', 'Trainers', 'Booking', 'Contact'].map(l => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
                <li key={l}>
                  <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '2rem' }}>Newsletter</h4>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#ffffff', outline: 'none' }}
              />
              <button
                type="submit"
                style={{ background: '#ffffff', border: 'none', padding: '1rem', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f172a', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#93c5fd')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 max-w-[1400px] mx-auto">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', letterSpacing: '0.15em', color: '#475569', textTransform: 'uppercase' }}>© 2026 Hungsee Fitness Arena. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
