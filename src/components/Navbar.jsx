import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Star, ChevronDown } from 'lucide-react'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  {
    label: 'Rashi Ratna', to: '/rashi-ratna',
    sub: [
      { label: 'All Gemstones', to: '/rashi-ratna' },
      { label: 'Astro Gems', to: '/rashi-ratna?cat=astro' },
      { label: 'Vedic Gems', to: '/rashi-ratna?cat=vedic' },
      { label: 'Exclusive Gems', to: '/rashi-ratna?cat=exclusive' },
    ],
  },
  { label: 'Kundli', to: '/kundli' },
  { label: 'Vaastu', to: '/vaastu' },
  { label: 'Matrimonial', to: '/matrimonial' },
  { label: 'Shop', to: '/shop' },
  { label: 'Book a Call', to: '/booking', highlight: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdown(null) }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cosmic-900/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-[#5ee7ff22] border border-[#5ee7ff44] flex items-center justify-center group-hover:animate-pulse-glow transition-all">
            <Star className="w-4 h-4 text-[#5ee7ff]" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-lg text-white tracking-wide">
            The <span className="text-[#5ee7ff]">Consultant</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map(item => (
            <li key={item.to} className="relative"
              onMouseEnter={() => item.sub && setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}>
              {item.highlight ? (
                <Link to={item.to} className="btn-primary text-sm px-4 py-2 ml-2">
                  🎥 {item.label}
                </Link>
              ) : (
                <Link to={item.to}
                  className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 ${location.pathname === item.to ? 'text-[#5ee7ff]' : ''}`}>
                  {item.label}
                  {item.sub && <ChevronDown className="w-3 h-3" />}
                </Link>
              )}
              {/* Dropdown */}
              <AnimatePresence>
                {item.sub && dropdown === item.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-1 w-48 glass-card border border-white/10 rounded-xl overflow-hidden py-1 shadow-xl"
                  >
                    {item.sub.map(s => (
                      <li key={s.to}>
                        <Link to={s.to} className="block px-4 py-2.5 text-sm text-slate-300 hover:text-[#5ee7ff] hover:bg-white/5 transition-colors">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-slate-300 hover:text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cosmic-900/98 backdrop-blur-md border-t border-white/5"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {NAV.map(item => (
                <li key={item.to}>
                  <Link to={item.to}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.highlight ? 'bg-[#5ee7ff] text-cosmic-950 font-bold text-center' : 'text-slate-300 hover:text-[#5ee7ff] hover:bg-white/5'} ${location.pathname === item.to ? 'text-[#5ee7ff]' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
