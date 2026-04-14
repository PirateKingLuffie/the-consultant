// ── Gemstones ──────────────────────────────────────────────────────────────
export const GEMS = {
  astro: [
    { id: 'blue-sapphire',   name: 'Blue Sapphire',   planet: 'Saturn',  img: '/gems/Blue-Sapphire.avif',   price: 2500, perCarat: 7000, carat: '5.25', rashi: 'Capricorn, Aquarius' },
    { id: 'yellow-sapphire', name: 'Yellow Sapphire', planet: 'Jupiter', img: '/gems/yellow-sapphire.avif', price: 3000, perCarat: 8000, carat: '5.25', rashi: 'Sagittarius, Pisces' },
    { id: 'ruby',            name: 'Ruby',            planet: 'Sun',     img: '/gems/Ruby.avif',            price: 4000, perCarat: 9000, carat: '4.00', rashi: 'Leo' },
    { id: 'emerald',         name: 'Emerald',         planet: 'Mercury', img: '/gems/Emerald.avif',         price: 3500, perCarat: 8500, carat: '4.50', rashi: 'Gemini, Virgo' },
    { id: 'pearl',           name: 'Pearl',           planet: 'Moon',    img: '/gems/Pearl.avif',           price: 1500, perCarat: 4000, carat: '6.00', rashi: 'Cancer' },
    { id: 'red-coral',       name: 'Red Coral',       planet: 'Mars',    img: '/gems/Red-Coral.avif',       price: 2000, perCarat: 5000, carat: '6.00', rashi: 'Aries, Scorpio' },
    { id: 'diamond',         name: 'Diamond',         planet: 'Venus',   img: '/gems/Diamond.avif',         price: 15000, perCarat: 30000, carat: '1.00', rashi: 'Taurus, Libra' },
    { id: 'cats-eye',        name: "Cat's Eye",       planet: 'Ketu',    img: '/gems/Cats-Eye.avif',        price: 3000, perCarat: 7500, carat: '5.00', rashi: 'Scorpio, Pisces' },
    { id: 'hessonite',       name: 'Hessonite',       planet: 'Rahu',    img: '/gems/hessonite.avif',       price: 2500, perCarat: 6000, carat: '5.25', rashi: 'Gemini, Virgo' },
  ],
  vedic: [
    { id: 'opal',           name: 'Opal',           planet: 'Venus',   img: '/gems/Fire-Opal.avif',       price: 2000, perCarat: 5500, carat: '5.00', rashi: 'Taurus, Libra' },
    { id: 'white-sapphire', name: 'White Sapphire', planet: 'Venus',   img: '/gems/White-Sapphire.avif',  price: 2200, perCarat: 6000, carat: '5.25', rashi: 'Taurus, Libra' },
    { id: 'amethyst',       name: 'Amethyst',       planet: 'Saturn',  img: '/gems/Amethyst.avif',        price: 800,  perCarat: 2000, carat: '7.00', rashi: 'Capricorn, Aquarius' },
    { id: 'citrine',        name: 'Citrine',        planet: 'Jupiter', img: '/gems/citrine.avif',         price: 700,  perCarat: 1800, carat: '7.00', rashi: 'Sagittarius' },
    { id: 'blue-topaz',     name: 'Blue Topaz',     planet: 'Jupiter', img: '/gems/Blue-Topaz.avif',      price: 900,  perCarat: 2200, carat: '6.00', rashi: 'Sagittarius, Pisces' },
    { id: 'peridot',        name: 'Peridot',        planet: 'Mercury', img: '/gems/peridot.avif',         price: 1000, perCarat: 2500, carat: '6.00', rashi: 'Gemini, Virgo' },
  ],
  exclusive: [
    { id: 'alexandrite',   name: 'Alexandrite',   planet: 'Mercury', img: '/gems/alexandrite.avif',     price: 8000,  perCarat: 18000, carat: '3.00', rashi: 'Gemini' },
    { id: 'tanzanite',     name: 'Tanzanite',     planet: 'Saturn',  img: '/gems/Tanzanite.avif',       price: 6000,  perCarat: 14000, carat: '3.50', rashi: 'Capricorn' },
    { id: 'aquamarine',    name: 'Aquamarine',    planet: 'Moon',    img: '/gems/Aquamarine.avif',      price: 2500,  perCarat: 6500,  carat: '5.00', rashi: 'Cancer, Pisces' },
    { id: 'morganite',     name: 'Morganite',     planet: 'Venus',   img: '/gems/morganite.avif',       price: 3000,  perCarat: 7000,  carat: '4.50', rashi: 'Taurus' },
    { id: 'pink-sapphire', name: 'Pink Sapphire', planet: 'Venus',   img: '/gems/Pink-Sapphire.avif',   price: 4000,  perCarat: 9500,  carat: '4.00', rashi: 'Taurus, Libra' },
    { id: 'star-ruby',     name: 'Star Ruby',     planet: 'Sun',     img: '/gems/Star-Ruby.avif',       price: 5000,  perCarat: 12000, carat: '3.50', rashi: 'Leo' },
    { id: 'star-sapphire', name: 'Star Sapphire', planet: 'Saturn',  img: '/gems/Star-Sapphires.avif',  price: 5500,  perCarat: 13000, carat: '3.50', rashi: 'Capricorn' },
  ],
  other: [
    { id: 'turquoise',     name: 'Turquoise',     planet: 'Jupiter', img: '/gems/Turquoise.avif',       price: 600,  perCarat: 1500, carat: '8.00', rashi: 'Sagittarius' },
    { id: 'moonstone',     name: 'Moonstone',     planet: 'Moon',    img: '/gems/moonstone.avif',       price: 800,  perCarat: 2000, carat: '7.00', rashi: 'Cancer' },
    { id: 'garnet',        name: 'Garnet',        planet: 'Mars',    img: '/gems/Red-Garnet.avif',      price: 700,  perCarat: 1800, carat: '7.00', rashi: 'Aries, Scorpio' },
    { id: 'amber',         name: 'Amber',         planet: 'Sun',     img: '/gems/amber.avif',           price: 900,  perCarat: 2200, carat: '6.00', rashi: 'Leo' },
    { id: 'smoky-quartz',  name: 'Smoky Quartz',  planet: 'Saturn',  img: '/gems/Smoky-Quartz.avif',    price: 500,  perCarat: 1200, carat: '9.00', rashi: 'Capricorn' },
    { id: 'tourmaline',    name: 'Tourmaline',    planet: 'Saturn',  img: '/gems/Black-Tourmaline.avif',price: 1200, perCarat: 3000, carat: '6.00', rashi: 'Capricorn, Aquarius' },
    { id: 'white-topaz',   name: 'White Topaz',   planet: 'Venus',   img: '/gems/White-Topaz.avif',     price: 600,  perCarat: 1500, carat: '8.00', rashi: 'Taurus, Libra' },
  ],
}

