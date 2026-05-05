import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Energised Crystals' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-lg shadow-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className={`font-cinzel font-semibold text-xl tracking-[0.2em] transition-colors duration-300 ${scrolled ? 'text-obsidian' : 'text-cream'}`}>
              ZENAUURA
            </span>
            <span className={`font-cormorant text-xs italic tracking-widest transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-gold/80'}`}>
              Where Energy Finds Its Way
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-cinzel text-[11px] tracking-[0.2em] uppercase transition-all duration-300 relative pb-1
                  after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300
                  ${isActive
                    ? `text-gold after:w-full`
                    : `${scrolled ? 'text-obsidian/60' : 'text-cream/70'} hover:${scrolled ? 'text-amethyst' : 'text-gold'} after:w-0 hover:after:w-full`
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 transition-colors duration-300 ${scrolled ? 'text-obsidian/60 hover:text-amethyst' : 'text-cream/70 hover:text-gold'}`}>
              <Search size={18} />
            </button>
            <Link
              to="/shop"
              className={`p-2 transition-colors duration-300 ${scrolled ? 'text-obsidian/60 hover:text-amethyst' : 'text-cream/70 hover:text-gold'}`}
            >
              <ShoppingBag size={18} />
            </Link>
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-obsidian hover:text-amethyst' : 'text-cream hover:text-gold'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-obsidian/95 backdrop-blur-xl border-t border-gold/10 px-6 py-6 flex flex-col gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-cream/70 hover:text-gold'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
