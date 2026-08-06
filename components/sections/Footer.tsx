"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <h2 className="text-4xl font-black tracking-tight">
            <span className="text-white">F</span>
            <span className="text-gold">U</span>
          </h2>

          {/* Tagline */}
          <p className="mt-6 max-w-xl text-zinc-400 leading-8">
            Building People.
            <br />
            Growing Business.
            <br />
            Creating Digital Experiences.
          </p>

          {/* Social */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">

            <a
              href="#"
              className="transition duration-300 hover:text-gold"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-gold"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-gold"
            >
              Instagram
            </a>

          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full bg-white/10" />

          {/* Copyright */}
          <p className="mt-8 text-sm text-zinc-500">
            © 2026 Fajar Umarsandi. All rights reserved.
          </p>

        </div>
      </motion.div>
    </footer>
  );
}