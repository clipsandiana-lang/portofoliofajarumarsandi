"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LASHSIST",
    category: "Luxury Beauty Brand",
    image: "/projects/lashsist.webp",
    description:
      "Developed a premium beauty brand with a strong focus on social media strategy, AI-powered workflow, and luxury visual identity.",
      tech: [
        {
          name: "Tiktok",
          link: "https://www.tiktok.com/@lashsistbydianalestari",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/lashsistbydianalestari",
        },
      ],
    link: "https://www.tiktok.com/@lashsistbydianalestari",
  },
  {
    title: "Sandiana Remix",
    category: "Music Creator & Remixer",
    image: "/projects/sandianaremixbanner.webp",
    description:
      "Produced remix music and built a digital creator brand using AI-assisted music production and content marketing.",
      tech: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/sandiana.art",
        },
        {
          name: "Tiktok",
          link: "https://www.tiktok.com/@sandianaremix",
        },
        {
          name: "Youtube",
          link: "https://www.youtube.com/@sandianaremix",
        },
        {
          name: "Spotify",
          link: "https://open.spotify.com/artist/2OssYBK2Tnu2M7HIttUYZ0",
        },
      ],
    link: "https://www.youtube.com/@sandianaremix",
  },
  {
    title: "KasKelas",
    category: "School Finance App",
    image: "/projects/kaskelas.webp",
    description:
      "Designed and developed a lightweight finance management web app for school classrooms using Google Apps Script.",
      tech: [
        {
          name: "Web KasKelas",
          link: "https://kaskita-7fda.vercel.app/",
        },

      ],
      link: "https://kaskita-7fda.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    image: "/projects/portofoliofajarumarsandi.webp",
    description:
      "Modern portfolio website built with Next.js, Tailwind CSS and Framer Motion featuring luxury dark UI, developed with an AI-assisted workflow to streamline design, development, and creative iteration.",
      tech: [
        {
          name: "Personal Portofolio",
          link: "www.fajarumarsandi.web.id",
        },
      ],
      link: "www.fajarumarsandi.web.id",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 uppercase tracking-[0.3em] text-gold">
          Projects
        </p>

        <h2 className="mb-16 text-4xl font-bold md:text-5xl">
          Featured Works
        </h2>
      </motion.div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            className="group rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
          >
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-gold">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <a
                    key={tech.name}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-gold transition hover:border-gold hover:bg-gold hover:text-black"
                  >
                    {tech.name}
                  </a>
                  ))}
                </div>

              </div>

              <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gold px-6 py-3 transition-all duration-300 hover:bg-gold hover:text-black"
                >
                  View Project →
                </a>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}