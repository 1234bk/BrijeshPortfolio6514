"use client"

import { useState, useEffect  } from "react"
import { useRef } from "react";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiEjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiPostman,
  
} from "react-icons/si";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Copy,
  Check,
  Code,
  Trophy,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("your.email@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const projects = [
    {
      title: "Interactive Quiz App",
      description:
        "A dynamic quiz application built with HTML, CSS, and JavaScript. Features include category selection, instant answer feedback, and theme switching for a personalized user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/1234bk/quiz",
      demo: "https://bk-quiz.netlify.app/",
      video: "/quizvd.mp4",
    },
    {
      title: "BloggingKarloGuys",
      description:
        "A full-stack blogging platform using React, Tailwind CSS, and Firebase with secure login, blog creation, interaction, filtering, and a personalized dashboard—delivered in a clean, responsive UI for a seamless user experience.",
      tech: ["React", "Firebase", "Firestore"],
      github: "https://github.com/1234bk/blog",
      demo: "bloggingkarloguys.netlify.app", // or your deployed link
      video: "/blog.mp4", // make sure this is placed in /public/
    },

    {
      title: "Dynamic To-Do List Website",
      description:
        "A responsive and intuitive to-do list app with real-time task management, localStorage persistence, and seamless task editing features.",
      tech: ["JavaScript", "TAILWIND CSS", "localStorage"],
      github: "https://dailytaskcompletion.netlify.app/",
      demo: "https://dailytaskcompletion.netlify.app/",
      video: "/todo.mp4",
    },
    {
      title: "Country Explorer",
      description:
        "An interactive country explorer built with JavaScript and REST API integration. Instantly fetch and display details like borders, population, and more with a responsive, user-friendly interface.",
      tech: ["JavaScript", "REST API", "HTML", "CSS"],
      github: "https://github.com/1234bk/country",
      demo: "https://countrybk.netlify.app/",
      video: "/country.mp4",
    },
    {
      title: "Measuring Tapes Business Website",
      description:
        "A professional, responsive website built for a construction tape and measuring tools business. Showcases product catalog, business info, and contact section—designed for usability and trust-building with clients.",
      tech: ["WordPress"],
      github: "#",
      demo: "#",
      video: "/tape.mp4",
    }


  ]

 const skills = {
  Languages: [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C#", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  WebDevelopment: [
    { name: "React", icon: <SiReact /> },
    { name: "EJS", icon: <SiEjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
  ],
  Styling: [
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  Deployment: [
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "GitHub", icon: <SiGithub /> },
  ],
  Tools: [
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <SiGithub/> },
  ],
};

  const achievements = [
  {
    title: "LeetCode Achiever",
    description: "Solved 550+ coding problems, earned 17 badges, and ranked in the top 121,000 globally.",
    icon: Code,
    image: "/leetcode.png",
    date: "2025",
  },
  {
    title: "Hackathon Champion",
    description: "Winner of the 2024 PCTE Hackathon and First Runner-up in the Code Relay (DSA) challenge.",
    icon: Trophy,
    image: "/hackathon.png" ,
    date: "2024",
  },
  {
    title: "Project Recognition & LOR",
    description: "Received Letter of Recommendation from PCTE for co-developing the 'PCTE Koshish' web application.",
    icon: Github,
    image: "/lor.png",
    date: "2025",
  },
  {
  title: "6-Week Internship at Ocean Technologies",
  date: "June – July 2024",
  description: "Completed a web development internship focusing on React, Firebase, and responsive UI design. Built real-world components and improved collaborative coding skills.",
  image: "/internship.png", // Make sure this image is in `public/certs/`
  icon: Briefcase // or any suitable icon you’re using
},
  {
    title: "Communication Excellence",
    description: "Two-time winner of British Parliamentary Debate and Inter-College Extempore competition.",
    icon: Trophy,
    image: "/debate.png",
    date: "2023–2025",
  },
];




    const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qttouqo",     // from EmailJS dashboard
        "template_t6qpi4k",    // from EmailJS dashboard
        formRef.current,
        "yXrY4pCx3rbnRvqj5"      // from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          alert("Message sent successfully!");
          formRef.current.reset();

        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message.");
        }
      );
  };





  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      {/* <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="stars absolute inset-0" />
      </div> */}

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex space-x-6">
          {[
            { id: "home", label: "Home", icon: User },
            { id: "projects", label: "Projects", icon: Briefcase },
            { id: "skills", label: "Skills", icon: Code },
            { id: "achievements", label: "Achievements", icon: Trophy },
            { id: "contact", label: "Contact", icon: MessageSquare },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-100 ${activeSection === id
                ? "bg-gray-700/20 text-white shadow-lg shadow-gray-500/50"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <Icon size={16} />
              <span className="hidden md:inline text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 mb-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4 ">
              <h1 className="leading-relaxed text-5xl md:text-[7rem] pt-[0rem] md:pt-[2rem]  font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent ">
                Brijesh Kumar
              </h1>
              <h2 className="text-xl text-center md:text-2xl text-gray-300 font-light">
               MERN Stack Developer | WordPress |Code Enthusiast | Problem Solver

              </h2>
              <h3 className="text-lg text-center  text-gray-400 max-w-l">
               "Merging creativity with code to bring ideas to life on the web."  </h3>
            </div>

            <div className=" pt-5 flex flex-wrap gap-4 justify-center lg:justify-cemter ">
              <a href="https://github.com/1234bk" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/brijesh-kumar123/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>

              <a href="https://leetcode.com/u/brijeshkumar_1234/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-green-500 text-green-400 hover:bg-green-500/10"
                >
                  <Code className="mr-2 h-5 w-5" />
                  LeetCode
                </Button>
              </a>

              <a href="/brijesh_resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-orange-500 text-orange-400 hover:bg-orange-500/10"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </a>


            </div>
          </div>

          {/* <div className=" z-10 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 ">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img
                    src="/bkpic.jpg"
                    alt="Profile"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full animate-ping" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse" />
            </div>
          </div> */}
        </div>

        {/* Diagonal Divider */}
        {/* <div className="z--10 absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transform -skew-y-1" /> */}

      </section>



      {/* Projects Section */}
      <section id="projects" className="relative py-12 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
           Highlighting recent work that reflects my proficiency in full-stack development and cutting-edge tech stacks. </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-8 md:p-[0rem]  p-[2rem] pt-0">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="md:mb-0 mb-[2rem] bg-black/40 backdrop-blur-sm border border-white/70 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* 🎥 Project Demo Video */}
                    {project.video && (
                      <div className="w-full flex justify-center">
                        <video
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          className="h-[250px] w-auto max-w-full object-contain rounded-xl border border-white/10"
                        />
                      </div>
                    )}



                    {/* 🔤 Title */}
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* 📝 Description */}
                    <p className="text-gray-400 min-h-[12rem] ">{project.description}</p>

                    {/* 🧠 Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-500/50 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* 🔗 Links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          </div>
        </div>

        {/* Diagonal Divider */}
        {/* <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-purple-500/20 to-cyan-500/20 transform skew-y-1" /> */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My go-to stack of modern technologies for developing responsive, scalable, and user-focused applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {Object.entries(skills).map(([category, skillList]) => (
    <Card
      key={category}
      className="bg-black/40 backdrop-blur-sm border border-white/30 hover:border-purple-500/50 transition-all duration-300"
    >
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
        <div className="space-y-3">
          {skillList.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
              <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        </div>

        {/* Diagonal Divider */}
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transform -skew-y-1" /> */}
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of accomplishments that demonstrate my pursuit of excellence and lifelong learning. </p>
          </div>

          <div className="space-y-8">
           {achievements.map((achievement, index) => (
  <div key={index} className="flex items-start space-x-6 group relative">
    
    <div className="flex-shrink-0 z-10 mt-[3rem] hidden md:block ">
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
        <achievement.icon className="w-6 h-6 text-white" />
      </div>
    </div>

    <div className="relative w-full min-h-[200px] rounded-lg overflow-hidden text-white p-6 bg-black/60 border border-white/30">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0 opacity-30 filter blur-[2px]"
    style={{
      backgroundImage: `url('/hackathon.png')`,
      backgroundColor: 'red', // debug - this MUST show
    }}
  />

  {/* Foreground Content */}
  <div className="relative z-10">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
        {achievement.title}
      </h3>
      <span className="text-sm text-purple-400 font-medium">
        {achievement.date}
      </span>
    </div>
    <p className="text-gray-300">{achievement.description}</p>
  </div>
</div>

   
  </div>
))}

          </div>
        </div>

        {/* Diagonal Divider */}
        {/* <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-l from-purple-500/20 to-cyan-500/20 transform skew-y-1" /> */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
                <p className="text-gray-400">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300">brijesh6514@gmail.com</span>
                    <Button variant="ghost" size="sm" onClick={copyEmail} className="text-cyan-400 hover:text-cyan-300">
                      {emailCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                 <a href="https://github.com/1234bk" target="_blank" rel="noopener noreferrer">
                
                <Button variant="outline" className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                
              </a>

              <a href="https://www.linkedin.com/in/brijesh-kumar123/" target="_blank" rel="noopener noreferrer">
                
              
                <Button
                  variant="outline"
                  className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                </a>
              </div>
            </div>

            <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit}  className="space-y-6">
                  <div>
                    <Input
                    name="name"
                      placeholder="Your Name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Input
                    name="email" 
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <Textarea
                    name="message" 
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 resize-none"
                    />
                  </div>
                  <Button  type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Brijesh Kumar</p>
        </div>
      </footer>
    </div>
  )
}
