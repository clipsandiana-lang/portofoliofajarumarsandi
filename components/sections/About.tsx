"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 uppercase tracking-[0.3em] text-gold">
          About Me
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          More than 8 years building people
          <br />
          and growing business.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          I have experience in Learning & Development,
          Training, Partnership Management,
          Business Development and Digital Strategy.
          I enjoy transforming ideas into impactful
          products, businesses and digital experiences.
        </p>
      </motion.div>
    </section>
  );
}