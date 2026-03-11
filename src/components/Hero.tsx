import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 lg:px-24 flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-12xl mx-auto">
        {/* Left Side: Content */}
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm">Backend Focused — Fullstack Evolving</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 leading-[1.05]">
              Building <span className="text-secondary">scalable</span> systems & digital experiences.
            </h1>
            <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
              I'm a Backend Developer specializing in robust API architecture and system design, now bridging the gap to frontend to deliver complete, high-performance web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 border border-primary/20 rounded-full hover:bg-primary/5 transition-colors">
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual / Stats */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:justify-self-end">
          {/* Decorative box behind the portrait */}
          <div className="w-full max-w-md aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Ganti src dengan foto profil profesional Anda */}
            <img src="/lee.jpg" alt="Developer Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
          </div>

          {/* Floating Stats Card */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-[10px] uppercase text-secondary tracking-widest">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-[10px] uppercase text-secondary tracking-widest">APIs Built</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => {
          const section = document.getElementById("about")
          if (section) {
            section.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-secondary">Scroll</span>

        {/* Mouse Scroll Indicator */}
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center relative">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
