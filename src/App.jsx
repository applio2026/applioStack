import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IconSprite from './components/IconSprite'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import BookDemoPage from './pages/BookDemoPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <IconSprite />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
