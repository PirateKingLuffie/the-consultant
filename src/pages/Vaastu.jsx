import { Link } from 'react-router-dom'
import { Check, DoorOpen, Flame, BedDouble, Sun, Droplets, Wind, ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

const TIPS = [
  { Icon: DoorOpen,  room: 'Main Entrance',  dir: 'North or East',      desc: 'Welcomes positive energy and prosperity into the home.' },
  { Icon: Flame,     room: 'Kitchen',        dir: 'South-East (Agni)',  desc: 'Aligned with the fire element for health and nourishment.' },
  { Icon: BedDouble, room: 'Master Bedroom', dir: 'South-West',         desc: 'Promotes stability, rest, and strong relationships.' },
  { Icon: Sun,       room: 'Pooja Room',     dir: 'North-East',         desc: 'The most spiritually charged corner for worship.' },
  { Icon: Droplets,  room: 'Bathrooms',      dir: 'West or North-West', desc: 'Keeps negative energy contained and away from living areas.' },
  { Icon: Wind,      room: 'Living Room',    dir: 'North or East',      desc: 'Maximizes natural light and social harmony.' },
]

const ELEMENTS = [
  { name: 'Earth', sanskrit: 'Prithvi', color: '#a16207', desc: 'Stability, grounding, and physical strength' },
  { name: 'Water', sanskrit: 'Jal',     color: '#0369a1', desc: 'Flow, emotions, and abundance' },
  { name: 'Fire',  sanskrit: 'Agni',    color: '#dc2626', desc: 'Energy, transformation, and passion' },
  { name: 'Air',   sanskrit: 'Vayu',    color: '#0891b2', desc: 'Movement, communication, and intellect' },
  { name: 'Space', sanskrit: 'Akasha',  color: '#7c3aed', desc: 'Expansion, consciousness, and spirit' },
]

const FAQS = [
  { q: 'Can Vaastu be applied to existing buildings?', a: 'Yes. With appropriate remedies and adjustments, Vaastu can improve energy even in existing structures without demolition.' },
  { q: 'Is Vaastu relevant for apartments?', a: 'Absolutely. Many Vaastu principles can be adapted for flats and modern homes using non-invasive corrections.' },
  { q: 'How soon can results be seen?', a: 'Many clients notice positive changes within weeks of implementing Vaastu corrections.' },
  { q: 'Do I need to demolish walls?', a: 'Usually not. Most corrections involve rearrangement, colors, symbols, or objects — no construction needed.' },
]

export default function Vaastu() {
  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto">

        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Ancient Architecture Science</span>
          </div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Vaastu Shastra</h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed mb-6">Harmonize your living and working spaces with the ancient Indian science of spatial energy and directional alignment.</p>
          <Link to="/booking" className="btn-primary text-sm">
            Book Vaastu Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* What is Vaastu */}
        <FadeIn className="glass-card border border-white/[0.05] rounded-2xl p-8 mb-6">
          <h2 className="font-display text-2xl font-bold text-white mb-4">What is Vaastu Shastra?</h2>
          <p className="text-slate-400 leading-relaxed mb-6">Vaastu Shastra is the ancient Indian science of architecture and spatial harmony. Rooted in the Vedas, it prescribes principles for designing buildings that promote health, prosperity, and well-being by integrating the five elements — Panchabhutas — with directional energies.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {ELEMENTS.map(el => (
              <div key={el.name} className="rounded-xl p-4 border border-white/[0.05]" style={{ background: `${el.color}10` }}>
                <div className="w-8 h-8 rounded-full mb-2 flex items-center justify-center text-xs font-bold border" style={{ background: `${el.color}20`, borderColor: `${el.color}40`, color: el.color }}>
                  {el.name.slice(0, 2)}
                </div>
                <p className="text-white text-sm font-medium mb-0.5">{el.name}</p>
                <p className="text-slate-600 text-[10px]">{el.sanskrit}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Room Tips */}
        <FadeIn className="mb-6">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Essential Vaastu Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPS.map((t) => (
              <div key={t.room} className="glass-card border border-white/[0.05] hover:border-[#5ee7ff18] p-5 rounded-xl flex items-start gap-4 transition-all hover:-translate-y-1 duration-300">
                <div className="service-icon-wrap shrink-0">
                  <t.Icon className="w-5 h-5" style={{ color: '#5ee7ff' }} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-0.5">{t.room}</h3>
                  <p className="text-xs font-medium mb-1.5" style={{ color: '#5ee7ff' }}>{t.dir}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Benefits */}
        <FadeIn className="glass-card border border-white/[0.05] rounded-2xl p-8 mb-6">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Benefits of Vaastu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {['Promotes peace, prosperity, and happiness in the household', 'Enhances health and physical well-being of all occupants', 'Removes obstacles in career, business, and finances', 'Attracts positive energy, opportunities, and abundance', 'Reduces stress, conflicts, and interpersonal negativity', 'Improves relationships, harmony, and spiritual growth'].map(b => (
              <div key={b} className="flex items-start gap-3 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#5ee7ff' }} />{b}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* FAQ */}
        <FadeIn className="mb-10">
          <h2 className="font-display text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map(f => (
              <div key={f.q} className="glass-card border border-white/[0.05] rounded-xl p-5">
                <h3 className="text-white font-medium mb-2 text-sm">{f.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="glass-card border border-[#5ee7ff18] rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(94,231,255,0.04), transparent 70%)' }} />
            <h3 className="font-display text-2xl font-bold text-white mb-3 relative z-10">Get a Personalized Vaastu Consultation</h3>
            <p className="text-slate-500 mb-6 relative z-10 max-w-md mx-auto">Every property is unique. Book a session with GuptaJi for targeted remedies and lasting results.</p>
            <Link to="/booking" className="btn-primary text-sm relative z-10">Book Now <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
