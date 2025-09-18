import Header from '@/components/Header'
import FirstView from '@/components/FirstView'
import Services from '@/components/Services'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FirstView />
      <Services />
      <Features />
      <FAQ />
      <Footer />
    </main>
  )
}
