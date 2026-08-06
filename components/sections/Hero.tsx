"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background Glow */}

        <div className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[140px]" />

        <div className="absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-gold/5 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-40 lg:grid-cols-[1.1fr_0.9fr]">
  
          {/* LEFT */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
            duration: 0.8,
            ease: "easeOut",
            }}
            >
  
            <div className="mb-6 inline-flex w-fit rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                Available for Work
              </span>
            </div>
  
            <h1 className="font-[var(--font-manrope)] text-5xl font-bold leading-none md:text-7xl">
              Fajar
              <br />
              Umarsandi
            </h1>
  
            <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-400">
              Building People.
              <br />
              Growing Business.
              <br />
              Creating Digital Experiences.
            </p>
  
            <div className="mt-10 flex flex-wrap gap-4">
  
              <a
                 href="#contact"
                className="rounded-full bg-gold px-8 py-4 font-semibold text-black shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/30"
              >
              Contact Me
              </a>
  
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-gold px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-black"
              >
                Download CV
              </a>
  
            </div>
  
            </motion.div>
  
          {/* RIGHT */}
  
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
            }}
                >

            {/* Glow belakang foto */}
            <div className="absolute h-[480px] w-[480px] rounded-full bg-gold/20 blur-[130px] opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" />

            {/* Badge 1 */}
            <div className="absolute -right-6 top-8 z-20 rounded-2xl border border-white/10 bg-card px-5 py-3 shadow-xl backdrop-blur">
            <p className="text-2xl font-bold text-gold">9+</p>
            <p className="text-xs text-zinc-400">
            Years Experience
            </p>
            </div>

            {/* Badge 2 */}
            <div className="absolute -left-8 top-24 z-20 rounded-2xl border border-white/10 bg-card px-5 py-3 shadow-xl backdrop-blur">
            <p className="font-semibold">
              AI Workflow
            </p>
            <p className="text-xs text-zinc-400">
              Automation
            </p>
          </div>

          {/* Badge 3 */}
          <div className="absolute bottom-10 -right-8 z-20 rounded-2xl border border-white/10 bg-card px-5 py-3 shadow-xl backdrop-blur">
            <p className="font-semibold">
              Content Strategy
            </p>
            <p className="text-xs text-zinc-400">
              Digital Growth
            </p>
          </div>

            {/* Frame */}
            <div className="group relative flex h-[520px] w-[400px] items-center justify-center overflow-hidden rounded-[36px] border border-gold/20 bg-card shadow-2xl transition-all duration-500 hover:border-gold/50">

            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            <Image
          src="/images/fajarpic.png"
          alt="Fajar Umarsandi"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>

            </motion.div>
  
        </div>
      </section>
    );
  }