import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Video, Check, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'
import { CONSULTATION_TYPES, TIME_SLOTS } from '../data/index'

function addDays(date, days) { const d = new Date(date); d.setDate(d.getDate() + days); return d }

const STEPS = ['Service', 'Date & Time', 'Your Details', 'Confirm']

export default function Booking() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    service: '', date: '', time: '',
    name: '', phone: '', email: '',
    dob: '', birthTime: '', birthPlace: '', notes: '',
  })

  const today = new Date()
  const dates = Array.from({ length: 14 }, (_, i) => addDays(today, i + 1))
  const selectedService = CONSULTATION_TYPES.find(c => c.id === form.service)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const canNext = [
    form.service !== '',
    form.date !== '' && form.time !== '',
    form.name !== '' && form.phone !== '' && form.email !== '',
    true,
  ]

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `New Booking: ${selectedService?.label}`,
          service: selectedService?.label,
          date: form.date, time: form.time,
          name: form.name, phone: form.phone, email: form.email,
          dob: form.dob, birthTime: form.birthTime, birthPlace: form.birthPlace,
          notes: form.notes, amount: `₹${selectedService?.price}`,
        }),
      })
    } catch (_) {}
    setLoading(false)
    setSubmitted(true)
    toast.success('Booking confirmed!')
  }

  if (submitted) return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16 flex items-center justify-center min-h-screen">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="glass-card border border-[#5ee7ff22] rounded-3xl p-12 text-center max-w-lg w-full">
        <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: 'rgba(94,231,255,0.1)', border: '2px solid rgba(94,231,255,0.3)' }}>
          <Check className="w-8 h-8" style={{ color: '#5ee7ff' }} />
        </div>
        <h2 className="font-display text-2xl font-bold text-white mb-3">Booking Confirmed!</h2>
        <p className="text-slate-400 mb-2">Thank you, <span className="text-white font-medium">{form.name}</span>.</p>
        <p className="text-slate-500 text-sm mb-6">
          Your <strong className="text-slate-300">{selectedService?.label}</strong> is booked for <strong className="text-slate-300">{form.date}</strong> at <strong className="text-slate-300">{form.time} IST</strong>.
          A confirmation and Zoom link will be sent to <strong className="text-slate-300">{form.email}</strong> within 2 hours.
        </p>
        <div className="glass-card border border-white/5 rounded-xl p-4 mb-6 text-left space-y-2">
          {[
            ['Service', selectedService?.label],
            ['Date', form.date],
            ['Time', `${form.time} IST`],
            ['Amount', `₹${selectedService?.price?.toLocaleString()}`],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-sm">
              <span className="text-slate-500">{k}</span>
              <span className="text-white font-medium">{v}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-xs">For urgent queries, WhatsApp us at +91-9899952569</p>
      </motion.div>
    </div>
  )

  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <FadeIn className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Live Consultation</span>
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
          </div>
          <h1 className="section-title text-4xl mb-3">Book a Zoom Call</h1>
          <p className="text-slate-500">Schedule a one-on-one session with GuptaJi</p>
        </FadeIn>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-1 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${i < step ? 'text-cosmic-950' : i === step ? 'border-2 text-astro' : 'border border-white/10 text-slate-600'}`}
                style={i < step ? { background: '#5ee7ff' } : i === step ? { borderColor: '#5ee7ff', color: '#5ee7ff' } : {}}>
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:block mr-1 ${i === step ? 'text-white' : 'text-slate-600'}`}>{s}</span>
              {i < STEPS.length - 1 && <div className={`w-6 h-px mx-1 ${i < step ? '' : 'bg-white/10'}`} style={i < step ? { background: '#5ee7ff' } : {}} />}
            </div>
          ))}
        </div>

        <div className="glass-card border border-white/[0.07] rounded-2xl p-8">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>

              {/* Step 0 */}
              {step === 0 && (
                <div>
                  <h2 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Video className="w-5 h-5" style={{ color: '#5ee7ff' }} /> Choose a Service
                  </h2>
                  <div className="space-y-2.5">
                    {CONSULTATION_TYPES.map(c => (
                      <button key={c.id} onClick={() => set('service', c.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left ${form.service === c.id ? 'border-[#5ee7ff44] bg-[#5ee7ff08]' : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'}`}>
                        <span className={`font-medium text-sm ${form.service === c.id ? 'text-white' : 'text-slate-400'}`}>{c.label}</span>
                        <span className="font-display font-bold text-white text-sm">₹{c.price.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5" style={{ color: '#5ee7ff' }} /> Pick a Date
                  </h2>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-8">
                    {dates.map(d => {
                      const str = d.toISOString().split('T')[0]
                      const active = form.date === str
                      return (
                        <button key={str} onClick={() => set('date', str)}
                          className={`p-2.5 rounded-xl border text-center transition-all ${active ? 'border-[#5ee7ff44] bg-[#5ee7ff08]' : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'}`}>
                          <p className={`text-[10px] uppercase ${active ? 'text-astro' : 'text-slate-600'}`} style={active ? { color: '#5ee7ff' } : {}}>{d.toLocaleDateString('en-IN', { weekday: 'short' })}</p>
                          <p className={`font-bold text-sm ${active ? 'text-white' : 'text-slate-400'}`}>{d.getDate()}</p>
                          <p className={`text-[10px] ${active ? 'text-slate-300' : 'text-slate-600'}`}>{d.toLocaleDateString('en-IN', { month: 'short' })}</p>
                        </button>
                      )
                    })}
                  </div>
                  <h2 className="font-display text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" style={{ color: '#5ee7ff' }} /> Pick a Time (IST)
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map(t => {
                      const active = form.time === t
                      return (
                        <button key={t} onClick={() => set('time', t)}
                          className={`py-2.5 rounded-xl border text-sm transition-all ${active ? 'border-[#5ee7ff44] bg-[#5ee7ff08] text-white' : 'border-white/[0.07] text-slate-500 hover:border-white/15 hover:text-slate-300'}`}>
                          {t}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <User className="w-5 h-5" style={{ color: '#5ee7ff' }} /> Your Details
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label className="text-slate-500 text-xs mb-1.5 block">Full Name *</label><input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" className="input-field" /></div>
                      <div><label className="text-slate-500 text-xs mb-1.5 block">Phone / WhatsApp *</label><input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" className="input-field" /></div>
                    </div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Email *</label><input value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" className="input-field" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div><label className="text-slate-500 text-xs mb-1.5 block">Date of Birth</label><input value={form.dob} onChange={e => set('dob', e.target.value)} type="date" className="input-field" /></div>
                      <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Time</label><input value={form.birthTime} onChange={e => set('birthTime', e.target.value)} placeholder="e.g. 10:30 AM" className="input-field" /></div>
                      <div><label className="text-slate-500 text-xs mb-1.5 block">Birth Place</label><input value={form.birthPlace} onChange={e => set('birthPlace', e.target.value)} placeholder="City, State" className="input-field" /></div>
                    </div>
                    <div><label className="text-slate-500 text-xs mb-1.5 block">Questions / Notes</label><textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3} placeholder="What would you like to discuss?" className="input-field resize-none" /></div>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-xl font-semibold text-white mb-6">Confirm Booking</h2>
                  <div className="space-y-3 mb-6">
                    {[
                      ['Service', selectedService?.label],
                      ['Date', form.date],
                      ['Time', `${form.time} IST`],
                      ['Name', form.name],
                      ['Phone', form.phone],
                      ['Email', form.email],
                      ['Amount', `₹${selectedService?.price?.toLocaleString()}`],
                    ].filter(([, v]) => v).map(([k, v]) => (
                      <div key={k} className="flex justify-between py-2.5 border-b border-white/[0.05]">
                        <span className="text-slate-500 text-sm">{k}</span>
                        <span className="text-white text-sm font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-4 mb-2 text-sm text-slate-500 border border-white/[0.05]" style={{ background: 'rgba(94,231,255,0.03)' }}>
                    A Zoom link will be sent to your email within 2 hours of booking confirmation.
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-8">
            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="btn-outline flex-1 justify-center text-sm">← Back</button>
            )}
            {step < 3 ? (
              <button onClick={() => setStep(s => s + 1)} disabled={!canNext[step]}
                className={`flex-1 justify-center text-sm ${canNext[step] ? 'btn-primary' : 'btn-outline opacity-30 cursor-not-allowed'}`}>
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={loading} className="btn-primary flex-1 justify-center text-sm">
                {loading ? 'Confirming…' : <><Check className="w-4 h-4" /> Confirm Booking</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
