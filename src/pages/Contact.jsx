import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const IgIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const FbIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const YtIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.message) { toast.error('Please fill required fields'); return }
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/mojyvlly', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Contact: ${form.subject}` }),
      })
      if (res.ok) { toast.success('Message sent! We\'ll reply within 24 hours.'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }
      else toast.error('Something went wrong. Please try WhatsApp.')
    } catch (_) { toast.error('Something went wrong. Please try WhatsApp.') }
    setLoading(false)
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-3">Get in Touch</p>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="section-subtitle">Reach out for consultations, gemstone enquiries, or any questions. We respond within 24 hours.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <FadeIn direction="right">
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone / WhatsApp', value: '+91-9899952569', href: 'tel:+919899952569' },
                { icon: Mail, label: 'Email', value: 'consultantguptaji@gmail.com', href: 'mailto:consultantguptaji@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Delhi, India', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass-card border border-white/5 rounded-xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#5ee7ff15] border border-[#5ee7ff33] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#5ee7ff]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                    {href ? <a href={href} className="text-white font-medium hover:text-[#5ee7ff] transition-colors">{value}</a>
                      : <p className="text-white font-medium">{value}</p>}
                  </div>
                </div>
              ))}

              <div className="glass-card border border-white/5 rounded-xl p-5">
                <p className="text-slate-400 text-sm mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://instagram.com/the.consultant_guptaji', icon: IgIcon, label: 'Instagram' },
                    { href: 'https://www.facebook.com/profile.php?id=61578329035171', icon: FbIcon, label: 'Facebook' },
                    { href: 'https://youtube.com/@theconsultant-guptaji', icon: YtIcon, label: 'YouTube' },
                  ].map(({ href, icon: Icon, label }) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 text-sm transition-all">
                      <Icon className="w-4 h-4" />{label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card border border-white/5 rounded-xl p-5">
                <h3 className="text-white font-medium mb-2 text-sm">Privacy Notice</h3>
                <p className="text-slate-500 text-xs leading-relaxed">All personal information shared with us is kept strictly private and used solely to provide astrological guidance. We do not share your data with third parties.</p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left">
            <div className="glass-card border border-white/10 rounded-2xl p-7">
              <h2 className="font-display text-xl font-bold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Name *</label><input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" className="input-field" required /></div>
                  <div><label className="text-slate-400 text-xs mb-1.5 block">Phone</label><input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 XXXXX" className="input-field" /></div>
                </div>
                <div><label className="text-slate-400 text-xs mb-1.5 block">Email</label><input value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" type="email" className="input-field" /></div>
                <div><label className="text-slate-400 text-xs mb-1.5 block">Subject</label><input value={form.subject} onChange={e => set('subject', e.target.value)} placeholder="e.g. Kundli Reading Enquiry" className="input-field" /></div>
                <div><label className="text-slate-400 text-xs mb-1.5 block">Message *</label><textarea value={form.message} onChange={e => set('message', e.target.value)} rows={5} placeholder="How can we help you?" className="input-field resize-none" required /></div>
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">
                  {loading ? 'Sending…' : '✉️ Send Message'}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
