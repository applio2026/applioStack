import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Products from '../components/Products'
import DashboardPreview from '../components/DashboardPreview'
import MetricsStrip from '../components/MetricsStrip'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <DashboardPreview />
      <MetricsStrip />
      <Features />
      <Testimonial />
      <Pricing />
      <CtaBanner />
      <Footer />
    </>
  )
}
