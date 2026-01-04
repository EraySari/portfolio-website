"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 flex items-center justify-center min-h-[60vh]">
      {/* 3D Globe background accent */}

      {/* Content - Always in foreground */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center pointer-events-none ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-balance text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-zinc-50"
          >
            <span className="block">Frontend Engineer</span>
            <span className="block">building modern web experiences.</span>
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-zinc-300 mb-4"
          >
            Freelance projects & full-time opportunities.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-zinc-400 mb-10"
          >
            Specialized in React, Next.js and performance-focused frontend
            architecture.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-4 mt-5"
          >
            <Link
              href="/resume"
              className={cn(
                "inline-flex items-center justify-center",
                "px-6 py-3 rounded-lg font-medium",
                "bg-zinc-100 text-zinc-900",
                "hover:bg-zinc-200 hover:scale-105",

                "transition-all duration-200 ease-out",
                "shadow-sm hover:shadow-md"
              )}
            >
              Resume
            </Link>

            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2",
                "px-6 py-3 rounded-lg font-medium",
                "bg-blue-600 text-white",
                "hover:bg-blue-700 hover:scale-105",
                "transition-all duration-200 ease-out",
                "shadow-sm hover:shadow-md"
              )}
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="
    absolute left-1/2 -translate-x-1/2
    bottom-[-80%]
    
    w-[700px] sm:h-[700px]
    rounded-full
    overflow-visible
    z-20
    pointer-events-none


    before:content-['']
    before:absolute
    before:inset-[-10%]
    before:rounded-full
    before:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.6)_0%,rgba(96,165,250,0.35)_25%,rgba(147,197,253,0.2)_45%,rgba(191,219,254,0.1)_50%,transparent_85%)]
    before:blur-[100px]
    before:opacity-90
    before:z-0

    after:content-['']
    after:absolute
    after:inset-[-15%]
    after:rounded-full
    after:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4)_0%,rgba(96,165,250,0.25)_25%,transparent_80%)]
    after:blur-[60px]
    after:opacity-80
    after:z-0
  "
      >
        <GlobeCanvas />
      </div>
    </section>
  );
}
