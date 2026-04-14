import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

const TIPS = [
  { dir: 'North / East', room: 'Main Entrance', icon: '🚪' },
  { dir: 'South-East', room: 'Kitchen', icon: '🍳' },
  { dir: 'South-West', room: 'Master Bedroom', icon: '🛏️' },
  { dir: 'North-East', room: 'Pooja Room', icon: '🪔' },
  { dir: 'West / North-West', room: 'Bathrooms', icon: '🚿' },
  { dir: 'North / East', room: 'Living Room', icon: '🛋️' },
]

const FAQS = [
  { q: 'Can Vaastu be applied to existing buildings?', a: 'Yes. With appropriate remedies and adjustments, Vaastu can improve energy even in existing structures without demolition.' },
  { q: 'Is Vaastu relevant for apartments?', a: 'Absolutely. Many Vaastu principles can be adapted for flats and modern homes using non-invasive corrections.' },
  { q: 'How soon can results be seen?', a: 'Many clients notice positive changes within weeks of implementing Vaastu corrections.' },
  { q: 'Do I need to demolish walls?', a: 'Usually not. Most corrections involve rearrangement, colors, symbols, or objects — no construction needed.' },
]

export default function Vaastu() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-3">Ancient Architecture Science</p>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Vaastu Shastra</h1>
          <p className="section-subtitle">Harmonize your living and working spaces with the ancient Indian science of spatial energy.</p>
          <Link to="/booking" className="btn-primary mt-6 inline-flex">Book Vaastu Consultation</Link>
        </FadeIn>

        {/* What is Vaastu */}
        <FadeIn className="glass-card border border-white/5 rounded-2xl p-8 mb-8">
          <h2 className="font-display text-2xl font-bold text-white mb-4">What is Vaastu Shastra?</h2>
          <p className="text-slate-400 leading-relaxed mb-4">Vaastu Shastra is the ancient Indian science of architecture and spatial harmony. Rooted in the Vedas, it prescribes principles for designing buildings that promote health, prosperity, and well-being by integrating the five elements — Earth, Water, Fire, Air, and Space.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
            {['🌍 Earth', '💧 Water', '🔥 Fire', '💨 Air', '🌌 Space'].map(e => (
              <div key={e} className="bg-white/5 rounded-xl p-3 text-center text-slate-300 text-sm border border-white/5">{e}</div>
            ))}
          </div>
        </FadeIn>

        {/* Room Tips */}
        <FadeIn className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Essential Vaastu Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPS.map((t, i) => (
              <div key={t.room} className="glass-card border border-white/5 hover:border-[#5ee7ff22] p-5 rounded-xl flex items-start gap-4 transition-all">
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <h3 className="text-white font-medium mb-1">{t.room}</h3>
                  <p className="text-[#5ee7ff] text-sm">{t.dir}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Benefits */}
        <FadeIn className="glass-card border border-white/5 rounded-2xl p-8 mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Benefits of Vaastu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {['Promotes peace, prosperity, and happiness', 'Enhances health and well-being', 'Removes obstacles in career and finances', 'Attracts positive energy and opportunities', 'Reduces stress, conflicts, and negativity', 'Improves relationships and harmony'].map(b => (
              <div key={b} className="flex items-center gap-3 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-[#5ee7ff] shrink-0" />{b}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* FAQ */}
        <FadeIn className="mb-16">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map(f => (
              <div key={f.q} className="glass-card border border-white/5 rounded-xl p-5">
                <h3 className="text-[#5ee7ff] font-medium mb-2">{f.q}</h3>
                <p className="text-slate-400 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="glass-card border border-[#5ee7ff22] rounded-2xl p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">Get a Personalized Vaastu Consultation</h3>
          <p className="text-slate-400 mb-6">Every property is unique. Book a session with GuptaJi for targeted remedies and lasting results.</p>
          <Link to="/booking" className="btn-primary">Book Now</Link>
        </FadeIn>
      </div>
    </div>
  )
}
