import { useState } from 'react'
import { Check, Heart, Clock, Shield, Users, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'

const SERVICES = [
  { Icon: Heart,  title: 'Kundli Milan',      desc: 'Complete 36-point Guna Milan analysis for marriage compatibility.', includes: ['Guna Milan Score', 'Manglik Dosha Check', 'Compatibility Report', 'Remedies if needed'] },
  { Icon: Clock,  title: 'Marriage Timing',   desc: 'Predict the most auspicious time for marriage based on your Dasha and transits.', includes: ['Dasha Analysis', 'Transit Predictions', 'Muhurta Suggestions', 'Detailed Report'] },
  { Icon: Shield, title: 'Dosha Remedies',    desc: 'Personalized remedies for Manglik, Kaal Sarp, and other marriage doshas.', includes: ['Dosha Identification', 'Mantra Remedies', 'Gemstone Suggestions', 'Puja Guidance'] },
  { Icon: Users,  title: 'Partner Guidance',  desc: 'Astrological guidance on ideal partner qualities and compatibility factors.', includes: ['Ideal Partner Profile', 'Compatibility Factors', 'Timing Guidance', 'Confidential Handling'] },
]

export default function Matrimonial() {
  const [form, setForm] = useState({ name1: '', dob1: '', time1: '', place1: '', name2: '', dob2: '', time2: '', place2: '', phone: '', email: '', notes: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name1 || !form.dob1 || !form.phone) { toast.error('Please fill all required fields'); return }
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/mojyvlly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Kundli Milan Request – ${form.name1}` }),
      })
      setSubmitted(true)
      toast.success('Request submitted! GuptaJi will contact you within 24 hours.')
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
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Marriage Compatibility</span>
          </div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Matrimonial Services</h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">Find your perfect life partner with the guidance of Vedic astrology and Kundli Milan.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
              <div className="glass-card border border-white/[0.05] hover:border-[#5ee7ff18] p-6 rounded-2xl transition-all hover:-translate-y-1 duration-300">
                <div className="service-icon-wrap mb-4">
                  <s.Icon className="w-5 h-5" style={{ color: '#5ee7ff' }} />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.includes.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-400 text-xs">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#5ee7ff' }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="glass-card border border-white/[0.07] rounded-2xl p-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
              <h2 className="font-display text-2xl font-bold text-white">Submit Kundli Milan Request</h2>
            </div>
            <p className="text-slate-500 text-sm mb-8 ml-[52px]">All information is kept strictly confidential.</p>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(94,231,255,0.1)', border: '2px solid rgba(94,231,255,0.3)' }}>
                  <Check className="w-7 h-7" style={{ color: '#5ee7ff' }} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Request Submitted!</h3>
                <p className="text-slate-400 text-sm">GuptaJi will review the charts and contact you at <strong className="text-white">{form.phone}</strong> within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#5ee7ff' }}>Person 1 — Required</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Full Name *</label><input value={form.name1} onChange={e => set('name1', e.target.value)} placeholder="Name" className="input-field" required /></div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Date of Birth *</label><input value={form.dob1} onChange={e => set('dob1', e.target.value)} type="date" className="input-field" required /></div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Time</label><input value={form.time1} onChange={e => set('time1', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" /></div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Place</label><input value={form.place1} onChange={e => set('place1', e.target.value)} placeholder="City, State" className="input-field" /></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#5ee7ff' }}>Person 2 — If Available</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Full Name</label><input value={form.name2} onChange={e => set('name2', e.target.value)} placeholder="Name" className="input-field" /></div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Date of Birth</label><input value={form.dob2} onChange={e => set('dob2', e.target.value)} type="date" className="input-field" /></div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Time</label><input value={form.time2} onChange={e => set('time2', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" /></div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Place</label><input value={form.place2} onChange={e => set('place2', e.target.value)} placeholder="City, State" className="input-field" /></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Phone / WhatsApp *</label><input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="input-field" required /></div>
                  <div><label className="text-slate-500 text-xs mb-1.5 block">Email</label><input value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" className="input-field" /></div>
                </div>
                <div><label className="text-slate-500 text-xs mb-1.5 block">Additional Notes</label><textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} placeholder="Any specific concerns or questions?" className="input-field resize-none" /></div>
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
