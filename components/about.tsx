"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MapPin, Download } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="w-full h-[600px] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/pic.jpg"
                alt="Mohammad Arslan"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-white">About Me</h2>
            <div className="w-20 h-1 bg-teal-500 mb-6"></div>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Dynamic and innovative Associate Software Engineer with over 1+ years of experience, specializing in PHP,
              SQL, and modern frameworks like Laravel. I'm passionate about building
              scalable web applications and solving complex problems through elegant code.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Beyond coding, I actively keep up with emerging technologies, contribute to collaborative projects,
               and enjoy sharing knowledge with peers. With over a year of hands-on experience, 
               I focus on writing clean, maintainable code and building user-friendly solutions.
            </p>

            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-slate-600 dark:text-slate-300"> Lahore, Pakistan</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-slate-600 dark:text-slate-300">tahaasif82442@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-teal-500 mr-3" />
                <a
                  href="https://www.linkedin.com/in/muhammad-taha-2b24812a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                >
                  muhammad-taha
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-teal-500 hover:bg-teal-600" onClick={() => {
                const contactSelection = document.getElementById("contact")
                if (contactSelection) {
                  contactSelection.scrollIntoView({ behavior: "smooth" })
                }
              }}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <a href="/files/muhammad-taha-resume.pdf" download="Muhammad_Taha_Resume.pdf">
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-500 hover:bg-teal-500/10 flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
