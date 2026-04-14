import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { StarField } from './components/StarField'
import Home from './pages/Home'
import Services from './pages/Services'
import RashiRatna from './pages/RashiRatna'
import GemDetail from './pages/GemDetail'
import Kundli from './pages/Kundli'
import Vaastu from './pages/Vaastu'
import Matrimonial from './pages/Matrimonial'
import Shop from './pages/Shop'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rashi-ratna" element={<RashiRatna />} />
          <Route path="/rashi-ratna/:id" element={<GemDetail />} />
          <Route path="/kundli" element={<Kundli />} />
          <Route path="/vaastu" element={<Vaastu />} />
          <Route path="/matrimonial" element={<Matrimonial />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <StarField />
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: '#0f1a2e', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)' },
          success: { iconTheme: { primary: '#5ee7ff', secondary: '#0f1a2e' } },
        }}
      />
    </BrowserRouter>
  )
}
