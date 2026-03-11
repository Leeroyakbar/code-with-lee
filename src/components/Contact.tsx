import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import { toast } from "sonner"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    const formData = new FormData(form.current)
    const honeypot = formData.get("company")

    if (honeypot) return // spam protection

    setLoading(true)

    try {
      await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

      toast.success("Message sent successfully! I'll get back to you soon.")

      form.current.reset()
    } catch (error) {
      console.error(error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact-form" className="py-28 px-6 lg:px-24 bg-background-light">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-4">Contact</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's talk about your project</h2>

          <p className="text-secondary max-w-xl mx-auto">Whether it's backend architecture, API development, or a fullstack application — feel free to reach out and let's discuss how we can build it together.</p>
        </motion.div>

        {/* Form */}
        <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
          {/* Honeypot anti spam */}
          <input type="text" name="company" className="hidden" />

          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Your Name" required className="p-4 border border-gray-200 rounded-xl outline-none focus:border-primary" />

            <input type="email" name="email" placeholder="Your Email" required className="p-4 border border-gray-200 rounded-xl outline-none focus:border-primary" />
          </div>

          <div className="mt-6">
            <select name="project_type" required className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:border-primary">
              <option value="">Project Type</option>
              <option>Backend Development</option>
              <option>Fullstack Web App</option>
              <option>API Integration</option>
              <option>Consultation</option>
            </select>
          </div>

          <textarea name="message" rows={5} placeholder="Tell me about your project..." required className="w-full mt-6 p-4 border border-gray-200 rounded-xl outline-none focus:border-primary" />

          <button type="submit" disabled={loading} className="mt-8 w-full bg-primary text-white py-4 rounded-xl font-semibold transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
