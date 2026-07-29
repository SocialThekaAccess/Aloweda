import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer'
import './ShopPage.css'

import LC1 from '../LipCareImg/LipCare1.jpg'
import LC2 from '../LipCareImg/LipCare2.jpg'

const products = [
  { id:1, img:LC1, name:'Lip Butter 8 Gram: Butters, Oils & Honey.ZERO CHEMICALS, NO PRESERVATIVES',                    price:'Rs. 75.00' },
  { id:2, img:LC2, name:'Lip Butter 15 Gram: Butters, Oils & Honey. NO CHEMICALS, NO PRESERVATIVES. NOT LIP BALM',  price:'From Rs. 165.00' },
]

export default function LipCarePage({ onNavigate }) {
  return (
    <div className="shop-page">
      <Navbar onNavigate={onNavigate} />

      <div className="shop-page__hero">
        <h1 className="shop-page__hero-title">Lip Care</h1>
      </div>

      <div className="shop-page__topbar">
        <span className="shop-page__meta"><strong>{products.length} Products</strong></span>
      </div>

      <div className="shop-page__grid">
        {products.map(p => (
          <div key={p.id} className="sp-card">
            <div className="sp-card__img-wrap">
              <img src={p.img} alt={p.name} className="sp-card__img" />
            </div>
            <div className="sp-card__body">
              <p className="sp-card__name">{p.name}</p>
              <div className="sp-card__footer">
                <span className="sp-card__price">{p.price}</span>
                <button className="sp-add-btn">Add to Bag</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-page__info">
        <h2 className="shop-page__info-title">Lip Care</h2>
        <p className="shop-page__info-desc">
          Nourish, protect and beautify your lips with our range of natural lip care products.
          Formulated with Shea Butter, Vitamin E and Ayurvedic botanicals for soft, supple lips every day.
        </p>
        <button className="shop-page__quiz-btn">Start Quiz</button>
      </div>
      <Footer />
    </div>
  )
}
