"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022 – Present",
    company: "XLSMART",
    logo: "/logos/xlsmart.png",
    position: "Account Manager",
    description:
      "Driving business growth through strategic partnerships, account management, and digital collaboration.",
    achievements: [
      "Managed strategic business accounts",
      "Built and strengthened partner relationships",
      "Identified new business opportunities",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    year: "2015 – 2022",
    company: "Smartfren",
    logo: "/logos/smartfren.png",
    position: "Regional Trainer (CapDev)",
    description:
      "Empowered people through learning programs, capability development, and management training.",
    achievements: [
      "Delivered product & capability training",
      "Created learning materials and modules",
      "Facilitated management development sessions",
      "Supported organizational transformation",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 uppercase tracking-[0.3em] text-gold">
          Experience
        </p>

        <h2 className="mb-16 text-4xl font-bold md:text-5xl">
          Professional Journey
        </h2>
      </motion.div>

      <div className="mx-auto max-w-5xl">
      
      <div className="space-y-12">
        {experiences.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="rounded-3xl border border-white/10 bg-card p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-gold">
              {item.year}
            </p>

            <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">
                      {item.company}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-white">
                      {item.position}
                    </p>
                  </div>

                  <div className="opacity-70 transition-opacity duration-300 hover:opacity-100">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      width={140}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
              {item.description}
            </p>

            <ul className="mt-8 space-y-3">
              {item.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}