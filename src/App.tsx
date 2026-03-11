import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

export default App
