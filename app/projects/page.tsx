import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const allProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time business intelligence platform using machine learning for predictive analytics and automated insights. Features include custom ML models, interactive visualizations, and automated reporting.",
    longDescription:
      "This comprehensive analytics platform leverages advanced machine learning algorithms to provide real-time business insights. Built with Python and TensorFlow for the ML backend, React for the frontend, and deployed on AWS for scalability.",
    tags: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    thumbnail: "/analytics-dashboard.png",
  },
  {
    id: 2,
    title: "YOLOv12 Object Detection System",
    description:
      "Custom computer vision solution for real-time object detection and tracking in manufacturing environments. Achieved 95% accuracy with optimized inference speed.",
    longDescription:
      "Developed a state-of-the-art object detection system using YOLOv12 for manufacturing quality control. The system processes video streams in real-time and provides automated defect detection with high precision.",
    tags: ["Python", "YOLOv12", "OpenCV", "Docker", "CUDA", "TensorRT"],
    github: "https://github.com",
    thumbnail: "/object-detection.jpg",
  },
  {
    id: 3,
    title: "Cross-Platform Mobile Analytics",
    description:
      "React Native application for business analytics with offline capabilities and real-time synchronization. Supports multiple data sources and custom dashboards.",
    longDescription:
      "A comprehensive mobile analytics solution built with React Native, featuring offline-first architecture, real-time data synchronization, and customizable dashboard widgets for business intelligence on the go.",
    tags: ["React Native", "Supabase", "TypeScript", "Redux", "Expo"],
    github: "https://github.com",
    demo: "https://demo.com",
    thumbnail: "/mobile-analytics.jpg",
  },
  {
    id: 4,
    title: "Strategic Planning Platform",
    description:
      "Web-based tool for business strategy formulation with data visualization and collaborative features. Includes scenario modeling and ROI calculations.",
    longDescription:
      "A collaborative platform for strategic business planning that combines data visualization, scenario modeling, and team collaboration tools to help organizations make informed strategic decisions.",
    tags: ["Next.js", "Tailwind", "PostgreSQL", "D3.js", "WebSockets"],
    github: "https://github.com",
    demo: "https://demo.com",
    thumbnail: "/strategy-platform.jpg",
  },
  {
    id: 5,
    title: "Automated Trading Algorithm",
    description:
      "Machine learning-based trading system with risk management and backtesting capabilities. Implements multiple trading strategies with real-time market analysis.",
    longDescription:
      "An algorithmic trading system that uses machine learning to analyze market patterns and execute trades automatically. Features comprehensive risk management, backtesting framework, and real-time performance monitoring.",
    tags: ["Python", "Pandas", "Scikit-learn", "Alpha Vantage API", "Redis"],
    github: "https://github.com",
    thumbnail: "/trading-algorithm.png",
  },
  {
    id: 6,
    title: "Supply Chain Optimization Tool",
    description:
      "AI-driven supply chain management system that optimizes inventory levels, predicts demand, and reduces operational costs by up to 30%.",
    longDescription:
      "A comprehensive supply chain optimization platform that uses AI to predict demand, optimize inventory levels, and streamline logistics operations. Integrates with existing ERP systems and provides actionable insights.",
    tags: ["Python", "FastAPI", "MongoDB", "Celery", "Plotly"],
    github: "https://github.com",
    thumbnail: "/supply-chain-network.png",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="text-xl font-bold">All Projects</div>
            <div></div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of my work in AI/ML, business analytics, and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 group-hover:text-primary transition-colors text-balance">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4 text-pretty">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.github} className="group/link">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                        <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
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
