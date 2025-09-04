"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PROJECTS } from "../../data/projects"

const ogFor = (repo?: string) =>
  repo ? `https://opengraph.githubassets.com/1/${repo}` : "/placeholder.svg";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild className="text-neutral-300 hover:text-white hover:bg-neutral-800">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="text-xl font-bold text-white">All Projects</div>
            <div className="w-32"></div> {/* Spacer to center the title */}
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">All Projects</h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A comprehensive collection of my work in AI/ML, business analytics, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <Card
                key={project.name}
                className="group bg-neutral-900 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.thumb || ogFor(project.repo)}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e: any) => { e.currentTarget.src = "/placeholder.svg"; }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 group-hover:text-white transition-colors text-balance text-white">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="mb-4 text-pretty text-neutral-400">
                    {project.blurb || "No description available"}
                  </CardDescription>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-neutral-800 text-neutral-300 border-neutral-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild className="text-neutral-300 hover:text-white hover:bg-neutral-800">
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="group/link">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                        <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}