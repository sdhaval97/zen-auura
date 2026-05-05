import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Filter, X, Check, ArrowRight, Star } from 'lucide-react'
import { crystals, intentions } from '../data/data'

function CrystalCard({ crystal, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`crystal-card group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Image */}
      <div className={`relative h-80 bg-gradient-to-br ${crystal.imageGradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

        {/* Crystal orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div
              className="w-36 h-36 rounded-full"
              style={{ background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), ${crystal.accent})` }}
            />
            <div
              className="absolute inset-0 rounded-full animate-pulse-soft"
              style={{ boxShadow: `0 0 30px ${crystal.accent}88, inset 0 0 30px rgba(255,255,255,0.2)` }}
            />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="font-cinzel text-[9px] tracking-[0.2em] uppercase bg-black/30 backdrop-blur-sm text-gold px-3 py-1 border border-gold/20">
            {crystal.chakra}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="font-cinzel text-[9px] tracking-widest uppercase bg-amethyst/80 backdrop-blur-sm text-cream px-3 py-1">
            {crystal.intention}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/70 transition-all duration-500 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <p className="font-cormorant text-cream/90 italic text-base px-6 text-center leading-relaxed">
            {crystal.description.substring(0, 80)}...
          </p>
          <button className="btn-gold text-xs px-6 py-2.5 flex items-center gap-2 mt-2">
            <ShoppingBag size={14} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 bg-cream">
        <h3 className="font-cormorant text-2xl font-medium text-obsidian mb-1">{crystal.name}</h3>
        <p className="font-inter text-xs text-obsidian/45 mb-3">{crystal.subtitle}</p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {crystal.benefits.slice(0, 2).map(b => (
            <span key={b} className="font-inter text-[9px] text-amethyst/80 bg-mist px-2 py-1 border border-amethyst/10">
              {b}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-amethyst/8">
          <div>
            <span className="font-cormorant text-2xl font-semibold text-obsidian">₹{crystal.price.toLocaleString()}</span>
            <span className="font-inter text-xs text-obsidian/30 line-through ml-2">₹{crystal.originalPrice.toLocaleString()}</span>
          </div>
          <button className="flex items-center gap-2 font-cinzel text-[10px] tracking-widest text-amethyst hover:text-gold transition-colors duration-300 uppercase">
            Buy Now <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [selected, setSelected] = useState('All')
  const [filterOpen, setFilterOpen] = useState(false)

  const filtered = selected === 'All' ? crystals : crystals.filter(c => c.intention === selected)

  return (
    <div className="page-enter min-h-screen bg-cream">
      {/* ─── HERO ─── */}
      <section className="page-hero pt-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amethyst/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max relative z-10 py-20 text-center">
          <p className="section-label text-gold/70 mb-4">The Collection</p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
          <h1 className="font-cormorant text-6xl md:text-7xl font-light text-cream mb-4">
            Energised<br />
            <span className="italic font-medium text-gradient-gold">Crystal Bracelets</span>
          </h1>
          <p className="font-inter text-sm text-cream/50 max-w-lg mx-auto">
            Hand-selected and energised with sacred intention. Find your crystal ally and begin your transformation.
          </p>
        </div>
      </section>

      {/* ─── FILTER BAR ─── */}
      <section className="bg-cream border-b border-amethyst/10 sticky top-20 z-30">
        <div className="container-max py-5">
          <div className="flex items-center justify-between gap-4">
            {/* Desktop intention filter */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {intentions.map(i => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`font-cinzel text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                    selected === i
                      ? 'bg-amethyst text-cream border-amethyst'
                      : 'border-amethyst/20 text-obsidian/60 hover:border-gold hover:text-gold'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>

            {/* Mobile filter button */}
            <button
              className="md:hidden flex items-center gap-2 font-cinzel text-[10px] tracking-widest uppercase border border-amethyst/20 px-4 py-2 text-obsidian/60"
              onClick={() => setFilterOpen(true)}
            >
              <Filter size={12} /> Filter
            </button>

            {/* Count */}
            <span className="font-inter text-xs text-obsidian/40 ml-auto shrink-0">
              {filtered.length} crystal{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm" onClick={() => setFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-cream p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-cinzel text-sm tracking-widest uppercase text-obsidian">Filter by Intention</h3>
              <button onClick={() => setFilterOpen(false)}><X size={18} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {intentions.map(i => (
                <button
                  key={i}
                  onClick={() => { setSelected(i); setFilterOpen(false) }}
                  className={`font-cinzel text-[10px] tracking-widest uppercase py-3 border transition-all duration-300 flex items-center justify-center gap-2 ${
                    selected === i ? 'bg-amethyst text-cream border-amethyst' : 'border-amethyst/20 text-obsidian/60'
                  }`}
                >
                  {selected === i && <Check size={10} />}
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── GRID ─── */}
      <section className="py-16 bg-cream bg-sacred-pattern">
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="font-cormorant text-3xl text-obsidian/30 italic">No crystals found for this intention.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c, i) => (
                <CrystalCard key={c.id} crystal={c} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 bg-spiritual-gradient relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amethyst/15 rounded-full blur-3xl pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <p className="section-label text-gold/70 mb-4">Not Sure Which Crystal?</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-6">
            Let Us <span className="italic font-medium text-gold">Guide You</span>
          </h2>
          <p className="font-inter text-sm text-cream/50 mb-8 max-w-md mx-auto">
            Book a healing session and we'll intuitively select the right crystal for your energy and intention.
          </p>
          <Link to="/services" className="btn-gold">
            Book a Session <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
