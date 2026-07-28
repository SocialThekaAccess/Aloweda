import { useState, useRef } from 'react'
import './BestSeller.css'

import SC1  from '../SkinCareImg/SkinCare1.png'
import SC2  from '../SkinCareImg/SkinCare2.jpg'
import SC3  from '../SkinCareImg/SkinCare3.jpg'
import SC4  from '../SkinCareImg/SkinCare4.jpg'
import SC5  from '../SkinCareImg/SkinCare5.png'
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

import HairCareImg from '../assets/HairCare.png'
import LipCareImg  from '../assets/LipCare.png'

import LC1 from '../LipCareImg/LipCare1.jpg'
import LC2 from '../LipCareImg/LipCare2.jpg'

/* ── Product data per tab ─────────────────────────────────────────────── */
const productsByTab = {
  skincare: [
    { id:1,  img: SC1,  name: 'Glow Essence Face Serum',     price: '₹ 799', mrp: '₹ 999', tag: 'Best Seller' },
    { id:2,  img: SC2,  name: 'The Day Cream SPF 30',         price: '₹ 899', mrp: '₹ 1099',tag: 'New' },
    { id:3,  img: SC3,  name: 'Super Glow Face Serum',        price: '₹ 749', mrp: '₹ 949', tag: 'Trending' },
    { id:4,  img: SC4,  name: 'Tone & Texture Serum',         price: '₹ 849', mrp: '₹ 1049',tag: 'Best Seller' },
    { id:5,  img: SC5,  name: 'Radiance Night Cream',         price: '₹ 999', mrp: '₹ 1299',tag: 'Premium' },
    { id:6,  img: SC6,  name: 'Vitamin C Brightening Serum',  price: '₹ 699', mrp: '₹ 899', tag: 'Best Seller' },
    { id:7,  img: SC7,  name: 'Hydra Boost Moisturiser',      price: '₹ 649', mrp: '₹ 799', tag: 'Popular' },
    { id:8,  img: SC8,  name: 'Retinol Repair Serum',         price: '₹ 1099',mrp: '₹ 1399',tag: 'Premium' },
    { id:9,  img: SC9,  name: 'SPF 50 Sunscreen',             price: '₹ 549', mrp: '₹ 699', tag: 'Must Have' },
    { id:10, img: SC10, name: 'Niacinamide 10% Serum',        price: '₹ 599', mrp: '₹ 749', tag: 'Trending' },
    { id:11, img: SC11, name: 'AHA BHA Exfoliating Serum',    price: '₹ 799', mrp: '₹ 999', tag: 'New' },
    { id:12, img: SC12, name: 'Ceramide Repair Cream',        price: '₹ 849', mrp: '₹ 1049',tag: 'Best Seller' },
    { id:13, img: SC13, name: 'Under Eye Serum',              price: '₹ 699', mrp: '₹ 899', tag: 'Popular' },
    { id:14, img: SC14, name: 'Saffron Glow Face Oil',        price: '₹ 899', mrp: '₹ 1199',tag: 'Premium' },
    { id:15, img: SC15, name: 'Kojic Acid Serum',             price: '₹ 749', mrp: '₹ 949', tag: 'Trending' },
  ],
  lipcare: [
    { id:1, img: LC1, name: 'Velvet Lip Butter',  price: '₹ 299', mrp: '₹ 399', tag: 'Fan Favourite' },
    { id:2, img: LC2, name: 'Lip Repair Balm',    price: '₹ 349', mrp: '₹ 449', tag: 'Best Seller'   },
  ],
  haircare: [
    { id:1, img: HairCareImg, name: 'Total Hair Therapy Serum', price: '₹ 699', mrp: '₹ 899', tag: 'Best Seller' },
  ],
}

const tabs = [
  { id: 'skincare', label: 'Skin Care' },
  { id: 'lipcare',  label: 'Lip Care'  },
  { id: 'haircare', label: 'Hair Care' },
]

const VISIBLE = 4 // cards visible at a time

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState('skincare')
  const [startIdx, setStartIdx] = useState(0)
  const products = productsByTab[activeTab]

  const handleTab = (id) => {
    setActiveTab(id)
    setStartIdx(0)
  }

  const canPrev = startIdx > 0
  const canNext = startIdx + VISIBLE < products.length

  const prev = () => { if (canPrev) setStartIdx(i => i - 1) }
  const next = () => { if (canNext) setStartIdx(i => i + 1) }

  const visible = products.slice(startIdx, startIdx + VISIBLE)

  return (
    <section className="section best-sellers">
      {/* Header */}
      <div className="bs__top">
        <h2 className="section__title">Best Sellers</h2>

        {/* Tabs */}
        <div className="best-sellers__tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`best-sellers__tab ${activeTab === tab.id ? 'best-sellers__tab--active' : ''}`}
              onClick={() => handleTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="bs__grid">
        {visible.map(p => (
          <div key={p.id} className="product-card">
            <div className="product-card__img-wrap">
              <img src={p.img} alt={p.name} className="product-card__img" />
              <span className="product-card__tag">{p.tag}</span>
              <div className="product-card__overlay">
                <button className="btn btn--white">Quick View</button>
              </div>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__name">{p.name}</h3>
              <div className="product-card__footer">
                <div className="product-card__prices">
                  <span className="product-card__price">{p.price}</span>
                  <span className="product-card__mrp">{p.mrp}</span>
                </div>
                <button className="btn btn--outline-dark btn--sm">Add to Bag</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar: divider + arrows */}
      <div className="bs__footer">
        <div className="bs__footer-line" />
        <div className="bs__arrows">
          <button
            className={`bs__arrow ${!canPrev ? 'bs__arrow--disabled' : ''}`}
            onClick={prev}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            className={`bs__arrow ${!canNext ? 'bs__arrow--disabled' : ''}`}
            onClick={next}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
