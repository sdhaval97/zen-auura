import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, Clock, ArrowRight, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { services } from '../data/data'

function useVisible(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-amethyst/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-cormorant text-xl text-obsidian font-medium">{title}</span>
        {open ? <ChevronUp size={16} className="text-gold" /> : <ChevronDown size={16} className="text-amethyst/50" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

function ServiceCard({ service, index, reversed }) {
  const [ref, visible] = useVisible()

  const colorMap = {
    amethyst: { bg: 'bg-amethyst', text: 'text-amethyst', border: 'border-amethyst/20', light: 'bg-mist' },
    gold: { bg: 'bg-gold', text: 'text-gold', border: 'border-gold/20', light: 'bg-amber-50' },
    sage: { bg: 'bg-sage', text: 'text-sage', border: 'border-sage/30', light: 'bg-green-50' },
  }
  const c = colorMap[service.color]

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-amethyst/10 overflow-hidden shadow-xl shadow-amethyst/5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Visual panel */}
      <div className={`${reversed ? 'lg:order-2' : ''} bg-spiritual-gradient relative flex items-center justify-center p-16 min-h-72`}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 60%)' }} />

        {/* Number + Icon */}
        <div className="text-center relative z-10">
          <div className="font-cinzel text-8xl font-semibold text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 leading-none">
            0{index + 1}
          </div>
          <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center mb-4 mx-auto"
            style={{ background: 'radial-gradient(circle, rgba(123,94,167,0.3), transparent)' }}>
            <span className="text-4xl">{service.icon}</span>
          </div>
          <span className={`font-cinzel text-[10px] tracking-[0.3em] uppercase ${c.text} bg-black/20 px-4 py-2 backdrop-blur-sm border ${c.border}`}>
            {service.duration}
          </span>
        </div>
      </div>

      {/* Content panel */}
      <div className={`${reversed ? 'lg:order-1' : ''} bg-cream p-10 lg:p-12`}>
        <p className="section-label mb-3">{`Service 0${index + 1}`}</p>
        <h2 className="font-cormorant text-3xl font-medium text-obsidian mb-2 leading-tight">{service.title}</h2>
        <p className="font-cormorant text-lg italic text-amethyst mb-6">{service.tagline}</p>

        <p className="font-inter text-sm text-obsidian/60 leading-relaxed mb-8">{service.description}</p>

        {/* What's included */}
        <div className="mb-8">
          <p className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-obsidian/40 mb-4">What's Included</p>
          <ul className="space-y-2.5">
            {service.includes.map(item => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 bg-amethyst/10 border border-amethyst/20 flex items-center justify-center shrink-0">
                  <Check size={9} className="text-amethyst" />
                </div>
                <span className="font-inter text-sm text-obsidian/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-amethyst/8">
          <div>
            <p className="font-inter text-xs text-obsidian/40 mb-1">Energy Exchange</p>
            <span className="font-cormorant text-4xl font-light text-obsidian">
              ₹{service.price.toLocaleString()}
            </span>
          </div>
          <Link to="/contact" className="btn-primary text-sm">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="page-enter min-h-screen bg-cream">
      {/* ─── HERO ─── */}
      <section className="page-hero pt-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 60%, rgba(123,94,167,0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.2) 0%, transparent 40%)' }} />

        <div className="container-max relative z-10 py-24 text-center">
          <p className="section-label text-gold/70 mb-4">Healing Offerings</p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
          <h1 className="font-cormorant text-6xl md:text-7xl font-light text-cream mb-6">
            Healing<br />
            <span className="italic font-medium text-gradient-gold">Services</span>
          </h1>
          <p className="font-inter text-sm text-cream/50 max-w-xl mx-auto leading-relaxed">
            Go beyond the crystal. Our healing services are designed to dissolve energetic blockages, restore clarity, and reconnect you with your most authentic self.
          </p>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 bg-cream bg-sacred-pattern">
        <div className="container-max space-y-12">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ─── WHO IS THIS FOR ─── */}
      <section className="py-24 bg-mist/40">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Signs You Are Ready</p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <h2 className="font-cormorant text-5xl font-light text-obsidian">
              Your Energy May Be<br />
              <span className="italic font-medium text-amethyst">Calling for a Reset</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'You carry emotional weight you can\'t quite name or shake.',
              'You feel paralysed at crossroads by "decision confusion."',
              'Anxiety persists even when everything seems "fine" on paper.',
              'The same frustrating patterns keep showing up in relationships or finances.',
              'You\'re putting in the work, but the results just aren\'t manifesting.',
              'You feel energetically depleted despite resting.',
            ].map((sign, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-cream border border-amethyst/10 hover:border-gold/20 transition-all duration-300">
                <span className="font-cinzel text-gold text-2xl leading-none mt-1">✦</span>
                <p className="font-inter text-sm text-obsidian/70 leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-cream">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Questions</p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <h2 className="font-cormorant text-5xl font-light text-obsidian">
              Frequently <span className="italic text-amethyst">Asked</span>
            </h2>
          </div>

          <div>
            {[
              {
                q: 'How does a remote energy healing session work?',
                a: 'Energy transcends physical boundaries. During our session, we connect through a video call and I work with your energy field intuitively. Many clients report feeling physical sensations — warmth, tingling, or emotional releases — during the session itself.',
              },
              {
                q: 'What should I prepare before my session?',
                a: 'Find a quiet, comfortable space where you won\'t be disturbed. Have water nearby, wear comfortable clothing, and set a clear intention for what you wish to heal or shift. An open mind is your most important tool.',
              },
              {
                q: 'Will I receive a crystal bracelet with every service?',
                a: 'The Energetic Alignment & Healing Session includes a custom crystal bracelet. Other services include personalized crystal recommendations. All bracelets are hand-energised specifically for your healing intention.',
              },
              {
                q: 'How many sessions will I need?',
                a: 'Healing is a journey, not a single event. Many clients feel significant shifts after one session, while deep-rooted patterns may benefit from ongoing work. We recommend starting with one session and allowing your body and spirit to integrate before deciding on more.',
              },
            ].map(({ q, a }) => (
              <AccordionItem key={q} title={q}>
                <p className="font-inter text-sm text-obsidian/60 leading-loose">{a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-spiritual-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.4) 0%, transparent 60%)' }} />
        <div className="container-max relative z-10 text-center">
          <p className="section-label text-gold/60 mb-4">Ready to Begin?</p>
          <h2 className="font-cormorant text-5xl font-light text-cream mb-6">
            Your Healing Journey<br />
            <span className="italic font-medium text-gold">Starts Here</span>
          </h2>
          <p className="font-inter text-sm text-cream/50 mb-10 max-w-sm mx-auto">
            Take the first step. Book your session and experience the shift.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book a Session <ArrowRight size={16} />
            </Link>
            <Link to="/shop" className="btn-ghost">
              Shop Crystals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