export const ALL_GEMS = [...GEMS.astro, ...GEMS.vedic, ...GEMS.exclusive, ...GEMS.other]

export const GEM_SHAPES = ['Oval','Round','Pear','Emerald Cut','Cushion','Heart','Marquise','Princess','Trillion','Radiant']

// ── Shop Products ───────────────────────────────────────────────────────────
export const SHOP_PRODUCTS = [
  {
    id: 'kundli-basic',
    category: 'consultation',
    name: 'Basic Kundli Report',
    desc: 'Detailed birth chart analysis with planetary positions, houses, and basic predictions.',
    price: 499,
    badge: 'Popular',
    icon: '📜',
    includes: ['Birth Chart PDF', 'Planetary Analysis', 'Basic Predictions', 'Email Delivery in 48hrs'],
  },
  {
    id: 'kundli-premium',
    category: 'consultation',
    name: 'Premium Kundli Report',
    desc: 'Comprehensive analysis including Dasha, Yogas, Doshas, and 5-year predictions.',
    price: 1499,
    badge: 'Best Value',
    icon: '⭐',
    includes: ['Full Birth Chart', 'Dasha Analysis', 'Yoga & Dosha Report', '5-Year Predictions', 'Remedies', 'WhatsApp Support'],
  },
  {
    id: 'zoom-30',
    category: 'consultation',
    name: '30-Min Zoom Consultation',
    desc: 'Live one-on-one session with GuptaJi. Ask anything about your chart, life, or future.',
    price: 999,
    badge: null,
    icon: '🎥',
    includes: ['30 Min Zoom Call', 'Screen Share Chart', 'Recording Provided', 'Follow-up Q&A'],
  },
  {
    id: 'zoom-60',
    category: 'consultation',
    name: '60-Min Zoom Consultation',
    desc: 'Deep-dive session covering all life areas: career, love, health, finances, and remedies.',
    price: 1799,
    badge: 'Recommended',
    icon: '🔮',
    includes: ['60 Min Zoom Call', 'Full Chart Review', 'All Life Areas', 'Personalized Remedies', 'Recording', 'Priority Booking'],
  },
  {
    id: 'kundli-milan',
    category: 'consultation',
    name: 'Kundli Milan (Compatibility)',
    desc: 'Complete marriage compatibility analysis for two charts with Guna Milan and Dosha check.',
    price: 1299,
    badge: null,
    icon: '💑',
    includes: ['Two Chart Analysis', 'Guna Milan Score', 'Dosha Check', 'Compatibility Report', 'Remedies if needed'],
  },
  {
    id: 'vaastu-home',
    category: 'vaastu',
    name: 'Home Vaastu Consultation',
    desc: 'Online Vaastu analysis for your home with floor plan review and directional corrections.',
    price: 2499,
    badge: null,
    icon: '🏠',
    includes: ['Floor Plan Analysis', 'Room-wise Guidance', 'Directional Corrections', 'Remedy Report', 'Zoom Discussion'],
  },
  {
    id: 'rudraksha-5',
    category: 'products',
    name: '5 Mukhi Rudraksha',
    desc: 'Authentic Nepal-origin 5 Mukhi Rudraksha. Blessed and energized. Ruled by Jupiter.',
    price: 799,
    badge: null,
    icon: '📿',
    includes: ['Certified Authentic', 'Energized & Blessed', 'Certificate of Authenticity', 'Wearing Instructions'],
  },
  {
    id: 'yantra-shree',
    category: 'products',
    name: 'Shree Yantra (Copper)',
    desc: 'Handcrafted copper Shree Yantra for wealth, prosperity, and positive energy.',
    price: 1199,
    badge: null,
    icon: '🔱',
    includes: ['Pure Copper', 'Handcrafted', 'Energized', 'Placement Guide'],
  },
]

