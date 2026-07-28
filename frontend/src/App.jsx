import { useState } from 'react'
import './App.css'
import HomePage from './Component/HomePage'
import SkinCarePage from './ShopPages/SkinCare'
import HairCarePage from './ShopPages/HairPage'
import LipCarePage  from './ShopPages/LipCare'

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (page === 'skincare' || page === 'serums' || page === 'creams' || page === 'moisturisers' || page === 'tattoo' || page === 'rituals') return <SkinCarePage onNavigate={navigate} />
  if (page === 'haircare' || page === 'hair') return <HairCarePage onNavigate={navigate} />
  if (page === 'lipcare'  || page === 'lip')  return <LipCarePage  onNavigate={navigate} />

  return <HomePage onNavigate={navigate} />
}
