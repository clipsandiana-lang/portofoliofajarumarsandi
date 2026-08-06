"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Business",
    icon: "💼",
    items: [
      "Business Development",
      "Partnership Management",
      "Account Management",
      "Strategic Planning",
    ],
  },
  {
    title: "Learning",
    icon: "🎓",
    items: [
      "Learning & Development",
      "Training Facilitation",
      "Public Speaking",
      "Curriculum Design",
    ],
  },
  {
    title: "Digital",
    icon: "🤖",
    items: [
      "AI-Powered Workflow Design",
      "Digital Content Strategy",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 uppercase tracking-[0.3em] text-gold">
          Skills
        </p>

        <h2 className="mb-16 text-4xl font-bold md:text-5xl">
          What I Do Best
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10"
          >
            <div className="mb-6 text-4xl">
              {skill.icon}
            </div>

            <h3 className="mb-6 text-2xl font-bold">
              {skill.title}
            </h3>

            <ul className="space-y-4">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}