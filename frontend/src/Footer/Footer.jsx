import { useState, useEffect } from 'react'
import AlowedaLogo from '../assets/AlowedaLogo.png'
import './Footer.css'

const shopLinks = ['Smart Skincare', 'Lip Care', 'Hair Care', 'Serums', 'Creams', 'Moisturisers']
const companyLinks = ['About Us', 'Our Story', 'Careers', 'Contact Us']
const supportLinks = ['Track Order', 'Returns', 'Shipping Policy', 'Privacy Policy', 'FAQs']

/* ── Scroll To Top ── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}

/* ── Footer ── */
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <img src={AlowedaLogo} alt="Aloweda" className="footer__logo" />
            <p className="footer__tagline">Sensible · Simple · Synergy</p>
            <p className="footer__bio">
              Ayurvedic skincare rooted in tradition, refined by science.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Shop</h4>
              {shopLinks.map(l => <a key={l} href="#" className="footer__link">{l}</a>)}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              {companyLinks.map(l => <a key={l} href="#" className="footer__link">{l}</a>)}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Support</h4>
              {supportLinks.map(l => <a key={l} href="#" className="footer__link">{l}</a>)}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Aloweda. All rights reserved.</p>
          <p className="footer__made">Made with ❤️ in India</p>
        </div>
      </footer>

      <ScrollToTop />
    </>
  )
}