// ── Services ────────────────────────────────────────────────────────────────
import { ScrollText, Gem, Home, Heart, Video, ShoppingBag } from 'lucide-react'
export const SERVICES = [
  { Icon: ScrollText, title: 'Kundli Analysis', desc: 'Complete birth chart reading covering all 12 houses, planetary positions, yogas, doshas, dasha periods, and life predictions across career, health, and relationships.', link: '/kundli' },
  { Icon: Gem,        title: 'Gemstone Recommendation', desc: 'Personalized Rashi Ratna recommendations based on your birth chart. Certified, authentic gemstones energized with Vedic mantras.', link: '/rashi-ratna' },
  { Icon: Home,       title: 'Vaastu Shastra', desc: 'Harmonize your home and office with ancient Vaastu principles. Online consultation with floor plan analysis and directional corrections.', link: '/vaastu' },
  { Icon: Heart,      title: 'Matrimonial & Kundli Milan', desc: 'Comprehensive marriage compatibility analysis. Guna Milan scoring, Manglik Dosha check, and personalized remedies for a harmonious union.', link: '/matrimonial' },
  { Icon: Video,      title: 'Live Zoom Consultation', desc: 'One-on-one video session with GuptaJi. Ask anything about your chart, life decisions, career, relationships, or future. Recording provided.', link: '/booking' },
  { Icon: ShoppingBag,title: 'Gemstone Shop', desc: 'Buy certified, authentic gemstones in 10 different shapes. All stones are energized, come with a certificate of authenticity, and delivered pan-India.', link: '/shop' },
]

