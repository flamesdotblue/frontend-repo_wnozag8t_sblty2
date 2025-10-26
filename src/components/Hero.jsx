import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-300 px-3 py-1 text-xs backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          New Release • Atelier Collection
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
        >
          The Fragrance of
          <span className="bg-gradient-to-r from-amber-300 via-rose-300 to-rose-400 bg-clip-text text-transparent"> Creativity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200/90 font-light"
        >
          A minimalist collection of glass-encased aromas, crafted with rare oils and modern restraint. Discover luminous notes of iris, bergamot, and amber woods.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-300 text-neutral-900 px-5 py-3 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-amber-300/30 hover:-translate-y-0.5 transition"
          >
            Shop Fragrances
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900/70 border border-neutral-700 text-neutral-200 px-5 py-3 text-sm hover:bg-neutral-800 transition"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
