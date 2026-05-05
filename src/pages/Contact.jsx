import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink, Link2, Send, Check } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const subjects = [
    'Book a Healing Session',
    'Crystal Enquiry',
    'Custom Crystal Order',
    'Wholesale Enquiry',
    'General Question',
  ]

  return (
    <div className="page-enter min-h-screen bg-cream">
      {/* ─── HERO ─── */}
      <section className="page-hero pt-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-25"
          style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(ellipse at 30% 70%, rgba(123,94,167,0.4) 0%, transparent 50%)' }} />

        <div className="container-max relative z-10 py-24 text-center">
          <p className="section-label text-gold/70 mb-4">Get in Touch</p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
          <h1 className="font-cormorant text-6xl md:text-7xl font-light text-cream mb-6">
            Let's <span className="italic font-medium text-gradient-gold">Connect</span>
          </h1>
          <p className="font-inter text-sm text-cream/50 max-w-md mx-auto leading-relaxed">
            Whether you have a question, want to book a session, or simply want to say hello — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTACT SECTION ─── */}
      <section className="py-24 bg-cream bg-sacred-pattern">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact info */}
              <div>
                <p className="section-label mb-6">Reach Us</p>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@zenauura.com', href: 'mailto:hello@zenauura.com' },
                    { icon: Phone, label: 'Phone / WhatsApp', value: '+91 98765 43210', href: 'tel:+919876543210' },
                    { icon: MapPin, label: 'Location', value: 'India (Sessions available worldwide)', href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-5">
                      <div className="w-12 h-12 border border-gold/25 flex items-center justify-center shrink-0 bg-mist/50">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-cinzel text-[9px] tracking-[0.25em] uppercase text-obsidian/40 mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="font-inter text-sm text-obsidian hover:text-amethyst transition-colors duration-300">
                            {value}
                          </a>
                        ) : (
                          <p className="font-inter text-sm text-obsidian">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="section-label mb-6">Follow the Journey</p>
                <div className="flex gap-3">
                  {[
                    { icon: ExternalLink, label: 'Instagram', href: 'https://instagram.com/zenauura' },
                    { icon: Link2, label: 'Facebook', href: 'https://facebook.com/zenauura' },
                    { icon: Mail, label: 'Email', href: 'mailto:hello@zenauura.com' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-amethyst/15 flex items-center justify-center text-obsidian/50 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Session hours */}
              <div className="p-8 bg-mist/50 border border-amethyst/10">
                <p className="section-label mb-5">Session Availability</p>
                <div className="space-y-3">
                  {[
                    { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM IST' },
                    { day: 'Saturday', time: '10:00 AM – 4:00 PM IST' },
                    { day: 'Sunday', time: 'By special arrangement' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-amethyst/8 last:border-0">
                      <span className="font-inter text-xs text-obsidian/60">{day}</span>
                      <span className="font-cinzel text-[10px] tracking-wide text-amethyst">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="p-10 lg:p-12 border border-amethyst/10 bg-white/60 backdrop-blur-sm shadow-xl shadow-amethyst/5">
                <p className="section-label mb-2">Send a Message</p>
                <h2 className="font-cormorant text-4xl font-light text-obsidian mb-8">
                  Start a <span className="italic text-amethyst">Conversation</span>
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4">
                    <div className="w-16 h-16 bg-amethyst/10 border border-amethyst/20 flex items-center justify-center">
                      <Check size={24} className="text-amethyst" />
                    </div>
                    <h3 className="font-cormorant text-3xl text-obsidian">Message Received</h3>
                    <p className="font-inter text-sm text-obsidian/50 text-center max-w-sm">
                      Thank you for reaching out. We will respond within 24 hours with love and intention.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-obsidian/50 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-amethyst/15 bg-cream focus:border-amethyst focus:outline-none px-4 py-3.5 font-inter text-sm text-obsidian placeholder:text-obsidian/25 transition-colors duration-300"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-obsidian/50 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-amethyst/15 bg-cream focus:border-amethyst focus:outline-none px-4 py-3.5 font-inter text-sm text-obsidian placeholder:text-obsidian/25 transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-obsidian/50 mb-2">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-amethyst/15 bg-cream focus:border-amethyst focus:outline-none px-4 py-3.5 font-inter text-sm text-obsidian transition-colors duration-300 cursor-pointer"
                      >
                        <option value="" className="text-obsidian/40">Select a subject…</option>
                        {subjects.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-cinzel text-[10px] tracking-[0.2em] uppercase text-obsidian/50 mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={6}
                        required
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-amethyst/15 bg-cream focus:border-amethyst focus:outline-none px-4 py-3.5 font-inter text-sm text-obsidian placeholder:text-obsidian/25 transition-colors duration-300 resize-none"
                        placeholder="Share what's on your heart…"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center"
                    >
                      Send Message <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─── */}
      <section className="py-20 bg-spiritual-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.5) 0%, transparent 60%)' }} />
        <div className="container-max relative z-10 text-center">
          <p className="section-label text-gold/60 mb-4">Skip the Wait</p>
          <h2 className="font-cormorant text-4xl font-light text-cream mb-4">
            Book a <span className="italic font-medium text-gold">Healing Session</span> Directly
          </h2>
          <p className="font-inter text-sm text-cream/50 mb-8 max-w-sm mx-auto">
            Prefer to speak directly? WhatsApp us and we'll get you scheduled within 24 hours.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
