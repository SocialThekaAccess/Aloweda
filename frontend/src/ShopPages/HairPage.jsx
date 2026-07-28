import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer'
import HairCareImg from '../assets/HairCare.png'
import './ShopPage.css'

const products = [
  { id:1, img:HairCareImg, name:'Redensyl 5%, Anagain 5%, Rice water & Biotin: Total Hair Therapy Serum 50 ml', price:'₹ 575' },
]

export default function HairCarePage({ onNavigate }) {
  return (
    <div className="shop-page">
      <Navbar onNavigate={onNavigate} />

      <div className="shop-page__hero">
        <h1 className="shop-page__hero-title">Hair Care</h1>
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
        <h2 className="shop-page__info-title">Hair Care</h2>
        <p className="shop-page__info-desc">
          Strengthen, nourish and revive your hair with our Ayurvedic hair care range.
          Powered by Biotin, Argan Oil and natural botanicals for healthy, lustrous hair.
        </p>
        <button className="shop-page__quiz-btn">Start Quiz</button>
      </div>
      <Footer />
    </div>
  )
}
