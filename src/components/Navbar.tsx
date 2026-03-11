import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  // Efek untuk mengubah tampilan navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-24 py-6 ${scrolled ? "bg-background-light/80 backdrop-blur-md py-4 border-b border-primary/5" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-bold tracking-tightest">
          CodeWith<span className="text-secondary">LEE.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-300">
              {link.name}
            </a>
          ))}

          {/* Resume / CTA Button */}
          <a href="#contact" className="px-5 py-2 bg-primary text-accent text-xs font-bold uppercase tracking-widest rounded-full hover:bg-secondary transition-all duration-300">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon (Placeholder for now) */}
        <div className="md:hidden text-primary font-bold">MENU</div>
      </div>
    </motion.nav>
  )
}

export default Navbar
