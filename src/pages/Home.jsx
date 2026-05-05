import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Star, Sparkles, Moon, Sun, Wind } from 'lucide-react'
import { crystals } from '../data/data'

// Floating orb component
function Orb({ className }) {
  return <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
}

// Crystal card for featured section
function FeaturedCrystalCard({ crystal, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`crystal-card group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Crystal visual */}
      <div className={`h-72 bg-gradient-to-br ${crystal.imageGradient} relative overflow-hidden`}>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        {/* Crystal orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center relative"
            style={{ background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), ${crystal.accent}88)` }}
          >
            <div className="absolute inset-0 rounded-full animate-pulse-soft"
              style={{ boxShadow: `0 0 40px ${crystal.accent}66, 0 0 80px ${crystal.accent}33` }} />
            <div className="w-24 h-24 rounded-full"
              style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), ${crystal.accent})` }} />
          </div>
        </div>
        {/* Chakra badge */}
        <div className="absolute top-4 left-4">
          <span className="font-cinzel text-[9px] tracking-[0.2em] uppercase bg-black/30 backdrop-blur-sm text-gold px-3 py-1 border border-gold/20">
            {crystal.chakra}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link to="/shop" className="btn-gold text-xs px-6 py-3">
            Explore Crystal
          </Link>
        </div>
      </div>

      {/* Card info */}
      <div className="p-6 bg-cream">
        <p className="section-label text-[9px] mb-2">{crystal.intention}</p>
        <h3 className="font-cormorant text-2xl font-medium text-obsidian mb-1">{crystal.name}</h3>
        <p className="font-inter text-xs text-obsidian/50 mb-4">{crystal.subtitle}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-cormorant text-xl font-semibold text-obsidian">₹{crystal.price.toLocaleString()}</span>
            <span className="font-inter text-xs text-obsidian/30 line-through ml-2">₹{crystal.originalPrice.toLocaleString()}</span>
          </div>
          <Link to="/shop" className="w-9 h-9 flex items-center justify-center border border-amethyst/20 hover:border-gold hover:bg-gold/10 transition-all duration-300">
            <ArrowRight size={14} className="text-amethyst" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Testimonial data
const testimonials = [
  { name: 'Priya S.', location: 'Mumbai', text: 'The Amethyst bracelet changed my sleep completely. I feel so protected and calm since wearing it. Shuchita truly knows her crystals.', rating: 5 },
  { name: 'Arjun M.', location: 'Bangalore', text: 'I was sceptical at first, but after the healing session, I felt a literal weight lift off my chest. The energetic release was profound.', rating: 5 },
  { name: 'Kavya R.', location: 'Delhi', text: 'My Citrine bracelet arrived beautifully packaged and the energy feels incredible. Already manifested a new job within 3 weeks!', rating: 5 },
  { name: 'Meera T.', location: 'Chennai', text: 'ZenAuura is not just a crystal shop — it is a healing experience. The quality and care that goes into each piece is unmatched.', rating: 5 },
]

function TestimonialCard({ t }) {
  return (
    <div className="bg-white border border-amethyst/10 p-8 flex flex-col gap-4 min-w-[320px] lg:min-w-0">
      <div className="flex gap-1">
        {Array(t.rating).fill(0).map((_, i) => (
          <Star key={i} size={12} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="font-cormorant text-lg italic text-obsidian/80 leading-relaxed">"{t.text}"</p>
      <div>
        <p className="font-cinzel text-xs tracking-widest text-obsidian">{t.name}</p>
        <p className="font-inter text-xs text-obsidian/40">{t.location}</p>
      </div>
    </div>
  )
}

const marqueeItems = [
  '✦ Energise Your Aura',
  '◈ Heal Your Spirit',
  '⟡ Align Your Chakras',
  '✧ Manifest Your Intentions',
  '✦ Find Your Crystal',
  '◈ Conscious Healing',
  '⟡ Sacred Energy',
  '✧ Transform Your Life',
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="page-enter">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
        {/* Background orbs */}
        <Orb className="top-1/4 left-1/4 w-96 h-96 bg-amethyst/25 animate-float" />
        <Orb className="bottom-1/3 right-1/4 w-80 h-80 bg-gold/10 animate-float-delayed" />
        <Orb className="top-1/2 right-1/3 w-64 h-64 bg-amethyst-light/15" />

        {/* Sacred geometry watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="animate-spin-slow">
            <circle cx="300" cy="300" r="280" stroke="#C9A84C" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="200" stroke="#C9A84C" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="120" stroke="#C9A84C" strokeWidth="0.5" />
            <line x1="300" y1="20" x2="300" y2="580" stroke="#C9A84C" strokeWidth="0.5" />
            <line x1="20" y1="300" x2="580" y2="300" stroke="#C9A84C" strokeWidth="0.5" />
            <line x1="60" y1="60" x2="540" y2="540" stroke="#C9A84C" strokeWidth="0.5" />
            <line x1="540" y1="60" x2="60" y2="540" stroke="#C9A84C" strokeWidth="0.5" />
            {[0, 60, 120, 180, 240, 300].map(angle => (
              <line
                key={angle}
                x1={300 + 280 * Math.cos(angle * Math.PI / 180)}
                y1={300 + 280 * Math.sin(angle * Math.PI / 180)}
                x2={300 - 280 * Math.cos(angle * Math.PI / 180)}
                y2={300 - 280 * Math.sin(angle * Math.PI / 180)}
                stroke="#C9A84C" strokeWidth="0.3"
              />
            ))}
          </svg>
        </div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.4 + Math.random() * 0.5,
              width: Math.random() > 0.5 ? '3px' : '2px',
              height: Math.random() > 0.5 ? '3px' : '2px',
            }}
          />
        ))}

        <div className="container-max relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Eyebrow label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/50" />
              <span className="section-label text-[10px] text-gold/80">Healing Crystals & Sacred Energy</span>
            </div>

            {/* Main headline */}
            <h1 className="font-cormorant text-6xl md:text-8xl font-light text-cream leading-none mb-6">
              Where Energy<br />
              <span className="text-gradient-gold italic font-medium">Finds Its Way</span>
            </h1>

            <p className="font-inter text-base md:text-lg text-cream/60 leading-relaxed max-w-xl mb-12">
              Reconnect with your true nature through the ancient wisdom of healing crystals. Curated, energised, and crafted with intention — for souls ready to transform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link to="/shop" className="btn-primary">
                Explore Crystals <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-ghost">
                Healing Sessions
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8">
              {[
                { icon: Sparkles, label: 'Hand-Energised' },
                { icon: Moon, label: 'Authentic Crystals' },
                { icon: Sun, label: 'Intention-Set' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-cream/40">
                  <Icon size={14} className="text-gold" />
                  <span className="font-cinzel text-[10px] tracking-widest uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <section className="py-5 bg-obsidian border-y border-gold/20 overflow-hidden">
        <div className="flex animate-scroll-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-cinzel text-[11px] tracking-[0.2em] uppercase text-gold/70 mx-10">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ─── FEATURED CRYSTALS ─── */}
      <section className="py-28 bg-cream bg-sacred-pattern">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Collection</p>
            <div className="divider-gold" />
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-obsidian mt-4 mb-4">
              Energised Crystal<br />
              <span className="italic font-medium text-amethyst">Bracelets</span>
            </h2>
            <p className="font-inter text-sm text-obsidian/50 max-w-md mx-auto">
              Each bracelet is hand-selected, cleansed, and energised with sacred intention before reaching you.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crystals.slice(0, 6).map((crystal, i) => (
              <FeaturedCrystalCard key={crystal.id} crystal={crystal} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link to="/shop" className="btn-primary">
              View All Crystals <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="py-28 bg-spiritual-gradient relative overflow-hidden">
        <Orb className="top-0 right-0 w-[500px] h-[500px] bg-amethyst/15" />
        <Orb className="bottom-0 left-0 w-72 h-72 bg-gold/8" />

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — Brand mark */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-64 h-64 relative mb-8">
                <div className="absolute inset-0 rounded-full bg-amethyst/10 animate-pulse-soft" />
                <div className="absolute inset-4 rounded-full bg-amethyst/15 border border-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-cinzel text-3xl text-cream tracking-[0.3em] mb-1">ZEN</div>
                    <div className="h-px w-12 bg-gold mx-auto mb-1" />
                    <div className="font-cinzel text-3xl text-cream tracking-[0.3em]">AUURA</div>
                  </div>
                </div>
                {/* Orbit ring */}
                <div className="absolute inset-0 rounded-full border border-gold/15 animate-spin-slow" />
                {/* Orbit dots */}
                {[0, 120, 240].map(angle => (
                  <div
                    key={angle}
                    className="absolute w-2 h-2 bg-gold rounded-full"
                    style={{
                      top: `${50 + 47 * Math.sin(angle * Math.PI / 180)}%`,
                      left: `${50 + 47 * Math.cos(angle * Math.PI / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </div>
              <blockquote className="font-cormorant text-3xl italic text-cream/80 leading-relaxed text-center lg:text-left max-w-sm">
                "Healing begins with awareness, not escape from pain."
              </blockquote>
              <div className="h-px w-12 bg-gold my-4" />
              <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold">Shuchita, Founder</p>
            </div>

            {/* Right — Mission & Vision */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-cinzel text-4xl text-gold/30">01</span>
                  <h2 className="font-cormorant text-4xl text-cream">Our Mission</h2>
                </div>
                <div className="h-px w-full bg-white/5 mb-6" />
                <p className="font-inter text-sm text-cream/60 leading-loose">
                  To help people reconnect with their true nature — energy and emotion before roles and labels. We restore clarity by helping individuals process emotions and align scattered energy. Through conscious healing, coaching, and natural tools, we guide balanced and aware living.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-cinzel text-4xl text-gold/30">02</span>
                  <h2 className="font-cormorant text-4xl text-cream">Our Vision</h2>
                </div>
                <div className="h-px w-full bg-white/5 mb-6" />
                <p className="font-inter text-sm text-cream/60 leading-loose">
                  A conscious generation living from clarity, responsibility, and emotional strength. We aim to break cycles of confusion by healing individuals and families at the root — envisioning a compassionate society where energy and emotional health are respected.
                </p>
              </div>

              <div className="mt-10">
                <Link to="/about" className="btn-ghost text-sm">
                  Our Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES TEASER ─── */}
      <section className="py-28 bg-cream">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Healing Offerings</p>
            <div className="divider-gold" />
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-obsidian mt-4">
              Beyond the Crystal —<br />
              <span className="italic font-medium text-amethyst">The Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Moon, title: 'Energetic Alignment', desc: 'Deep healing to dissolve root-cause energetic blockages and restore your natural flow.', price: '₹5,555', tag: 'Most Popular' },
              { icon: Sparkles, title: 'Crystal Energisation', desc: 'A sacred ritual to cleanse, charge and program your crystal with your highest intention.', price: '₹2,222', tag: null },
              { icon: Wind, title: 'Aura Reading', desc: 'Intuitive mapping of your energy field, identifying patterns, blockages, and gifts.', price: '₹3,333', tag: null },
            ].map(({ icon: Icon, title, desc, price, tag }) => (
              <div key={title} className="relative group p-10 border border-amethyst/10 hover:border-gold/30 bg-mist/30 hover:bg-mist/60 transition-all duration-500 hover:-translate-y-1">
                {tag && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 font-cinzel text-[9px] tracking-widest uppercase bg-amethyst text-cream px-4 py-1.5">
                    {tag}
                  </span>
                )}
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-8">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-obsidian mb-4">{title}</h3>
                <p className="font-inter text-sm text-obsidian/60 leading-relaxed mb-6">{desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-cormorant text-2xl text-amethyst">{price}</span>
                  <Link to="/services" className="font-cinzel text-[10px] tracking-widest text-gold hover:text-amethyst transition-colors duration-300 flex items-center gap-1 uppercase">
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-28 bg-obsidian relative overflow-hidden">
        <Orb className="top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-amethyst/10" />
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <p className="section-label text-gold/60 mb-4">Client Stories</p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto my-6" />
            <h2 className="font-cormorant text-5xl font-light text-cream mt-4">
              Transformations That<br />
              <span className="italic text-gold">Speak for Themselves</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-24 bg-cream border-t border-amethyst/5">
        <div className="container-max text-center">
          <p className="section-label mb-4">Stay Connected</p>
          <div className="divider-gold" />
          <h2 className="font-cormorant text-5xl font-light text-obsidian mt-6 mb-4">
            Join the <span className="italic text-amethyst">Sacred Circle</span>
          </h2>
          <p className="font-inter text-sm text-obsidian/50 mb-10 max-w-md mx-auto">
            Receive crystal wisdom, healing insights, and early access to new collections — delivered with intention.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto border border-amethyst/15" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 font-inter text-sm text-obsidian bg-transparent outline-none placeholder:text-obsidian/30 border-r border-amethyst/15"
            />
            <button type="submit" className="px-8 py-4 bg-obsidian hover:bg-amethyst text-cream font-cinzel text-[11px] tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="font-inter text-xs text-obsidian/30 mt-4">No spam. Sacred space, always.</p>
        </div>
      </section>
    </div>
  )
}
