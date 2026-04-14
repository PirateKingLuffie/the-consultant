import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ScrollText, Star, Video, Heart, Home, ShoppingBag, Gem, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'
import { SHOP_PRODUCTS, ALL_GEMS } from '../data/index'

const ICON_MAP = {
  scroll: ScrollText, star: Star, video: Video, video2: Video,
  heart: Heart, home: Home, beads: ShoppingBag, yantra: ShoppingBag,
}

const CATS = [
  { key: 'all',          label: 'All Products' },
  { key: 'consultation', label: 'Consultations' },
  { key: 'gemstones',    label: 'Gemstones' },
  { key: 'products',     label: 'Sacred Items' },
  { key: 'vaastu',       label: 'Vaastu' },
]

const FEATURED_GEMS = ALL_GEMS.slice(0, 8)

export default function Shop() {
  const [cat, setCat] = useState('all')

  const products = cat === 'all' ? SHOP_PRODUCTS
    : cat === 'gemstones' ? []
    : SHOP_PRODUCTS.filter(p => p.category === cat)

  const showGems = cat === 'all' || cat === 'gemstones'

  return (
    <div className="w-full pt-28 pb-20 px-6 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto">

        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 opacity-60" style={{ background: '#5ee7ff' }} />
            <span className="text-xs font-medium tracking-[0.25em] uppercase" style={{ color: '#5ee7ff' }}>Sacred Store</span>
          </div>
          <h1 className="section-title text-4xl md:text-5xl mb-4">The Consultant Shop</h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">Authentic gemstones, sacred items, and consultation packages — all in one place.</p>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-2 mb-12">
          {CATS.map(c => (
            <button key={c.key} onClick={() => setCat(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${cat === c.key ? 'text-cosmic-950 font-semibold' : 'bg-white/[0.04] text-slate-400 hover:bg-white/[0.07] border border-white/[0.07]'}`}
              style={cat === c.key ? { background: '#5ee7ff', boxShadow: '0 0 20px rgba(94,231,255,0.3)' } : {}}>
              {c.label}
            </button>
          ))}
        </FadeIn>

        {products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {products.map((p, i) => {
              const PIcon = ICON_MAP[p.icon] || ShoppingBag
              return (
                <FadeIn key={p.id} delay={i * 0.06}>
                  <div className={`glass-card p-7 flex flex-col h-full relative ${p.badge ? 'border border-[#5ee7ff33]' : 'border border-white/[0.05]'}`} style={{ borderRadius: '1.25rem' }}>
                    {p.badge && (
                      <span className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-bold text-cosmic-950" style={{ background: '#5ee7ff' }}>{p.badge}</span>
                    )}
                    <div className="service-icon-wrap mb-5">
                      <PIcon className="w-5 h-5" style={{ color: '#5ee7ff' }} />
                    </div>
                    <h3 className="font-display font-semibold text-white text-lg mb-2">{p.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <ul className="space-y-1.5 mb-5">
                      {p.includes.map(f => (
                        <li key={f} className="flex items-center gap-2 text-slate-400 text-xs">
                          <div className="w-1 h-1 rounded-full shrink-0" style={{ background: '#5ee7ff' }} />{f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-baseline gap-1 mb-5">
                      <span className="font-display text-3xl font-bold text-white">₹{p.price.toLocaleString()}</span>
                    </div>
                    {p.category === 'consultation' ? (
                      <Link to="/booking" className="btn-primary text-sm justify-center">Book Now</Link>
                    ) : (
                      <Link to="/contact" className="btn-outline text-sm justify-center">
                        <ShoppingBag className="w-4 h-4" /> Enquire to Purchase
                      </Link>
                    )}
                  </div>
                </FadeIn>
              )
            })}
          </div>
        )}

        {showGems && (
          <>
            <FadeIn className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-white">Gemstones</h2>
              <Link to="/rashi-ratna" className="text-sm flex items-center gap-1 hover:text-white transition-colors" style={{ color: '#5ee7ff' }}>
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {FEATURED_GEMS.map((gem, i) => (
                <FadeIn key={gem.id} delay={i * 0.04}>
                  <Link to={`/rashi-ratna/${gem.id}`}
                    className="glass-card border border-white/[0.05] hover:border-[#5ee7ff22] p-4 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 block">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border border-white/10 group-hover:border-[#5ee7ff33] transition-all">
                      <img src={gem.img} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={e => { e.target.style.display = 'none' }} />
                    </div>
                    <h3 className="text-white text-xs font-medium mb-1 group-hover:text-astro transition-colors leading-tight">{gem.name}</h3>
                    <p className="text-xs font-semibold" style={{ color: '#5ee7ff' }}>₹{gem.price.toLocaleString()}+</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
