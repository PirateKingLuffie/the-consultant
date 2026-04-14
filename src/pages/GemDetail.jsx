import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Check, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'
import { FadeIn } from '../components/FadeIn'
import { ALL_GEMS, GEM_SHAPES } from '../data/index'

export default function GemDetail() {
  const { id } = useParams()
  const gem = ALL_GEMS.find(g => g.id === id)
  const [shape, setShape] = useState(GEM_SHAPES[0])
  const [qty, setQty] = useState(1)

  if (!gem) return (
    <div className="pt-32 text-center text-slate-400">
      <p className="text-xl mb-4">Gemstone not found.</p>
      <Link to="/rashi-ratna" className="btn-outline">← Back to Gems</Link>
    </div>
  )

  const shapePrice = { Oval: 0, Round: 200, Pear: 300, 'Emerald Cut': 400, Cushion: 500, Heart: 600, Marquise: 700, Princess: 800, Trillion: 900, Radiant: 1000 }
  const total = (gem.price + (shapePrice[shape] || 0)) * qty

  const handleOrder = () => {
    const msg = encodeURIComponent(`Hello GuptaJi! I want to order:\n\n💎 *${gem.name}*\nShape: ${shape}\nCarat: ${gem.carat}\nQty: ${qty}\nTotal: ₹${total.toLocaleString()}\n\nPlease confirm availability.`)
    window.open(`https://wa.me/919899952569?text=${msg}`, '_blank')
    toast.success('Redirecting to WhatsApp!')
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <Link to="/rashi-ratna" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#5ee7ff] text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Gemstones
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <FadeIn direction="right">
            <div className="glass-card border border-white/10 rounded-3xl p-8 flex items-center justify-center aspect-square">
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="w-64 h-64 rounded-full overflow-hidden border-2 border-[#5ee7ff44] shadow-glow-cyan">
                <img src={gem.img} alt={gem.name} className="w-full h-full object-cover"
                  onError={e => { e.target.src = '/gems/Ruby.avif' }} />
              </motion.div>
            </div>
          </FadeIn>

          {/* Details */}
          <FadeIn direction="left">
            <div>
              <p className="text-[#5ee7ff] text-sm font-medium tracking-widest uppercase mb-2">{gem.planet} Stone</p>
              <h1 className="font-display text-4xl font-bold text-white mb-2">{gem.name}</h1>
              <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}</div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Planet', value: gem.planet },
                  { label: 'Carat', value: gem.carat },
                  { label: 'Rashi', value: gem.rashi },
                  { label: 'Per Carat', value: `₹${gem.perCarat.toLocaleString()}` },
                ].map(({ label, value }) => (
                  <div key={label} className="glass-card border border-white/5 rounded-xl p-3">
                    <p className="text-slate-500 text-xs mb-1">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* Shape Selector */}
              <div className="mb-6">
                <p className="text-slate-300 text-sm font-medium mb-3">Select Shape</p>
                <div className="flex flex-wrap gap-2">
                  {GEM_SHAPES.map(s => (
                    <button key={s} onClick={() => setShape(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${shape === s ? 'bg-[#5ee7ff] text-cosmic-950' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qty */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-slate-300 text-sm font-medium">Quantity</p>
                <div className="flex items-center gap-3 glass-card border border-white/10 rounded-xl px-4 py-2">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="text-slate-400 hover:text-white w-5 text-lg leading-none">−</button>
                  <span className="text-white font-medium w-6 text-center">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="text-slate-400 hover:text-white w-5 text-lg leading-none">+</button>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-4xl font-bold text-white">₹{total.toLocaleString()}</span>
                <span className="text-slate-500 text-sm">total</span>
              </div>

              <div className="flex gap-3">
                <button onClick={handleOrder} className="btn-primary flex-1 justify-center text-base py-4">
                  <ShoppingCart className="w-5 h-5" /> Order via WhatsApp
                </button>
                <Link to="/booking" className="btn-outline px-5">
                  <Star className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {['Certified Authentic', 'Energized & Blessed', 'Pan-India Delivery'].map(f => (
                  <span key={f} className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Check className="w-3 h-3 text-[#5ee7ff]" />{f}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
