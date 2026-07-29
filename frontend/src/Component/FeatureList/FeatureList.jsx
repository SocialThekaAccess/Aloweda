import { useState } from 'react'
import './FeatureList.css'
import FeatureImage from '../../assets/FeaturedListSkinCare.png'

const features = [
  { id: 1, label: 'SKIN CARE', page: 'skincare' },
  { id: 2, label: 'HAIR CARE', page: 'hair' },
  { id: 3, label: 'DIETERY SUPPLEMENTS', page: 'shop' },
  { id: 4, label: 'LIP CARE', page: 'lip' },
]

export default function FeatureList({ onNavigate }) {
  const [selectedFeature, setSelectedFeature] = useState(1)

  const handleFeatureClick = (featureId) => {
    setSelectedFeature(featureId)
  }

  const handleShopNow = () => {
    const selected = features.find(f => f.id === selectedFeature)
    if (selected && onNavigate) {
      onNavigate(selected.page)
    }
  }

  return (
    <section className="feature-list-section">
      <div className="feature-list-container">
        {/* Left: Image */}
        <div className="feature-list-image">
          <img src={FeatureImage} alt="Aloweda Skincare" />
        </div>

        {/* Right: Feature List */}
        <div className="feature-list-content">
          <h2 className="feature-list-title">Feature List</h2>
          
          <div className="feature-items">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`feature-item ${selectedFeature === feature.id ? 'feature-item--active' : ''}`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className="feature-checkbox">
                  {selectedFeature === feature.id && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="feature-label">{feature.label}</span>
              </div>
            ))}
          </div>

          <button className="feature-shop-btn" onClick={handleShopNow}>
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  )
}
