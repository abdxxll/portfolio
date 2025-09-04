import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import PROFILE from "../data/profile";
import { SKILLS } from "../data/skills";
import { PROJECTS } from "../data/projects";

export default function Home() {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-neutral-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-neutral-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-neutral-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-neutral-300 hover:text-white transition-colors">Skills</a>
            <a href={PROFILE.resumeUrl} download="Surosh_Nathaniel_Kumar_Resume.pdf" className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section - Pure Black Background */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center" style={{ backgroundColor: '#000000' }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {PROFILE.name}
          </h1>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            {PROFILE.tagline}
          </p>
          <p className="text-lg text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {PROFILE.blurb}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="inline-flex items-center px-8 py-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">
              <span>View Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={PROFILE.resumeUrl} download="Surosh_Nathaniel_Kumar_Resume.pdf" className="inline-flex items-center px-8 py-4 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">
              <Download className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </section>

        {/* About Section - Lighter Background */}
        <section id="about" className="bg-neutral-900 max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  I'm a passionate AI/ML engineer and business analyst with expertise in computer vision, 
                  data-driven strategies, and end-to-end product development. My approach combines technical 
                  depth with strategic business acumen.
                </p>
                <p>
                  I specialize in building AI products that solve real-world problems, from computer vision 
                  systems for campus analytics to agentic pipelines for collectibles valuation. My work spans 
                  the full stack of AI development, from data pipelines to clean front-ends.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring the intersection of technology and business strategy, 
                  always looking for ways to bridge the gap between cutting-edge AI and practical business solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                <Image
                  src="/professional-headshot.jpeg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Pure Black Background */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20" style={{ backgroundColor: '#000000' }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-neutral-400">A selection of my recent work in AI/ML and business analytics</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.name} className="bg-neutral-900 rounded-2xl overflow-hidden hover:bg-neutral-800 transition-colors">
                <div className="aspect-video relative bg-neutral-950">
                  <Image
                    src={project.thumb || `/placeholder.jpg`}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-neutral-400 mb-4">{project.blurb}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/projects" className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Skills Section - Lighter Background with Card Layout */}
        <section id="skills" className="bg-neutral-900 max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills Card */}
            <div className="bg-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Technical</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.technical.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm border border-neutral-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Business & Analytics Skills Card */}
            <div className="bg-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Business & Analytics</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.analytics.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm border border-neutral-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Soft Skills Card */}
            <div className="bg-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.soft.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm border border-neutral-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">Built with Next.js, Tailwind, and Vercel</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href={PROFILE.resumeUrl} download="Surosh_Nathaniel_Kumar_Resume.pdf" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-neutral-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}