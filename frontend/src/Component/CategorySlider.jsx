import HairCare from '../assets/HairCare.png'
import SmartSkinCare from '../assets/SmartSkinCare.png'
import LC1 from '../LipCareImg/LipCare1.jpg'
import './CategorySlider.css'

const categoryCards = [
  { id: 1, title: 'Hair Care',      img: HairCare      },
  { id: 2, title: 'Lip Care',       img: LC1           },
  { id: 3, title: 'Smart Skincare', img: SmartSkinCare },
]

export default function CategorySlider() {
  return (
    <section className="cat-slider">
      <div className="cat-slider__header">
        <h2 className="cat-slider__heading">Shop By Collection</h2>
      </div>

      <div className="cat-slider__grid">
        {categoryCards.map((cat) => (
          <div key={cat.id} className="cat-slider__card">
            <div className="cat-slider__img-wrap">
              <img src={cat.img} alt={cat.title} className="cat-slider__img" />
            </div>
            <div className="cat-slider__label">
              <h3 className="cat-slider__title">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
