import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const phoneNumber = '919972263191' // Replace with your WhatsApp number
  const message = 'Hi! I am interested in your products from Aloweda.' // Default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <div className="whatsapp-glow"></div>
      <div className="whatsapp-circle">
        <svg 
          className="whatsapp-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A.5.5 0 003 21h.052l3.032-.892A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" 
            fill="white"
          />
          <path 
            d="M12 3c-4.962 0-9 4.038-9 9 0 1.657.45 3.208 1.233 4.538L3.15 19.85l3.312-1.083A8.955 8.955 0 0012 21c4.962 0 9-4.038 9-9s-4.038-9-9-9zm4.708 12.825c-.195.55-.97 1.01-1.588 1.145-.423.09-.975.163-2.836-.607-2.39-1.035-3.943-3.559-4.062-3.724-.12-.165-1.005-1.377-1.005-2.625 0-1.248.637-1.863.862-2.118.225-.255.49-.318.653-.318.163 0 .33.003.473.008.152.006.357-.058.558.425.203.495.693 1.69.753 1.813.06.123.1.267.02.432-.08.165-.12.268-.24.413-.12.145-.252.323-.36.433-.12.123-.245.256-.105.502.14.246.622 1.025 1.335 1.66.918.815 1.69 1.068 1.93 1.188.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.655 1.628.775.24.12.398.18.458.278.06.098.06.563-.135 1.113z" 
            fill="#25D366"
          />
        </svg>
      </div>
      <span className="whatsapp-tooltip">Chat with us</span>
    </div>
  )
}
