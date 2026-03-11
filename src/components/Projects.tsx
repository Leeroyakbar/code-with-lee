import { motion } from "framer-motion"

const projects = [
  {
    title: "GreenGrow Agriculture",
    desc: "Modern agriculture company website showcasing products and farming solutions.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://greengrow-agri.vercel.app/",
    image: "/projects/greengrow.png",
  },
  {
    title: "Artisan Coffee",
    desc: "Coffee shop brand website with product storytelling and premium UI design.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://artisan-coffee-five.vercel.app/",
    image: "/projects/artisan-coffee.png",
  },
  {
    title: "Global Export",
    desc: "Export company website presenting global commodities and business services.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://global-export.vercel.app/",
    image: "/projects/global-export.png",
  },

  {
    title: "Invify",
    desc: "Investment tracking dashboard designed for managing portfolios and financial insights.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://invifyid.netlify.app/",
    image: "/projects/invify.png",
  },
  {
    title: "Localux",
    desc: "Elegant fashion brand website built for a local luxury hijab brand.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://localux.netlify.app/",
    image: "/projects/localux.png",
  },
  {
    title: "BowlNow",
    desc: "Restaurant website concept featuring modern UI and interactive food menu display.",
    stack: ["React", "TailwindCSS"],
    link: "https://bowlnow.netlify.app",
    image: "/projects/bowlnow.png",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 lg:px-24 bg-background-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Portfolio</p>

          <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>

          <p className="mt-6 text-secondary leading-relaxed">A selection of projects showcasing my journey from backend systems to fullstack web applications.</p>
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 rounded-3xl overflow-hidden border border-gray-200 bg-white grid md:grid-cols-2 shadow-sm hover:shadow-xl transition-all"
        >
          <img src="/projects/avantrade.png" alt="Avantrade BCA Enterprise System" className="object-cover w-full h-full" />

          <div className="p-10 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-secondary mb-3">Enterprise Project</span>

            <h3 className="text-2xl font-bold mb-4">Avantrade BCA</h3>

            <p className="text-secondary mb-6 leading-relaxed">
              Internal enterprise platform used in banking operations for managing financial transactions and trade finance workflows. I contributed as a backend developer building APIs and optimizing data services within a microservices
              architecture.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Java", "Spring Boot", "Microservices", "Oracle DB", "REST API"].map((tech) => (
                <span key={tech} className="text-xs uppercase tracking-wider bg-background-light px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-sm text-secondary">Internal Enterprise System</span>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-52 bg-background-light overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>

                <p className="text-secondary text-sm mb-5 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider bg-background-light px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" className="text-sm font-semibold underline underline-offset-4 hover:text-secondary">
                  Live Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
