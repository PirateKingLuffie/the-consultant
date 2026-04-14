import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, ChevronDown } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { SERVICES, TESTIMONIALS, STATS } from '../data/index'

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      let start = 0
      const step = target / 50
      const t = setInterval(() => {
        start += step
        if (start >= target) { setVal(target); clearInterval(t) }
        else setVal(Math.floor(start))
      }, 30)
      obs.disconnect()
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const PLANETS = [
  { name: 'Sun', angle: 0,   r: 130, size: 32 },
  { name: 'Moon', angle: 40,  r: 130, size: 28 },
  { name: 'Mars', angle: 80,  r: 130, size: 28 },
  { name: 'Merc', angle: 120, r: 130, size: 26 },
  { name: 'Jup',  angle: 160, r: 130, size: 32 },
  { name: 'Ven',  angle: 200, r: 130, size: 28 },
  { name: 'Sat',  angle: 240, r: 130, size: 30 },
  { name: 'Rahu', angle: 280, r: 130, size: 26 },
  { name: 'Ketu', angle: 320, r: 130, size: 26 },
]

export default function Home() {
  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">

        {/* Full-bleed background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(94,231,255,0.04) 0%, rgba(94,231,255,0.01) 40%, transparent 70%)' }} />
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(94,231,255,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(167,139,250,0.03) 0%, transparent 50%)' }} />
        </div>

        {/* Decorative vertical lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[8%] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(94,231,255,0.08) 30%, rgba(94,231,255,0.08) 70%, transparent)' }} />
          <div className="absolute right-[8%] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(94,231,255,0.08) 30%, rgba(94,231,255,0.08) 70%, transparent)' }} />
          <div className="absolute left-[4%] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(94,231,255,0.03) 30%, rgba(94,231,255,0.03) 70%, transparent)' }} />
          <div className="absolute right-[4%] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(94,231,255,0.03) 30%, rgba(94,231,255,0.03) 70%, transparent)' }} />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center py-32">

          {/* LEFT — Text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-astro opacity-60" />
                <span className="text-astro text-xs font-medium tracking-[0.25em] uppercase">Vedic Astrology · Gemstones · Vaastu</span>
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                The<br />
                <span className="text-glow-cyan" style={{ color: '#5ee7ff' }}>Consultant</span>
                <br />
                <span className="text-3xl lg:text-4xl font-normal text-slate-400 tracking-wide">GuptaJi</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Unlock the blueprint of your destiny through authentic Vedic astrology. Personalized Kundli readings, sacred gemstone recommendations, and Vaastu consultations — rooted in 5,000 years of ancient wisdom.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/booking" className="btn-primary text-sm font-semibold">
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline text-sm">
                  Explore Services
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['P','R','A','V','M'].map((l,i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-cosmic-950 flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: `hsl(${200 + i*20}, 60%, 35%)` }}>{l}</div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-500 text-xs">Trusted by clients across India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Zodiac Wheel */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center h-[500px] lg:h-[600px]">

            {/* Outer decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[480px] h-[480px] rounded-full border border-[#5ee7ff06] animate-spin-slow" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-[#5ee7ff08]" style={{ animation: 'spin-reverse 90s linear infinite' }} />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-[#5ee7ff05] animate-spin-slow" style={{ animationDuration: '150s' }} />
              {/* Pulse rings */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-[#5ee7ff15]" style={{ animation: 'pulse-ring 4s ease-in-out infinite' }} />
              <div className="absolute w-[340px] h-[340px] rounded-full border border-[#5ee7ff08]" style={{ animation: 'pulse-ring 4s ease-in-out 1s infinite' }} />
            </div>

            {/* Zodiac wheel image */}
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden"
              style={{ boxShadow: '0 0 80px rgba(94,231,255,0.25), 0 0 160px rgba(94,231,255,0.1), inset 0 0 60px rgba(0,0,0,0.5)' }}>
              <img src="/astro-wheel.webp" alt="Zodiac Wheel"
                className="w-full h-full object-cover"
                style={{ animation: 'spin-slow 60s linear infinite', filter: 'brightness(0.85) saturate(1.3) contrast(1.1)' }} />
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, transparent 40%, rgba(4,8,15,0.6) 100%)' }} />
            </div>

            {/* Center profile */}
            <div className="absolute w-20 h-20 rounded-full overflow-hidden border-2 z-10"
              style={{ borderColor: 'rgba(94,231,255,0.5)', boxShadow: '0 0 30px rgba(94,231,255,0.3)' }}>
              <img src="/p.jpg" alt="GuptaJi" className="w-full h-full object-cover" />
            </div>

            {/* Planet dots orbiting */}
            {PLANETS.map((p) => {
              const rad = (p.angle * Math.PI) / 180
              const x = Math.cos(rad) * p.r
              const y = Math.sin(rad) * p.r
              return (
                <div key={p.name}
                  className="absolute flex items-center justify-center rounded-full text-[10px] font-semibold z-20"
                  style={{
                    width: p.size, height: p.size,
                    left: `calc(50% + ${x}px - ${p.size/2}px)`,
                    top: `calc(50% + ${y}px - ${p.size/2}px)`,
                    background: 'rgba(8,14,28,0.95)',
                    border: '1px solid rgba(94,231,255,0.3)',
                    color: '#5ee7ff',
                    boxShadow: '0 0 10px rgba(94,231,255,0.2)',
                  }}>
                  {p.name}
                </div>
              )
            })}

            {/* Corner Sanskrit-style decorations */}
            <div className="absolute top-4 right-4 text-[#5ee7ff15] font-display text-4xl select-none">ॐ</div>
            <div className="absolute bottom-4 left-4 text-[#5ee7ff10] font-display text-3xl select-none">卐</div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="relative w-full py-16 border-y border-white/[0.04]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(94,231,255,0.02) 30%, rgba(94,231,255,0.02) 70%, transparent)' }} />
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="text-center relative">
              <div className="font-display text-5xl font-bold mb-2 text-glow-cyan" style={{ color: '#5ee7ff' }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-500 text-sm tracking-wide uppercase">{s.label}</div>
              {i < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10"
                  style={{ background: 'linear-gradient(180deg, transparent, rgba(94,231,255,0.15), transparent)' }} />
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="relative w-full py-28 px-6 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <FadeIn className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-astro opacity-60" />
              <span className="text-astro text-xs font-medium tracking-[0.25em] uppercase">What We Offer</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="section-title max-w-lg">Ancient Wisdom,<br />Modern Guidance</h2>
              <Link to="/services" className="btn-outline text-sm self-start lg:self-auto">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.07}>
                <Link to={s.link} className="glass-card group block p-7 hover:-translate-y-1.5 transition-all duration-400 hover:shadow-card-hover border border-white/[0.05] hover:border-[#5ee7ff18]" style={{ borderRadius: '1.25rem' }}>
                  <div className="service-icon-wrap mb-5">
                    <s.Icon className="w-6 h-6 text-astro" style={{ color: '#5ee7ff' }} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-astro transition-colors" style={{ '--tw-text-opacity': 1 }}>{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-astro text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" style={{ color: '#5ee7ff' }}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="relative w-full py-28 px-6 lg:px-16 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(94,231,255,0.03) 0%, transparent 70%)' }} />
        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <div className="relative flex items-center justify-center">
              {/* Rings */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-[#5ee7ff08]" style={{ animation: 'spin-slow 40s linear infinite' }} />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-[#5ee7ff06]" style={{ animation: 'spin-reverse 30s linear infinite' }} />
              <div className="absolute w-[260px] h-[260px] rounded-full border border-[#5ee7ff10]" />
              {/* Photo */}
              <div className="relative w-56 h-56 rounded-full overflow-hidden animate-float"
                style={{ border: '2px solid rgba(94,231,255,0.3)', boxShadow: '0 0 60px rgba(94,231,255,0.2), 0 0 120px rgba(94,231,255,0.08)' }}>
                <img src="/p.jpg" alt="GuptaJi" className="w-full h-full object-cover" />
              </div>
              {/* Badge */}
              <div className="absolute bottom-8 -right-4 glass-card-bright px-5 py-3 rounded-2xl">
                <p className="font-display text-3xl font-bold text-white">15+</p>
                <p className="text-slate-400 text-xs mt-0.5">Years of Practice</p>
              </div>
              <div className="absolute top-8 -left-4 glass-card-bright px-4 py-3 rounded-2xl">
                <p className="font-display text-2xl font-bold" style={{ color: '#5ee7ff' }}>Vedic</p>
                <p className="text-slate-400 text-xs mt-0.5">Certified Astrologer</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-astro opacity-60" />
              <span className="text-astro text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>About GuptaJi</span>
            </div>
            <h2 className="section-title mb-6">Guided by the Stars,<br />Grounded in Tradition</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              With over 15 years of dedicated practice in Vedic astrology, GuptaJi has guided individuals through life's most pivotal decisions — career transitions, marriage, health challenges, and spiritual growth.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              Trained in the classical Parashari and Jaimini systems, GuptaJi combines ancient Vedic knowledge with a deep understanding of human psychology to deliver insights that are both accurate and actionable.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Certified in Parashari & Jaimini Vedic Astrology',
                'Authentic, energized gemstones sourced directly',
                'Strict confidentiality on all consultations',
                'Personalized remedies — mantras, gems, rituals',
                'Available for in-person & online Zoom sessions',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: '#5ee7ff', boxShadow: '0 0 6px rgba(94,231,255,0.8)' }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/booking" className="btn-primary text-sm">Book a Consultation <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>
        </div>
      </section>

      {/* ── NAVAGRAHAS ── */}
      <section className="relative w-full py-24 px-6 lg:px-16 border-y border-white/[0.04]">
        <div className="w-full max-w-[1400px] mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-astro opacity-60" />
              <span className="text-astro text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>The Nine Planets</span>
              <div className="h-px w-10 bg-astro opacity-60" />
            </div>
            <h2 className="section-title mb-3">Navagrahas</h2>
            <p className="section-subtitle text-base">The nine celestial bodies that govern every aspect of human life in Vedic astrology.</p>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {[
              { name: 'Surya', en: 'Sun',     gem: 'Ruby',          color: '#f97316' },
              { name: 'Chandra', en: 'Moon',  gem: 'Pearl',         color: '#e2e8f0' },
              { name: 'Mangal', en: 'Mars',   gem: 'Red Coral',     color: '#ef4444' },
              { name: 'Budha', en: 'Mercury', gem: 'Emerald',       color: '#22c55e' },
              { name: 'Guru', en: 'Jupiter',  gem: 'Yellow Sapph.', color: '#eab308' },
              { name: 'Shukra', en: 'Venus',  gem: 'Diamond',       color: '#a78bfa' },
              { name: 'Shani', en: 'Saturn',  gem: 'Blue Sapph.',   color: '#3b82f6' },
              { name: 'Rahu', en: 'Rahu',     gem: 'Hessonite',     color: '#8b5cf6' },
              { name: 'Ketu', en: 'Ketu',     gem: "Cat's Eye",     color: '#6b7280' },
            ].map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.05}>
                <div className="glass-card p-4 text-center group hover:-translate-y-1 transition-all duration-300 hover:border-white/10" style={{ borderRadius: '1rem' }}>
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-xs font-bold border"
                    style={{ background: `${p.color}15`, borderColor: `${p.color}40`, color: p.color, boxShadow: `0 0 12px ${p.color}20` }}>
                    {p.en.slice(0,2)}
                  </div>
                  <p className="font-display text-white text-xs font-semibold mb-0.5">{p.name}</p>
                  <p className="text-slate-600 text-[10px]">{p.gem}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative w-full py-28 px-6 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-astro opacity-60" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Client Stories</span>
            </div>
            <h2 className="section-title">What Our Clients Say</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.07}>
                <div className="glass-card p-7 h-full flex flex-col relative overflow-hidden" style={{ borderRadius: '1.25rem' }}>
                  <div className="quote-mark">"</div>
                  <div className="flex gap-0.5 mb-5 relative z-10">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 relative z-10">"{t.text}"</p>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border"
                      style={{ background: 'rgba(94,231,255,0.1)', borderColor: 'rgba(94,231,255,0.2)', color: '#5ee7ff' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{t.name}</p>
                      <p className="text-slate-600 text-xs">{t.city}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full py-24 px-6 lg:px-16">
        <FadeIn>
          <div className="w-full max-w-[1400px] mx-auto relative overflow-hidden rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(30,48,85,0.6) 0%, rgba(10,18,40,0.8) 100%)', border: '1px solid rgba(94,231,255,0.12)', boxShadow: '0 0 80px rgba(94,231,255,0.06)' }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(94,231,255,0.4), transparent)' }} />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(94,231,255,0.2), transparent)' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(94,231,255,0.04) 0%, transparent 70%)' }} />
            </div>
            <div className="relative z-10 py-20 px-8 text-center">
              <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: '#5ee7ff' }}>Begin Your Journey</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Your Stars Are Aligned.<br />
                <span className="shimmer-text">Are You Ready?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Book a live consultation with GuptaJi and receive personalized guidance for your life's most important questions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/booking" className="btn-primary px-8 py-4 text-sm font-semibold">
                  Book a Zoom Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/shop" className="btn-outline px-8 py-4 text-sm">
                  Shop Gemstones
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