// ── Testimonials ────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name: 'Priya Sharma', city: 'Delhi', rating: 5, text: 'GuptaJi\'s Kundli reading was incredibly accurate. He predicted my job change 3 months before it happened. Truly gifted!', avatar: 'PS' },
  { name: 'Rahul Verma', city: 'Mumbai', rating: 5, text: 'The Blue Sapphire he recommended changed my life. My business grew 3x within 6 months of wearing it. Highly recommend!', avatar: 'RV' },
  { name: 'Anita Gupta', city: 'Bangalore', rating: 5, text: 'Kundli Milan for my daughter\'s marriage was spot on. GuptaJi identified a Manglik Dosha and gave perfect remedies.', avatar: 'AG' },
  { name: 'Vikram Singh', city: 'Jaipur', rating: 5, text: 'The Vaastu consultation transformed our office. Within weeks, the atmosphere improved and we landed 2 big clients!', avatar: 'VS' },
  { name: 'Meera Patel', city: 'Ahmedabad', rating: 5, text: 'Zoom consultation was so convenient. GuptaJi spent a full hour explaining everything. Worth every rupee!', avatar: 'MP' },
  { name: 'Arjun Nair', city: 'Chennai', rating: 5, text: 'The gemstone quality is exceptional. Got a certified Ruby and the difference in my confidence and energy is remarkable.', avatar: 'AN' },
]

// ── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 10,  suffix: '+', label: 'Happy Clients' },
  { value: 15,  suffix: '+', label: 'Years Experience' },
  { value: 15,  suffix: '+', label: 'Gemstones Available' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
]

// ── Booking Time Slots ──────────────────────────────────────────────────────
export const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM',
  '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
  '04:30 PM', '05:00 PM', '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM',
]

export const CONSULTATION_TYPES = [
  { id: 'kundli-30',    label: 'Kundli Reading – 30 min',       price: 999  },
  { id: 'kundli-60',    label: 'Kundli Reading – 60 min',       price: 1799 },
  { id: 'gemstone',     label: 'Gemstone Consultation – 30 min',price: 799  },
  { id: 'vaastu',       label: 'Vaastu Consultation – 45 min',  price: 1499 },
  { id: 'matrimonial',  label: 'Matrimonial / Kundli Milan',     price: 1299 },
  { id: 'general',      label: 'General Astrology – 30 min',    price: 699  },
]

// ── Planets & Rashis ────────────────────────────────────────────────────────
export const RASHIS = [
  { name: 'Aries',       hindi: 'Mesh',       gem: 'Red Coral',      planet: 'Mars',    dates: 'Mar 21 – Apr 19' },
  { name: 'Taurus',      hindi: 'Vrishabha',  gem: 'Diamond / Opal', planet: 'Venus',   dates: 'Apr 20 – May 20' },
  { name: 'Gemini',      hindi: 'Mithuna',    gem: 'Emerald',        planet: 'Mercury', dates: 'May 21 – Jun 20' },
  { name: 'Cancer',      hindi: 'Karka',      gem: 'Pearl',          planet: 'Moon',    dates: 'Jun 21 – Jul 22' },
  { name: 'Leo',         hindi: 'Simha',      gem: 'Ruby',           planet: 'Sun',     dates: 'Jul 23 – Aug 22' },
  { name: 'Virgo',       hindi: 'Kanya',      gem: 'Emerald',        planet: 'Mercury', dates: 'Aug 23 – Sep 22' },
  { name: 'Libra',       hindi: 'Tula',       gem: 'Diamond / Opal', planet: 'Venus',   dates: 'Sep 23 – Oct 22' },
  { name: 'Scorpio',     hindi: 'Vrishchika', gem: 'Red Coral',      planet: 'Mars',    dates: 'Oct 23 – Nov 21' },
  { name: 'Sagittarius', hindi: 'Dhanu',      gem: 'Yellow Sapphire',planet: 'Jupiter', dates: 'Nov 22 – Dec 21' },
  { name: 'Capricorn',   hindi: 'Makara',     gem: 'Blue Sapphire',  planet: 'Saturn',  dates: 'Dec 22 – Jan 19' },
  { name: 'Aquarius',    hindi: 'Kumbha',     gem: 'Blue Sapphire',  planet: 'Saturn',  dates: 'Jan 20 – Feb 18' },
  { name: 'Pisces',      hindi: 'Meena',      gem: 'Yellow Sapphire',planet: 'Jupiter', dates: 'Feb 19 – Mar 20' },
]
