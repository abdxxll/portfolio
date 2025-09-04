import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
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
            <div className="text-xl font-bold">Resume</div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
            <p className="text-lg text-muted-foreground">AI/ML Engineer & Business Strategist</p>
          </div>

          {/* PDF Embed Placeholder */}
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <div className="w-full h-96 bg-card rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Resume PDF</h3>
                <p className="text-muted-foreground mb-4">Click the download button to view the full resume</p>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
