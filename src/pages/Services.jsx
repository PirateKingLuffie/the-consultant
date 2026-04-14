import { Link } from 'react-router-dom'
import { ArrowRight, Check, ScrollText, Gem, Home, Heart, Video, ShoppingBag } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { SHOP_PRODUCTS } from '../data/index'

const consultations = SHOP_PRODUCTS.filter(p => p.category === 'consultation')

const ALL_SERVICES = [
  { Icon: ScrollText, title: 'Kundli Analysis', desc: 'Complete birth chart reading covering all 12 houses, planetary positions, yogas, doshas, dasha periods, and life predictions across career, health, relationships, and finances.', features: ['Birth Chart PDF', 'Planetary Analysis', 'Yoga & Dosha Report', 'Dasha Predictions', 'Personalized Remedies'], link: '/kundli', cta: 'Get Kundli Reading' },
  { Icon: Gem,        title: 'Gemstone Recommendation', desc: 'Personalized Rashi Ratna recommendations based on your birth chart. We source only certified, authentic gemstones energized with Vedic mantras.', features: ['Chart-based Recommendation', 'Certified Authentic Gems', 'Energized & Blessed', 'Wearing Instructions', 'Follow-up Support'], link: '/rashi-ratna', cta: 'Explore Gemstones' },
  { Icon: Home,       title: 'Vaastu Shastra', desc: 'Harmonize your home or office with ancient Vaastu principles. Online consultation with floor plan analysis and directional corrections.', features: ['Floor Plan Analysis', 'Room-wise Guidance', 'Directional Corrections', 'Non-invasive Remedies', 'Zoom Discussion'], link: '/vaastu', cta: 'Book Vaastu Consult' },
  { Icon: Heart,      title: 'Matrimonial & Kundli Milan', desc: 'Comprehensive marriage compatibility analysis. Guna Milan scoring, Manglik Dosha check, and personalized remedies for a harmonious union.', features: ['Two Chart Analysis', 'Guna Milan (36 Points)', 'Manglik Dosha Check', 'Compatibility Report', 'Remedies if Needed'], link: '/matrimonial', cta: 'Check Compatibility' },
  { Icon: Video,      title: 'Live Zoom Consultation', desc: 'One-on-one video session with GuptaJi. Ask anything about your chart, life decisions, career, relationships, or future. Recording provided.', features: ['Live Video Session', 'Screen Share Chart', 'All Topics Covered', 'Session Recording', 'Follow-up Q&A'], link: '/booking', cta: 'Book a Zoom Call' },
  { Icon: ShoppingBag,title: 'Gemstone Shop', desc: 'Buy certified, authentic gemstones in 10 different shapes. All stones are energized, come with a certificate of authenticity, and are delivered pan-India.', features: ['30+ Gemstone Types', '10 Shapes Available', 'Certificate of Authenticity', 'Pan-India Delivery', 'Energized & Blessed'], link: '/shop', cta: 'Shop Now' },
]

const PKG_ICONS = { 'kundli-basic': ScrollText, 'kundli-premium': ScrollText, 'zoom-30': Video, 'zoom-60': Video, 'kundli-milan': Heart, 'vaastu-home': Home }

export default function Services() {
  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto">

        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>What We Offer</span>
          </div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">Comprehensive Vedic astrology services tailored to your unique birth chart and life journey.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28">
          {ALL_SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
              <div className="glass-card border border-white/[0.05] hover:border-[#5ee7ff18] p-7 flex flex-col h-full group hover:-translate-y-1.5 transition-all duration-300" style={{ borderRadius: '1.25rem' }}>
                <div className="service-icon-wrap mb-5">
                  <s.Icon className="w-5 h-5" style={{ color: '#5ee7ff' }} />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-astro transition-colors" style={{ '--tw-text-opacity': 1 }}>{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-slate-400 text-sm">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#5ee7ff' }} />{f}
                    </li>
                  ))}
                </ul>
                <Link to={s.link} className="btn-outline text-sm justify-center">
                  {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Transparent Pricing</span>
          </div>
          <h2 className="section-title mb-3">Consultation Packages</h2>
          <p className="text-slate-500 text-lg max-w-xl">No hidden fees. Pay only for what you need.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {consultations.map((p, i) => {
            const PkgIcon = PKG_ICONS[p.id] || ScrollText
            return (
              <FadeIn key={p.id} delay={i * 0.07}>
                <div className={`glass-card p-7 flex flex-col h-full relative ${p.badge === 'Best Value' || p.badge === 'Recommended' ? 'border border-[#5ee7ff33]' : 'border border-white/[0.05]'}`} style={{ borderRadius: '1.25rem' }}>
                  {p.badge && (
                    <span className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-bold text-cosmic-950" style={{ background: '#5ee7ff' }}>{p.badge}</span>
                  )}
                  <div className="service-icon-wrap mb-5">
                    <PkgIcon className="w-5 h-5" style={{ color: '#5ee7ff' }} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{p.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {p.includes.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-slate-400 text-sm">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: '#5ee7ff' }} />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-display text-3xl font-bold text-white">₹{p.price.toLocaleString()}</span>
                    <span className="text-slate-600 text-sm">/ session</span>
                  </div>
                  <Link to="/booking" className="btn-primary text-sm justify-center">Book Now</Link>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </div>
  )
}
