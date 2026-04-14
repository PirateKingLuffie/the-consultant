import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'

export default function Matrimonial() {
  const [form, setForm] = useState({
    name1: '', dob1: '', time1: '', place1: '',
    name2: '', dob2: '', time2: '', place2: '',
    phone: '', email: '', notes: '',
  })
  const [loading, setLoading] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name1 || !form.dob1 || !form.phone) { toast.error('Please fill required fields'); return }
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: 'Kundli Milan Request' }),
      })
    } catch (_) {}
    const msg = encodeURIComponent(
      `🙏 *Kundli Milan Request*\n\n` +
      `*Person 1:* ${form.name1} | DOB: ${form.dob1} | Time: ${form.time1 || 'Unknown'} | Place: ${form.place1}\n` +
      `*Person 2:* ${form.name2 || 'Not provided'} | DOB: ${form.dob2 || 'Not provided'}\n\n` +
      `*Contact:* ${form.phone} | ${form.email}\n*Notes:* ${form.notes || 'None'}`
    )
    setLoading(false)
    toast.success('Request sent! Redirecting to WhatsApp…')
    setTimeout(() => window.open(`https://wa.me/919899952569?text=${msg}`, '_blank'), 1000)
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-3">Marriage Compatibility</p>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Matrimonial Services</h1>
          <p className="section-subtitle">Find your perfect life partner with the guidance of Vedic astrology and Kundli Milan.</p>
        </FadeIn>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {[
            { icon: '💑', title: 'Kundli Milan', desc: 'Complete 36-point Guna Milan analysis for marriage compatibility.', includes: ['Guna Milan Score', 'Manglik Dosha Check', 'Compatibility Report', 'Remedies if needed'] },
            { icon: '🔮', title: 'Marriage Timing', desc: 'Predict the most auspicious time for marriage based on your Dasha.', includes: ['Dasha Analysis', 'Transit Predictions', 'Muhurta Suggestions', 'Detailed Report'] },
            { icon: '💊', title: 'Dosha Remedies', desc: 'Personalized remedies for Manglik, Kaal Sarp, and other marriage doshas.', includes: ['Dosha Identification', 'Mantra Remedies', 'Gemstone Suggestions', 'Puja Guidance'] },
            { icon: '🤝', title: 'Partner Search', desc: 'Astrological guidance on partner qualities and compatibility factors.', includes: ['Ideal Partner Profile', 'Compatibility Factors', 'Timing Guidance', 'Confidential Handling'] },
          ].map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="glass-card border border-white/5 hover:border-[#5ee7ff22] p-6 rounded-2xl transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.includes.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-xs">
                      <Check className="w-3.5 h-3.5 text-[#5ee7ff] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Form */}
        <FadeIn>
          <div className="glass-card border border-white/10 rounded-2xl p-8">
            <h2 className="font-display text-2xl font-bold text-white mb-2">Submit Kundli Milan Request</h2>
            <p className="text-slate-400 text-sm mb-6">All information is kept strictly confidential.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-[#5ee7ff] font-medium mb-4 text-sm uppercase tracking-wider">Person 1 (Required)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Full Name *</label><input value={form.name1} onChange={e => set('name1', e.target.value)} placeholder="Name" className="input-field" required /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Date of Birth *</label><input value={form.dob1} onChange={e => set('dob1', e.target.value)} type="date" className="input-field" required /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Birth Time</label><input value={form.time1} onChange={e => set('time1', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Birth Place</label><input value={form.place1} onChange={e => set('place1', e.target.value)} placeholder="City, State" className="input-field" /></div>
                </div>
              </div>
              <div>
                <h3 className="text-[#5ee7ff] font-medium mb-4 text-sm uppercase tracking-wider">Person 2 (If Available)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Full Name</label><input value={form.name2} onChange={e => set('name2', e.target.value)} placeholder="Name" className="input-field" /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Date of Birth</label><input value={form.dob2} onChange={e => set('dob2', e.target.value)} type="date" className="input-field" /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Birth Time</label><input value={form.time2} onChange={e => set('time2', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Birth Place</label><input value={form.place2} onChange={e => set('place2', e.target.value)} placeholder="City, State" className="input-field" /></div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-slate-400 text-xs mb-1.5 block">Phone / WhatsApp *</label><input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="input-field" required /></div>
                <div><label className="text-slate-400 text-xs mb-1.5 block">Email</label><input value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" className="input-field" /></div>
              </div>
              <div><label className="text-slate-400 text-xs mb-1.5 block">Additional Notes</label><textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} placeholder="Any specific concerns or questions?" className="input-field resize-none" /></div>
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
