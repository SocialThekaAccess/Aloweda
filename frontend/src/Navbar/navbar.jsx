import { useState, useEffect, useRef } from 'react'
import AlowedaLogo from '../assets/AlowedaLogo.png'
import { CATEGORIES } from '../data/products'
import './navbar.css'

export default function Navbar({ onNavigate, cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  const nav = (page, params) => {
    setMenuOpen(false)
    setShopOpen(false)
    setSearchOpen(false)
    onNavigate?.(page, params)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Left */}
        <nav className="navbar__left">
          <div
            className="navbar__dropdown-wrap"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="navbar__link navbar__link--arrow">
              Shop <span className="arrow">▾</span>
            </button>
            {shopOpen && (
              <div className="navbar__dropdown">
                <a className="navbar__dropdown-item navbar__dropdown-item--all"
                  href="#" onClick={e => { e.preventDefault(); nav('shop') }}>
                  All Products
                </a>
                {CATEGORIES.map((c) => (
                  <a key={c.id} href="#" className="navbar__dropdown-item"
                    onClick={e => { e.preventDefault(); nav('shop', { category: c.id }) }}>
                    {c.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="navbar__link" onClick={e => { e.preventDefault(); nav('bestsellers') }}>Best Sellers</a>
          <a href="#" className="navbar__link" onClick={e => { e.preventDefault(); nav('about') }}>About</a>
        </nav>

        {/* Logo */}
        <a href="/" className="navbar__logo-wrap" onClick={e => { e.preventDefault(); nav('home') }}>
          <img src={AlowedaLogo} alt="Aloweda" className="navbar__logo" />
          <span className="navbar__tagline">Sensible · Simple · Synergy</span>
        </a>

        {/* Right */}
        <div className="navbar__right">
          {searchOpen ? (
            <div className="navbar__search-bar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && searchQuery.trim()) { nav('shop', { search: searchQuery.trim() }); setSearchQuery('') } }}
                className="navbar__search-input"
              />
              <button className="navbar__search-close" onClick={() => { setSearchOpen(false); setSearchQuery('') }}>✕</button>
            </div>
          ) : (
            <button className="navbar__icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          )}
          <button className="navbar__icon-btn" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button className="navbar__icon-btn navbar__cart-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="navbar__cart-count">{cartCount}</span>}
          </button>
          <button className={`navbar__burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <a href="#" className="navbar__mobile-link" onClick={e => { e.preventDefault(); nav('home') }}>Home</a>
          <a href="#" className="navbar__mobile-link" onClick={e => { e.preventDefault(); nav('shop') }}>All Products</a>
          <a href="#" className="navbar__mobile-link" onClick={e => { e.preventDefault(); nav('bestsellers') }}>Best Sellers</a>
          <div className="navbar__mobile-divider">Shop by Category</div>
          {CATEGORIES.map((c) => (
            <a key={c.id} href="#" className="navbar__mobile-link navbar__mobile-link--sub"
              onClick={e => { e.preventDefault(); nav('shop', { category: c.id }) }}>
              {c.icon} {c.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
