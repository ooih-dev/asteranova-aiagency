import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Training from '@/components/Training'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Training />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
