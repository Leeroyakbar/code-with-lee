import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const CTA = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-24 bg-primary text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-[200px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white rounded-full blur-[200px] bottom-[-120px] right-[-120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-8">Let's Collaborate</p>

          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            Have an idea or opportunity?
            <br />
            Let's build something great together.
          </h2>

          <p className="text-secondary max-w-xl mx-auto mb-14">I'm always open to discussing new projects, backend architecture, or fullstack collaboration opportunities.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a href="mailto:contact.codewithlee@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:gap-4 transition-all">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            <a href="https://github.com/Leeroyakbar" target="_blank" className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-primary transition-all">
              View GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-10">
            <a href="https://www.linkedin.com/in/leeroyakbar/" target="_blank" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a href="https://github.com/Leeroyakbar" target="_blank" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
              <Github size={18} />
              GitHub
            </a>

            <a href="mailto:contact.codewithlee@gmail.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
              <Mail size={18} />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
