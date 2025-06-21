'use client'
import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] grid place-content-center bg-black">
            <motion.div
                // Animation variants
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                    scale: [1, 1.2, 1], // Pulsating effect
                    opacity: [1, 0.5, 1]
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity // Loop the animation forever
                }}
                className="text-5xl font-black text-white"
            >
                C.
            </motion.div>
        </div>
    )
}