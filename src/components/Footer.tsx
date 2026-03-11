import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-20 px-6 lg:px-24 bg-background-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold mb-2">CodeWithLee</h3>

          <p className="text-sm text-secondary max-w-xs">Backend developer focused on building scalable systems and modern web applications.</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 text-sm font-medium">
          {["Home", "About", "Projects", "Blog", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-secondary transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-center md:justify-end gap-6">
          <a href="mailto:contact.codewithlee@gmail.com" className="p-3 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition">
            <Mail size={18} />
          </a>

          <a href="https://github.com/Leeroyakbar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition">
            <Github size={18} />
          </a>

          <a href="https://www.linkedin.com/in/leeroyakbar/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-secondary">
        <p>© {new Date().getFullYear()} CodeWithLee. Built with React & Tailwind.</p>

        <a href="#home" className="flex items-center gap-2 hover:text-primary transition">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
