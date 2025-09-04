"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time business intelligence platform using machine learning for predictive analytics and automated insights.",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    github: "https://github.com",
    featured: true,
    thumbnail: "/analytics-dashboard.png",
  },
  {
    id: 2,
    title: "YOLOv12 Object Detection System",
    description:
      "Custom computer vision solution for real-time object detection and tracking in manufacturing environments.",
    tags: ["Python", "YOLOv12", "OpenCV", "Docker"],
    github: "https://github.com",
    featured: true,
    thumbnail: "/object-detection.jpg",
  },
  {
    id: 3,
    title: "Cross-Platform Mobile Analytics",
    description:
      "React Native application for business analytics with offline capabilities and real-time synchronization.",
    tags: ["React Native", "Supabase", "TypeScript"],
    github: "https://github.com",
    featured: false,
    thumbnail: "/mobile-analytics.jpg",
  },
  {
    id: 4,
    title: "Strategic Planning Platform",
    description: "Web-based tool for business strategy formulation with data visualization and collaborative features.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    github: "https://github.com",
    featured: false,
    thumbnail: "/strategy-platform.jpg",
  },
]

const skills = {
  technical: [
    "Python",
    "SQL",
    "AWS",
    "Supabase",
    "React Native",
    "YOLOv12",
    "Tailwind",
    "TypeScript",
    "TensorFlow",
    "Docker",
  ],
  business: [
    "Economics",
    "Strategy",
    "Data Visualization",
    "Business Intelligence",
    "Market Analysis",
    "Product Management",
  ],
  soft: [
    "Leadership",
    "Cross-cultural Collaboration",
    "Adaptability",
    "Problem Solving",
    "Communication",
    "Team Building",
  ],
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/surosh">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com/in/surosh">
                  <Linkedin className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:surosh@example.com">
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
                Skills
              </button>
              <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <Button variant="outline" size="sm" className="w-fit bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Surosh Nathaniel Kumar</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            AI/ML • Analytics • Product • Minimalist Design
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Bridging the gap between cutting-edge artificial intelligence and strategic business solutions. I transform
            complex data into actionable insights that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
              View Projects
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                With a unique blend of technical expertise in AI/ML and strategic business acumen, I specialize in
                developing intelligent systems that solve real-world problems. My experience spans from building
                computer vision models to crafting data-driven business strategies.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                I thrive in cross-cultural environments and believe in the power of minimalist design and clean code to
                create impactful solutions. Whether it's implementing YOLOv12 for object detection or analyzing market
                trends, I bring a holistic approach to every project.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Image
                  src="/professional-headshot.png"
                  alt="Surosh Nathaniel Kumar"
                  width={200}
                  height={200}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work in AI/ML and business analytics
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="mb-4 text-pretty">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.github} className="group/link">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                        <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={150}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-3 text-pretty">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.github}>
                        <Github className="w-3 h-3 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Technical</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Business & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.business.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">Built with Next.js, Tailwind, and Vercel</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://github.com/surosh">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://linkedin.com/in/surosh">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="mailto:surosh@example.com">
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
