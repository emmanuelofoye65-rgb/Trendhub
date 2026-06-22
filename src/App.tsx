/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 selection:bg-white/20">
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white font-sans">
          Hello World!
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-medium tracking-tight">
          as a placeholder for the hero section content.
        </p>
      </motion.main>
    </div>
  );
}
