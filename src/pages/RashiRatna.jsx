import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { GEMS, ALL_GEMS } from '../data/index'

const CATS = [
  { key: 'all', label: 'All Gems' },
  { key: 'astro', label: 'Astro Gems' },
  { key: 'vedic', label: 'Vedic Gems' },
  { key: 'exclusive', label: 'Exclusive' },
  { key: 'other', label: 'Other Gems' },
]

export default function RashiRatna() {
  const [cat, setCat] = useState('all')
  const [search, setSearch] = useState('')

  const gems = cat === 'all' ? ALL_GEMS : GEMS[cat] || []
  const filtered = gems.filter(g =>
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.planet.toLowerCase().includes(search.toLowerCase()) ||
    g.rashi.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-3">Rashi Ratna</p>
          <h1 className="section-title text-4xl md:text-5xl mb-4">Sacred Gemstones</h1>
          <p className="section-subtitle">Certified, authentic, and energized gemstones recommended by GuptaJi based on your birth chart.</p>
        </FadeIn>

        {/* Search */}
        <FadeIn className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by gem, planet, or rashi…"
              className="input-field pl-11"
            />
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn className="flex flex-wrap gap-2 justify-center mb-12">
          {CATS.map(c => (
            <button key={c.key} onClick={() => setCat(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${cat === c.key ? 'bg-[#5ee7ff] text-cosmic-950 shadow-glow-cyan' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              {c.label}
            </button>
          ))}
        </FadeIn>

        {/* Gems Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((gem, i) => (
            <motion.div key={gem.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }}>
              <Link to={`/rashi-ratna/${gem.id}`}
                className="glass-card border border-white/5 hover:border-[#5ee7ff33] p-4 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-glow-cyan transition-all duration-300 block">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border border-white/10 group-hover:border-[#5ee7ff44] transition-all shadow-[0_0_20px_rgba(94,231,255,0.1)]">
                  <img src={gem.img} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={e => { e.target.style.display = 'none' }} />
                </div>
                <h3 className="text-white text-sm font-medium mb-1 group-hover:text-[#5ee7ff] transition-colors">{gem.name}</h3>
                <p className="text-slate-500 text-xs mb-2">{gem.planet}</p>
                <p className="text-[#5ee7ff] text-xs font-semibold">₹{gem.price.toLocaleString()}+</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">No gemstones found for "{search}"</div>
        )}

        {/* CTA */}
        <FadeIn className="mt-16 glass-card border border-[#5ee7ff22] rounded-2xl p-10 text-center">
          <h3 className="font-display text-2xl font-bold text-white mb-3">Not Sure Which Gem is Right for You?</h3>
          <p className="text-slate-400 mb-6">Book a consultation with GuptaJi and get a personalized gemstone recommendation based on your birth chart.</p>
          <Link to="/booking" className="btn-primary">Book a Consultation</Link>
        </FadeIn>
      </div>
    </div>
  )
}
