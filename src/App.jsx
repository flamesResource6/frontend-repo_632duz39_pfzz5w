import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedBooks from './components/FeaturedBooks'
import Authors from './components/Authors'
import SubmissionForm from './components/SubmissionForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBooks />
        <Authors />
        <SubmissionForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
