'use client'

import { motion, AnimatePresence } from 'framer-motion'
import TechIcon from './TechIcon'

interface Skill {
    name: string;
    abilities: string[];
}

interface SkillModalProps {
    skill: Skill | null;
    onClose: () => void;
}

export default function SkillModal({ skill, onClose }: Readonly<SkillModalProps>) {
    return (
        <AnimatePresence>
            {skill && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.2 }}
                        className="relative w-full max-w-lg p-8 border border-white/20 rounded-lg shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 rounded-full hover:text-white cursor-pointer"
                            aria-label="Cerrar modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-4 mb-6 flex-col gap-y-8">
                            <h1 className="text-4xl font-bold text-white text-center mx-auto">{skill.name}</h1>
                            <TechIcon name={skill.name as any} showLabel={false} className="h-30 w-30 text-white/80" />
                        </div>
                        <ul className="space-y-2 list-disc list-inside text-white/80">
                            {skill.abilities.map((ability, index) => (
                                <li key={index}>{ability}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}