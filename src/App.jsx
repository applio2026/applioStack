import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IconSprite from './components/IconSprite'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <IconSprite />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
