import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Globe, Home, Zap, Calendar, Pill, BarChart2, Video, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'

const FEATURES = [
  { Icon: Globe,    title: 'Planetary Positions',  desc: 'Exact placement of all 9 planets across the 12 houses of your birth chart.' },
  { Icon: Home,     title: '12 Houses Analysis',   desc: 'Deep dive into each house governing health, wealth, career, and relationships.' },
  { Icon: Zap,      title: 'Yogas & Doshas',       desc: 'Raj Yoga, Gaj Kesari, Manglik, Kaal Sarp Dosha and more identified and explained.' },
  { Icon: Calendar, title: 'Dasha Predictions',    desc: 'Major and minor planetary periods and how they affect the timing of life events.' },
  { Icon: Pill,     title: 'Remedies',             desc: 'Personalized mantras, gemstone recommendations, and Vedic rituals.' },
  { Icon: BarChart2,title: 'Divisional Charts',    desc: 'Advanced analysis using Navamsa (D9), Dashamsa (D10), and other Varga charts.' },
]

export default function Kundli() {
  const [form, setForm] = useState({ name: '', dob: '', time: '', place: '', phone: '', email: '', type: 'basic', notes: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.dob || !form.phone) { toast.error('Please fill all required fields'); return }
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/mojyvlly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Kundli Request – ${form.name}` }),
      })
      setSubmitted(true)
      toast.success('Request submitted! We will contact you within 24 hours.')
    } catch (_) {
      toast.error('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto">

        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Birth Chart Reading</span>
          </div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Kundli Analysis</h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed mb-6">Unlock the blueprint of your destiny with a comprehensive Vedic birth chart reading by GuptaJi.</p>
          <Link to="/booking" className="btn-primary text-sm">
            <Video className="w-4 h-4" /> Book a Live Kundli Session <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.07}>
              <div className="glass-card border border-white/[0.05] hover:border-[#5ee7ff18] p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="service-icon-wrap mb-4">
                  <f.Icon className="w-5 h-5" style={{ color: '#5ee7ff' }} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Packages</span>
          </div>
          <h2 className="section-title mb-3">Choose Your Package</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {[
            { id: 'basic',   name: 'Basic Kundli Report',   price: 499,  includes: ['Birth Chart PDF', 'Planetary Analysis', 'Basic Predictions', 'Email Delivery in 48hrs'] },
            { id: 'premium', name: 'Premium Kundli Report', price: 1499, badge: 'Best Value', includes: ['Full Birth Chart', 'Dasha Analysis', 'Yoga & Dosha Report', '5-Year Predictions', 'Personalized Remedies', 'WhatsApp Support'] },
          ].map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className={`glass-card p-7 rounded-2xl relative ${p.badge ? 'border border-[#5ee7ff33]' : 'border border-white/[0.05]'}`}>
                {p.badge && <span className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-bold text-cosmic-950" style={{ background: '#5ee7ff' }}>{p.badge}</span>}
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.name}</h3>
                <p className="font-display text-4xl font-bold mb-5" style={{ color: '#5ee7ff' }}>₹{p.price}</p>
                <ul className="space-y-2.5">
                  {p.includes.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-slate-400 text-sm">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#5ee7ff' }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="glass-card border border-white/[0.07] rounded-2xl p-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
              <h2 className="font-display text-2xl font-bold text-white">Submit Kundli Request</h2>
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(94,231,255,0.1)', border: '2px solid rgba(94,231,255,0.3)' }}>
                  <Check className="w-7 h-7" style={{ color: '#5ee7ff' }} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Request Submitted!</h3>
                <p className="text-slate-400 text-sm">GuptaJi will review your details and contact you at <strong className="text-white">{form.phone}</strong> within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Full Name *</label><input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" className="input-field" required /></div>
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Date of Birth *</label><input value={form.dob} onChange={e => set('dob', e.target.value)} type="date" className="input-field" required /></div>
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Time</label><input value={form.time} onChange={e => set('time', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" /></div>
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Place</label><input value={form.place} onChange={e => set('place', e.target.value)} placeholder="City, State, Country" className="input-field" /></div>
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Phone / WhatsApp *</label><input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="input-field" required /></div>
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Email</label><input value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" className="input-field" /></div>
                </div>
                <div>
                  <label className="text-slate-500 text-xs mb-1.5 block">Package</label>
                  <select value={form.type} onChange={e => set('type', e.target.value)} className="input-field">
                    <option value="basic">Basic Report – ₹499</option>
                    <option value="premium">Premium Report – ₹1,499</option>
                    <option value="zoom-30">30-Min Zoom – ₹999</option>
                    <option value="zoom-60">60-Min Zoom – ₹1,799</option>
                  </select>
                </div>
                <div><label className="text-slate-500 text-xs mb-1.5 block">Questions / Notes</label><textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} placeholder="What areas of life would you like to focus on?" className="input-field resize-none" /></div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 text-sm">
                  {loading ? 'Submitting…' : <><Check className="w-4 h-4" /> Submit Request</>}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
