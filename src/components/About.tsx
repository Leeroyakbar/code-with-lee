import { motion } from "framer-motion"

const features = [
  { title: "Clean Code", desc: "Prioritizing maintainable, readable, and efficient code in every module." },
  { title: "Scalable Backend", desc: "Designing architecture that grows with your business needs." },
  { title: "API Design", desc: "Crafting intuitive, robust, and secure RESTful services." },
  { title: "Fullstack Mindset", desc: "Bridging the gap between server-side logic and delightful user interfaces." },
]

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-secondary mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">Engineering robust backends while crafting modern frontend experiences.</h3>
        </div>

        {/* Philosophy Intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <p className="text-lg text-secondary leading-relaxed">
            I believe that great software is built on a foundation of strong architecture and a deep understanding of the problem space. My journey began in the world of Java and Spring Boot, focusing on building high-performance APIs and
            scalable systems.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            As I've grown, I've realized that the best developers are those who understand the full stack. My current focus is expanding that backend expertise into the frontend world, creating seamless, fullstack applications that solve
            real-world problems with elegance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-background-light border border-gray-100 transition-all duration-300">
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
