import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <main>
      <Navbar />
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
