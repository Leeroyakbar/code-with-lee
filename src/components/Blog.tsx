import { motion } from "framer-motion"

const posts = [
  {
    title: "JWT Authentication in Spring Boot 3",
    desc: "A deep dive into securing microservices using modern JWT authentication strategies.",
    link: "https://medium.com/@leeroyakbar/jwt-authentication-in-spring-boot-3-dc4914b8f2d6",
    tag: "Security",
    read: "10 min read",
    image: "/blog/blog-1.png",
  },
  {
    title: "Global Exception Handling in Spring Boot 3",
    desc: "Designing elegant and centralized error handling strategies for scalable backend systems.",
    link: "https://medium.com/@leeroyakbar/menangani-error-dengan-elegan-global-exception-handling-di-spring-boot-3-c570574f275d",
    tag: "Backend Architecture",
    read: "5 min read",
    image: "/blog/blog-2.png",
  },
  {
    title: "Asynchronous 101: Message Broker",
    desc: "Why asynchronous architecture and message brokers are essential for scalable backend systems.",
    link: "https://medium.com/@leeroyakbar/asynchronous-101-kenapa-setiap-backend-developer-wajib-paham-message-broker-fdf3fe44dbd2",
    tag: "System Design",
    read: "4 min read",
    image: "/blog/blog-3.png",
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-28 px-6 lg:px-24 bg-background-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Insights & Writing</p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Technical Articles</h2>

          <p className="mt-6 text-secondary leading-relaxed">I enjoy writing about backend architecture, scalable systems, and lessons learned while exploring fullstack development.</p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Top Visual */}
              <div className="h-40 w-full overflow-hidden bg-background-light">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="p-7">
                {/* Tag + Reading Time */}
                <div className="flex justify-between text-xs uppercase tracking-widest text-secondary mb-4">
                  <span>{post.tag}</span>
                  <span>{post.read}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-secondary transition-colors leading-snug">{post.title}</h3>

                {/* Description */}
                <p className="text-secondary text-sm leading-relaxed mb-6">{post.desc}</p>

                {/* Read Article */}
                <span className="text-sm font-semibold underline underline-offset-4 group-hover:text-secondary transition-colors">Read Article →</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Medium CTA */}
        <div className="mt-20 text-center">
          <a href="https://medium.com/@leeroyakbar" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all">
            Read more on Medium →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
