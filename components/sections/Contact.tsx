"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-card p-12"
      >
        <p className="mb-3 uppercase tracking-[0.3em] text-gold">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let's Build Something Together
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
          I'm always open to discussing new opportunities,
          collaborations, and innovative ideas.
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
              Email
            </p>

            <a
              href="mailto:umarsandi@gmail.com"
              className="mt-3 block text-lg font-medium hover:text-gold"
            >
              umarsandi@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
            Connect on LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/umarsandi/"
              target="_blank"
              className="mt-3 block text-lg font-medium hover:text-gold"
            >
              linkedin.com/in/umarsandi
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
            FollowMe on Instagram
            </p>

            <a
              href="https://instagram.com/sandiana.art"
              target="_blank"
              className="mt-3 block text-lg font-medium hover:text-gold"
            >
              instagram.com/sandiana.art
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
              Location
            </p>

            <p className="mt-3 text-lg font-medium">
              Jakarta Indonesia
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}