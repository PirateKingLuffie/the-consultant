import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'
import { SHOP_PRODUCTS, ALL_GEMS } from '../data/index'

const CATS = [
  { key: 'all', label: 'All Products' },
  { key: 'consultation', label: 'Consultations' },
  { key: 'gemstones', label: 'Gemstones' },
  { key: 'products', label: 'Sacred Items' },
  { key: 'vaastu', label: 'Vaastu' },
]

const FEATURED_GEMS = ALL_GEMS.slice(0, 8)

export default function Shop() {
  const [cat, setCat] = useState('all')

  const products = cat === 'all' ? SHOP_PRODUCTS
    : cat === 'gemstones' ? []
    : SHOP_PRODUCTS.filter(p => p.category === cat)

  const showGems = cat === 'all' || cat === 'gemstones'

  const handleBuy = (product) => {
    const msg = encodeURIComponent(`Hello GuptaJi! I want to purchase:\n\n*${product.name}*\nPrice: ₹${product.price.toLocaleString()}\n\nPlease guide me on the next steps.`)
    window.open(`https://wa.me/919899952569?text=${msg}`, '_blank')
    toast.success('Redirecting to WhatsApp!')
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-3">Sacred Store</p>
          <h1 className="section-title text-4xl md:text-5xl mb-4">The Consultant Shop</h1>
          <p className="section-subtitle">Authentic gemstones, sacred items, and consultation packages — all in one place.</p>
        </FadeIn>

        {/* Filter */}
        <FadeIn className="flex flex-wrap gap-2 justify-center mb-12">
          {CATS.map(c => (
            <button key={c.key} onClick={() => setCat(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${cat === c.key ? 'bg-[#5ee7ff] text-cosmic-950 shadow-glow-cyan' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'}`}>
              {c.label}
            </button>
          ))}
        </FadeIn>

        {/* Consultation / Sacred Products */}
        {products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {products.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.07}>
                <div className={`glass-card border p-7 rounded-2xl flex flex-col h-full relative ${p.badge ? 'border-[#5ee7ff44]' : 'border-white/5'}`}>
                  {p.badge && (
                    <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-[#5ee7ff] text-cosmic-950">{p.badge}</span>
                  )}
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{p.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.includes.map(f => (
                      <li key={f} className="flex items-center gap-2 text-slate-300 text-xs">
                        <Check className="w-3.5 h-3.5 text-[#5ee7ff] shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-bold text-white">₹{p.price.toLocaleString()}</span>
                  </div>
                  {p.category === 'consultation' ? (
                    <Link to="/booking" className="btn-primary text-sm justify-center">Book Now</Link>
                  ) : (
                    <button onClick={() => handleBuy(p)} className="btn-primary text-sm justify-center">
                      <ShoppingCart className="w-4 h-4" /> Buy via WhatsApp
                    </button>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Gemstones Grid */}
        {showGems && (
          <>
            <FadeIn className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-white">Gemstones</h2>
              <Link to="/rashi-ratna" className="text-[#5ee7ff] text-sm hover:underline">View All →</Link>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {FEATURED_GEMS.map((gem, i) => (
                <FadeIn key={gem.id} delay={i * 0.05}>
                  <Link to={`/rashi-ratna/${gem.id}`}
                    className="glass-card border border-white/5 hover:border-[#5ee7ff33] p-4 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-glow-cyan transition-all duration-300 block">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border border-white/10 group-hover:border-[#5ee7ff44] transition-all">
                      <img src={gem.img} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={e => { e.target.style.display = 'none' }} />
                    </div>
                    <h3 className="text-white text-sm font-medium mb-1 group-hover:text-[#5ee7ff] transition-colors">{gem.name}</h3>
                    <p className="text-slate-500 text-xs mb-2">{gem.planet}</p>
                    <p className="text-[#5ee7ff] text-xs font-semibold">₹{gem.price.toLocaleString()}+</p>
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
