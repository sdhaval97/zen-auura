import { Link } from 'react-router-dom'
import { ExternalLink, Link2, Mail, Phone, MapPin, Heart } from 'lucide-react'

const footerLinks = {
  Explore: [
    { label: 'Home', to: '/' },
    { label: 'Energised Crystals', to: '/shop' },
    { label: 'Healing Services', to: '/services' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Collections: [
    { label: 'Amethyst', to: '/shop' },
    { label: 'Rose Quartz', to: '/shop' },
    { label: 'Black Tourmaline', to: '/shop' },
    { label: 'Citrine', to: '/shop' },
    { label: 'Lapis Lazuli', to: '/shop' },
  ],
  Policies: [
    { label: 'Privacy Policy', to: '/contact' },
    { label: 'Shipping Policy', to: '/contact' },
    { label: 'Refund Policy', to: '/contact' },
    { label: 'Terms of Service', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream/70 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amethyst/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h2 className="font-cinzel text-2xl text-cream tracking-[0.25em] mb-1">ZENAUURA</h2>
              <p className="font-cormorant italic text-gold text-sm tracking-widest mb-6">Where Energy Finds Its Way</p>
            </Link>
            <p className="font-inter text-sm leading-relaxed text-cream/50 mb-8 max-w-xs">
              Reconnect with your true nature through the ancient wisdom of healing crystals and conscious energy work.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/zenauura" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-cream/50">
                <ExternalLink size={16} />
              </a>
              <a href="https://facebook.com/zenauura" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-cream/50">
                <Link2 size={16} />
              </a>
              <a href="mailto:hello@zenauura.com"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 text-cream/50">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="font-inter text-xs text-cream/40 hover:text-gold transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs text-cream/30 font-inter">
            <span className="flex items-center gap-2"><Mail size={12} /> hello@zenauura.com</span>
            <span className="flex items-center gap-2"><Phone size={12} /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><MapPin size={12} /> India</span>
          </div>
          <p className="text-xs text-cream/25 font-inter flex items-center gap-1">
            Made with <Heart size={10} className="text-rose-quartz fill-rose-quartz" /> © {new Date().getFullYear()} ZenAuura
          </p>
        </div>
      </div>
    </footer>
  )
}
