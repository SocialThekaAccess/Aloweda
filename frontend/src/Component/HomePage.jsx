import { useState, useEffect, useRef, useCallback } from 'react'
import AlowedaLogo from '../assets/AlowedaLogo.png'
import Slide1 from '../assets/HomeSlider1.png'
import Slide2 from '../assets/HomeSlider2.png'
import Slide3 from '../assets/HomeSlider3.png'
// import Slide4 from '../assets/HomeSlider4.png'
import Slide5 from '../assets/HomeSlider5.png'
import Navbar from '../Navbar/navbar'
import BestSellers from './BestSeller'
import ImageCarousel from './ImageCarousel'
import CategorySlider from './CategorySlider'
import Footer from '../Footer/Footer'
import './HomePage.css'

/* ─────────────── DATA ─────────────── */

const slides = [
  {
    id: 1,
    image: Slide1,
    tag: 'Ayurvedic',
    heading: 'What is Aloweda',
    sub: 'Blend of Ayurveda with Modern Allopathy. We promise results, not miracles!',
    cta: 'SHOP NOW',
    position: 'center',
  },
  {
    id: 2,
    image: Slide2,
    tag: 'Best Seller',
    heading: 'Lip Care',
    sub: 'Day & Night Ritual',
    cta: 'SHOP NOW',
    position: 'center',
  },
    {
    id: 3,
    image: Slide3,
    tag: 'New Launch',
    heading: 'Hair Care',
    sub: 'Glow Essence',
    cta: 'SHOP NOW',
    position: 'center',
  },
//   {
//     id: 4,
//     image: Slide4,
//     tag: 'Trending',
//     heading: 'Dietary Supplements',
//     sub: 'Advanced Formula',
//     cta: 'Shop Now',
//     position: 'right center',
//   },
  {
    id: 5,
    image: Slide5,
    tag: 'Bestseller',
    heading: 'Smart Skin Care',
    sub: 'Anti-Aging Range',
    cta: 'Shop Now',
    position: 'top center', 
  },
]

const categories = [
  { label: 'Face Serums', icon: '✦' },
  { label: 'Moisturisers', icon: '✦' },
  { label: 'Face Wash', icon: '✦' },
  { label: 'Eye Care', icon: '✦' },
  { label: 'Sunscreen', icon: '✦' },
  { label: 'Hair Care', icon: '✦' },
]

/* ─────────────── HERO SLIDER ─────────────── */
/* Full-bleed background-image slides with text overlay (matches aloweda.com reference) */

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5000)
  }

  return (
    <section className="hero">
      <div className="hero__track">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
          >
            <div
              className="hero__bg"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position || 'center',
              }}
            />
            <div className="hero__overlay" />
            <div className="hero__content">
              <span className="hero__tag">{slide.tag}</span>
              <h1 className="hero__heading">{slide.heading}</h1>
              <p className="hero__sub">{slide.sub}</p>
              <button className="btn btn--dark">{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="hero__arrow hero__arrow--prev"
        onClick={() => { prev(); resetTimer() }}
        aria-label="Previous"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="hero__arrow hero__arrow--next"
        onClick={() => { next(); resetTimer() }}
        aria-label="Next"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => { goTo(i); resetTimer() }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

/* ─────────────── MARQUEE STRIP ─────────────── */

function MarqueeStrip() {
  const items = ['Free Shipping Above ₹999', 'Ayurvedic Formulas', '100% Natural Ingredients', 'Dermatologist Tested', 'No Parabens · No Sulphates', 'Made in India ✦']
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────── CATEGORIES ─────────────── */

function Categories() {
  return (
    <section className="section categories-section">
      <div className="section__header">
        <span className="section__eyebrow">Browse</span>
        <h2 className="section__title">Shop by Category</h2>
      </div>
      <div className="categories-grid">
        {categories.map((c) => (
          <a key={c.label} href="#" className="category-card">
            <div className="category-card__icon">{c.icon}</div>
            <span className="category-card__label">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ─────────────── WHY ALOWEDA ─────────────── */

function WhyAloweda() {
  const pillars = [
    { icon: '🌿', title: 'Pure Ayurveda', desc: 'Time-tested herbs blended with modern science for real results.' },
    { icon: '🧪', title: 'Dermatologist Tested', desc: 'Every formula is clinically evaluated for safety and efficacy.' },
    { icon: '✦', title: 'No Nasties', desc: 'Zero parabens, sulphates, or artificial fragrances. Ever.' },
    { icon: '📦', title: 'Sustainable Packaging', desc: 'Eco-conscious packaging that doesn\'t cost the planet.' },
  ]
  return (
    <section className="section why-section">
      <div className="why-section__inner">
        <div className="section__header section__header--left">
          <span className="section__eyebrow">Our Promise</span>
          <h2 className="section__title">Why Aloweda?</h2>
          <p className="section__desc">Sensible. Simple. Synergy. — That's not just a tagline, it's our formula.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div key={p.title} className="pillar-card">
              <div className="pillar-card__icon">{p.icon}</div>
              <h3 className="pillar-card__title">{p.title}</h3>
              <p className="pillar-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── TESTIMONIALS ─────────────── */

function Testimonials() {
  const reviews = [
    { name: 'Priya S.', loc: 'Mumbai', text: 'My skin has never felt this balanced. The Glow Serum is genuinely life-changing.', stars: 5 },
    { name: 'Arjun M.', loc: 'Delhi', text: 'I was sceptical at first but three weeks in — my pigmentation has visibly reduced.', stars: 5 },
    { name: 'Sneha R.', loc: 'Bangalore', text: 'Clean ingredients, beautiful packaging, and the results speak for themselves.', stars: 5 },
  ]
  return (
    <section className="section testimonials-section">
      <div className="section__header">
        <span className="section__eyebrow">Reviews</span>
        <h2 className="section__title">What People Say</h2>
      </div>
      <div className="testimonials-grid">
        {reviews.map((r) => (
          <div key={r.name} className="testimonial-card">
            <div className="testimonial-card__stars">{'★'.repeat(r.stars)}</div>
            <p className="testimonial-card__text">"{r.text}"</p>
            <div className="testimonial-card__author">
              <span className="testimonial-card__name">{r.name}</span>
              <span className="testimonial-card__loc">{r.loc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────── ROOT ─────────────── */

export default function HomePage({ onNavigate }) {
  return (
    <div className="page">
      <Navbar onNavigate={onNavigate} />
      <main>
        <HeroSlider />
        <MarqueeStrip />
        <BestSellers onNavigate={onNavigate} />
        <CategorySlider />
        <ImageCarousel />
        <Categories />
        <WhyAloweda />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}