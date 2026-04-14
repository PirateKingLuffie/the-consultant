import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'

const FEATURES = [
  { icon: '🪐', title: 'Planetary Positions', desc: 'Exact placement of all 9 planets in your birth chart.' },
  { icon: '🏠', title: '12 Houses Analysis', desc: 'Deep dive into each house governing every life area.' },
  { icon: '⚡', title: 'Yogas & Doshas', desc: 'Raj Yoga, Gaj Kesari, Manglik, Kaal Sarp and more.' },
  { icon: '📅', title: 'Dasha Predictions', desc: 'Major and minor planetary periods affecting your life.' },
  { icon: '💊', title: 'Remedies', desc: 'Personalized mantras, gemstones, and rituals.' },
  { icon: '📊', title: 'Divisional Charts', desc: 'Navamsa (D9), Dashamsa (D10) and more.' },
]

export default function Kundli() {
  const [form, setForm] = useState({ name: '', dob: '', time: '', place: '', phone: '', email: '', type: 'basic', notes: '' })
  const [loading, setLoading] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.dob || !form.phone) { toast.error('Please fill required fields'); return }
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/mojyvlly', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'New Kundli Request' }),
      })
    } catch (_) {}
    const msg = encodeURIComponent(`🙏 *Kundli Request*\n\n*Name:* ${form.name}\n*DOB:* ${form.dob}\n*Birth Time:* ${form.time || 'Unknown'}\n*Birth Place:* ${form.place}\n*Phone:* ${form.phone}\n*Package:* ${form.type}\n*Notes:* ${form.notes || 'None'}`)
    setLoading(false)
    toast.success('Request sent! Redirecting to WhatsApp…')
    setTimeout(() => window.open(`https://wa.me/919899952569?text=${msg}`, '_blank'), 1000)
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-3">Birth Chart Reading</p>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Kundli Analysis</h1>
          <p className="section-subtitle">Unlock the blueprint of your destiny with a comprehensive Vedic birth chart reading by GuptaJi.</p>
          <Link to="/booking" className="btn-primary mt-6 inline-flex">🎥 Book a Live Kundli Session</Link>
        </FadeIn>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.07}>
              <div className="glass-card border border-white/5 p-6 rounded-2xl hover:border-[#5ee7ff22] hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Packages */}
        <FadeIn className="text-center mb-10">
          <h2 className="section-title">Choose Your Package</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            { id: 'basic', name: 'Basic Kundli Report', price: 499, includes: ['Birth Chart PDF', 'Planetary Analysis', 'Basic Predictions', 'Email Delivery in 48hrs'] },
            { id: 'premium', name: 'Premium Kundli Report', price: 1499, badge: 'Best Value', includes: ['Full Birth Chart', 'Dasha Analysis', 'Yoga & Dosha Report', '5-Year Predictions', 'Remedies', 'WhatsApp Support'] },
          ].map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className={`glass-card border p-7 rounded-2xl relative ${p.badge ? 'border-[#5ee7ff44]' : 'border-white/5'}`}>
                {p.badge && <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-[#5ee7ff] text-cosmic-950">{p.badge}</span>}
                <h3 className="font-display text-xl font-bold text-white mb-1">{p.name}</h3>
                <p className="font-display text-3xl font-bold text-[#5ee7ff] mb-4">₹{p.price}</p>
                <ul className="space-y-2">
                  {p.includes.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="w-4 h-4 text-[#5ee7ff] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Request Form */}
        <FadeIn>
          <div className="glass-card border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Submit Kundli Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Full Name *</label>
                  <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" className="input-field" required />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Date of Birth *</label>
                  <input value={form.dob} onChange={e => set('dob', e.target.value)} type="date" className="input-field" required />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Birth Time</label>
                  <input value={form.time} onChange={e => set('time', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Birth Place</label>
                  <input value={form.place} onChange={e => set('place', e.target.value)} placeholder="City, State, Country" className="input-field" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Phone / WhatsApp *</label>
                  <input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="input-field" required />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Email</label>
                  <input value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" className="input-field" />
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-1.5 block">Package</label>
                <select value={form.type} onChange={e => set('type', e.target.value)} className="input-field">
                  <option value="basic">Basic Report – ₹499</option>
                  <option value="premium">Premium Report – ₹1,499</option>
                  <option value="zoom-30">30-Min Zoom – ₹999</option>
                  <option value="zoom-60">60-Min Zoom – ₹1,799</option>
                </select>
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-1.5 block">Questions / Notes</label>
                <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} placeholder="What areas of life would you like to focus on?" className="input-field resize-none" />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4">
                {loading ? 'Submitting…' : '🙏 Submit via WhatsApp'}
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
