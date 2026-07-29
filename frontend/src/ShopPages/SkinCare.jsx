import Navbar from '../Navbar/navbar'
import Footer from '../Footer/Footer'
import './ShopPage.css'

import SC1  from '../SkinCareImg/SkinCare1.png'
import SC2  from '../SkinCareImg/SkinCare2.png'
import SC3  from '../SkinCareImg/SkinCare3.jpg'
import SC4  from '../SkinCareImg/SkinCare4.jpg'
import SC5  from '../SkinCareImg/SkinCare5.jpg'
import SC6  from '../SkinCareImg/SkinCare6.jpg'
import SC7  from '../SkinCareImg/SkinCare7.jpg'
import SC8  from '../SkinCareImg/SkinCare8.jpg'
import SC9  from '../SkinCareImg/SkinCare9.jpg'
import SC10 from '../SkinCareImg/SkinCare10.jpg'
import SC11 from '../SkinCareImg/SkinCare11.jpg'
import SC12 from '../SkinCareImg/SkinCare12.jpg'
import SC13 from '../SkinCareImg/SkinCare13.jpg'
import SC14 from '../SkinCareImg/SkinCare14.jpg'
import SC15 from '../SkinCareImg/SkinCare15.jpg'

const products = [
  { id:1,  img:SC1,  name:'YOUR SIMPLE ROUTINE: The Day Cream + The Night Cream + Lip Butter',                                             price:'₹ 799' },
  { id:2,  img:SC2,  name:'PERFECT COMPLEXION RITUAL: Pigment Control Serum + The Day Cream + Complexion Cream + Smooth Perfection Serum',  price:'₹ 999' },
  { id:3,  img:SC3,  name:'RITUAL OF RADIANCE: Super Glow Serum 30 ml + The Day Cream + Radiance Cream 50 gram',                           price:'₹ 999' },
  { id:4,  img:SC4,  name:'Hyaluronic Acid, SPF 30 & Vitamin E : The Day Cream 50 G',                                                      price:'₹ 249' },
  { id:5,  img:SC5,  name:'Retinol 1%, Niacinamide 10 %, Aloe Vera Extract & Carrot oil: The Night Cream 50 G',                            price:'₹ 399' },
  { id:6,  img:SC6,  name:'Saffron Face Oil 30 ml: Saffron Essential Oil, Sweet Almond oil, Grape Seed Oil, Honey & Ghee',                 price:'₹ 799' },
  { id:7,  img:SC7,  name:'Alpha Arbutin 2%, Vitamin C 15 % & Micro Crystalline Wax: Complexion Cream 50 G',                               price:'₹ 399' },
  { id:8,  img:SC8,  name:'Vitamin C 15%, Ferulic Acid 1% & Niacinamide 5% : Super Glow Serum 30 ml',                                      price:'₹ 549' },
  { id:9,  img:SC9,  name:'Alpha Arbutin 2%, Aloe Vera Extract, Ceramides & Kojic Acid 1%: Pigment Control Serum 30 ml',                   price:'₹ 399' },
  { id:10, img:SC10, name:'Retinol 0.3%, Copper Tripeptide, Alpha Arbutin & Niacinamide: Wrinkles & Lines Cream 50 G',                     price:'₹ 449' },
  { id:11, img:SC11, name:'Encapsulated Retinol 1 %, Grape Seed Extract, & Ceramides : Lines & Wrinkles Serum 30 ml',                      price:'₹ 499' },
  { id:12, img:SC12, name:'Niacinamide 10 %, Acetyl Glucosamine & Ceramides: Tone & Texture Serum 30 ml',                                  price:'₹ 375', mrp:'₹ 545' },
  { id:13, img:SC13, name:'Salicylic Acid 2%, Witch Hazel Extract & Squalene: Smooth Perfection Serum 30 ml',                              price:'₹ 449' },
  { id:14, img:SC14, name:'Vitamin C 20%, Kojic Acid, Avocado Extract & Argan Oil : Radiance Cream 50 G',                                  price:'₹ 399' },
  { id:15, img:SC15, name:'Anti Acne Face wash: 100 ml, Salicylic Acid 2% for Oily & Acne Prone Skin',                                     price:'₹ 185' },
]

export default function SkinCarePage({ onNavigate }) {
  return (
    <div className="shop-page">
      <Navbar onNavigate={onNavigate} />

      {/* Big page heading — reference style */}
      <div className="shop-page__hero">
        <h1 className="shop-page__hero-title">Smart Skincare</h1>
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
                {p.mrp && <span className="sp-card__mrp">{p.mrp}</span>}
                <button className="sp-add-btn">Add to Bag</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shop-page__info">
        <h2 className="shop-page__info-title">Smart Skincare</h2>
        <p className="shop-page__info-desc">
          We believe skincare should be simple, effective, and powered by nature.
          Our smart skincare range combines ancient Ayurvedic wisdom with modern science
          to target your skin's unique needs. Whether it's hydration, acne care, or
          anti-aging, our formulations are designed to help you achieve long-lasting
          glow and confidence, naturally.
        </p>
        <button className="shop-page__quiz-btn">Start Quiz</button>
      </div>
      <Footer />
    </div>
  )
}
