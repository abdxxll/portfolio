"use client";
import Image from "next/image";
import { PROJECTS, type Project } from "../data/projects";

const ogFor = (repo?: string) =>
  repo ? `https://opengraph.githubassets.com/1/${repo}` : "/og-fallback.png";

function Card({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900 hover:ring-neutral-600 transition focus:outline-none focus:ring-2 focus:ring-neutral-500"
    >
      <div className="aspect-video relative bg-neutral-950">
        <Image
          src={p.thumb || ogFor(p.repo)}
          alt={`Preview ${p.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-[1.02] transition"
          onError={(e: any) => { e.currentTarget.src = "/og-fallback.png"; }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-neutral-100 group-hover:text-white">
          {p.name}
        </h3>
        {p.blurb && <p className="mt-2 text-sm text-neutral-400">{p.blurb}</p>}
        {p.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-neutral-900 ring-1 ring-neutral-800 text-neutral-300 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  );
}

export default function ProjectsGrid() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="space-y-8">
      {featured.length ? (
        <div>
          <h2 className="text-xl font-medium mb-4">Featured</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </div>
      ) : null}

      <div>
        <h2 className="text-xl font-medium mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => <Card key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}
