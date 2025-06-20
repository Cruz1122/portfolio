'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 20, opacity: 0 }} // Starts 20px down and invisible
        animate={{ y: 0, opacity: 1 }}   // Animates to original position and fully visible
        transition={{ ease: 'easeInOut', duration: 0.75 }} // Animation timing
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}