import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Sparkles, Globe, Sun } from 'lucide-react'

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

const values = [
  { icon: Heart, title: 'Authenticity First', desc: 'We source only genuine, unaltered crystals, verified for quality. No dye, no heat treatment — only pure earth energy.' },
  { icon: Sparkles, title: 'Sacred Intention', desc: 'Every bracelet is cleansed with sage, charged under moonlight, and energised with your specific healing intention before it ships.' },
  { icon: Globe, title: 'Conscious Commerce', desc: 'We believe healing should be accessible. Our pricing reflects fair value, not inflated margins, without compromising quality.' },
  { icon: Sun, title: 'Root-Cause Healing', desc: 'We don\'t just address symptoms. Our approach goes to the root — emotional, energetic, and spiritual patterns that perpetuate cycles.' },
]

const timeline = [
  { year: '2018', event: 'Shuchita\'s personal healing journey begins after a period of emotional burnout and energetic depletion.' },
  { year: '2019', event: 'Discovery of crystal healing and its profound effects on emotional regulation and energy clarity.' },
  { year: '2021', event: 'First healing sessions offered to family and friends. Word spreads through referral alone.' },
  { year: '2022', event: 'ZenAuura is born — a brand built on the belief that energy is the root of everything.' },
  { year: '2024', event: 'Launch of the Energised Crystal Bracelet collection, each piece curated and hand-energised.' },
  { year: '2026', event: 'Expanding to serve souls worldwide, bringing ancient crystal wisdom into modern conscious living.' },
]

export default function About() {
  const [ref1, v1] = useVisible()
  const [ref2, v2] = useVisible()
  const [ref3, v3] = useVisible()

  return (
    <div className="page-enter min-h-screen bg-cream">
      {/* ─── HERO ─── */}
      <section className="page-hero pt-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: 'radial-gradient(ellipse at 40% 60%, rgba(123,94,167,0.5) 0%, transparent 50%)' }} />

        <div className="container-max relative z-10 py-24 text-center">
          <p className="section-label text-gold/70 mb-4">Our Story</p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-cream mb-6 leading-none">
            About<br />
            <span className="italic font-medium text-gradient-gold">ZenAuura</span>
          </h1>
          <p className="font-inter text-sm text-cream/50 max-w-xl mx-auto leading-relaxed">
            Born from a personal healing journey, guided by ancient wisdom, offered with modern intention.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER SECTION ─── */}
      <section className="py-28 bg-cream bg-sacred-pattern">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Portrait placeholder */}
            <div ref={ref1} className={`transition-all duration-700 ${v1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-amethyst/15" />

                {/* Portrait visual */}
                <div className="relative aspect-[3/4] bg-spiritual-gradient flex items-center justify-center overflow-hidden">
                  {/* Mystical portrait placeholder */}
                  <div className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.4) 0%, transparent 60%)' }} />
                  <div className="relative z-10 text-center">
                    <div className="w-48 h-48 rounded-full border-2 border-gold/30 mx-auto mb-6 flex items-center justify-center"
                      style={{ background: 'radial-gradient(circle at 35% 35%, rgba(201,168,76,0.3), rgba(123,94,167,0.5))' }}>
                      <span className="font-cinzel text-6xl text-cream/40">S</span>
                    </div>
                    <p className="font-cinzel text-cream text-xl tracking-[0.3em]">SHUCHITA</p>
                    <div className="h-px w-16 bg-gold/50 mx-auto my-3" />
                    <p className="font-cormorant italic text-gold text-sm">Founder & Energy Healer</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-6 bottom-12 bg-cream border border-gold/20 shadow-xl p-4 max-w-36">
                  <p className="font-cinzel text-[9px] tracking-[0.2em] uppercase text-gold mb-1">Experience</p>
                  <p className="font-cormorant text-3xl font-semibold text-obsidian">8+</p>
                  <p className="font-inter text-xs text-obsidian/50">years of healing</p>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div ref={ref2} className={`transition-all duration-700 delay-200 ${v2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <p className="section-label mb-4">Meet the Founder</p>
              <div className="h-px w-16 bg-gradient-to-r from-gold/40 to-transparent mb-8" />

              <h2 className="font-cormorant text-5xl font-light text-obsidian mb-2">
                Shuchita's
              </h2>
              <h2 className="font-cormorant text-5xl italic font-medium text-amethyst mb-8">
                Healing Journey
              </h2>

              <div className="space-y-5 font-inter text-sm text-obsidian/65 leading-loose">
                <p>
                  In 2018, Shuchita found herself at a crossroads — excelling externally while feeling deeply depleted within. Despite "doing everything right," there was an invisible weight she couldn't name. That's when her journey into energy healing began.
                </p>
                <p>
                  What started as personal exploration became a calling. Through years of studying crystal healing, chakra alignment, and emotional energy work, she discovered that most of our suffering stems not from circumstance, but from unresolved energetic patterns.
                </p>
                <p>
                  ZenAuura is the embodiment of her belief: <span className="text-amethyst font-medium italic">healing begins with awareness, not escape from pain.</span> Every crystal is selected, every session designed, with the intention of supporting real transformation — root cause, not surface.
                </p>
              </div>

              <blockquote className="mt-8 pl-6 border-l-2 border-gold/40">
                <p className="font-cormorant text-2xl italic text-obsidian/80 leading-relaxed">
                  "I don't just sell crystals. I offer tools for conscious living — and the wisdom to use them."
                </p>
                <cite className="font-cinzel text-[10px] tracking-widest text-gold uppercase mt-3 block not-italic">— Shuchita, Founder</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-spiritual-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amethyst/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <p className="section-label text-gold/60 mb-4">What We Stand For</p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <h2 className="font-cormorant text-5xl font-light text-cream">
              Our <span className="italic font-medium text-gold">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/25 transition-all duration-500 group"
              >
                <div className="w-12 h-12 border border-gold/25 flex items-center justify-center mb-6 group-hover:border-gold/60 transition-colors duration-300">
                  <Icon size={18} className="text-gold/70 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-cormorant text-xl font-medium text-cream mb-3">{title}</h3>
                <p className="font-inter text-xs text-cream/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section ref={ref3} className={`py-24 bg-cream transition-all duration-700 ${v3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The Journey</p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <h2 className="font-cormorant text-5xl font-light text-obsidian">
              From Healing to <span className="italic text-amethyst">Purpose</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

            {timeline.map(({ year, event }, i) => (
              <div key={year} className="relative flex items-start gap-10 mb-10 last:mb-0 group">
                {/* Year bubble */}
                <div className="relative z-10 shrink-0 w-32 text-right">
                  <span className="font-cinzel text-sm font-semibold text-amethyst">{year}</span>
                </div>

                {/* Dot */}
                <div className="relative z-10 shrink-0 w-3 h-3 rounded-full border-2 border-gold bg-cream mt-1 group-hover:bg-gold transition-colors duration-300" />

                {/* Event */}
                <p className="font-inter text-sm text-obsidian/65 leading-relaxed pt-0.5 pb-6 border-b border-amethyst/8 flex-1 last:border-0">
                  {event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-mist/50 border-t border-amethyst/10">
        <div className="container-max text-center">
          <p className="section-label mb-4">Begin Your Journey</p>
          <h2 className="font-cormorant text-5xl font-light text-obsidian mb-6">
            Ready to <span className="italic text-amethyst">Transform</span>?
          </h2>
          <p className="font-inter text-sm text-obsidian/50 mb-8 max-w-sm mx-auto">
            Whether through a crystal, a session, or simply a conversation — your healing begins with one step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/shop" className="btn-primary">
              Shop Crystals <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-gold">
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
