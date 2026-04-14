import Nav from '@/components/Nav'
import CoopHero from '@/components/CoopHero'
import CoopWhoWeAre from '@/components/CoopWhoWeAre'
import CoopSynergies from '@/components/CoopSynergies'
import CoopUseCases from '@/components/CoopUseCases'
import CoopCTA from '@/components/CoopCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AsteraNova × AI Agency — Партнёрство',
  description: 'Синергия технологического стека AsteraNova и консалтинговой экспертизы AI Agency',
}

export default function CooperationPage() {
  return (
    <main>
      <Nav />
      <CoopHero />
      <CoopWhoWeAre />
      <CoopSynergies />
      <CoopUseCases />
      <CoopCTA />
      <Footer />
    </main>
  )
}
