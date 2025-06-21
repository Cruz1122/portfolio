'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TechIcon, { TechName } from './TechIcon'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    imageUrl: string
    liveUrl?: string
    codeUrl: string
    viewInfo: string
    closeInfo: string
    viewCode: string
    viewLive: string
    technologies: string
    highlightedTags: string[]
}

export default function ProjectCard({ 
    title, 
    description, 
    tags, 
    imageUrl, 
    liveUrl, 
    codeUrl, 
    viewInfo,
    closeInfo,
    viewCode,
    viewLive,
    technologies,
    highlightedTags
}: Readonly<ProjectCardProps>) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            {/* Card con foto, título y botón */}
            <div className="relative border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                <div className="absolute top-2 left-2 z-10 flex gap-2">
                    {highlightedTags.map(tag => (
                        <div key={tag} className="bg-black/50 p-1.5 rounded-full backdrop-blur-sm">
                            <TechIcon name={tag as TechName} showLabel={false} className="h-3 w-3" />
                        </div>
                    ))}
                </div>
                <Image
                    src={imageUrl}
                    alt={`Screenshot of ${title}`}
                    width={1280}
                    height={720}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-3 text-center">{title}</h3>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full border-2 border-white text-white py-2 px-4 rounded-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-medium cursor-pointer"
                    >
                        {viewInfo}
                    </button>
                </div>
            </div>

            {/* Modal con fondo difuminado */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Fondo difuminado */}
                    <div 
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                        onKeyDown={(e) => e.key === 'Escape' && setIsModalOpen(false)}
                    />
                    
                    {/* Contenido del modal */}
                    <div className="relative border border-white/20 rounded-xl overflow-hidden max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 rounded-full hover:text-white cursor-pointer"
                            aria-label="Cerrar modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Layout de dos columnas */}
                        <div className="flex flex-col lg:flex-row">
                            {/* Columna izquierda - Imagen */}
                            <div className="lg:w-1/2">
                                <Image
                                    src={imageUrl}
                                    alt={`Screenshot of ${title}`}
                                    width={1280}
                                    height={720}
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </div>

                            {/* Columna derecha - Información */}
                            <div className="lg:w-1/2 p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                                
                                <div className="mb-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        <span dangerouslySetInnerHTML={{ __html: description }} />
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">{technologies}</h3>
                                    {/* Ensure the gap is appropriate for chips, e.g., gap-2 */}
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((tag) => (
                                            <TechIcon key={tag} name={tag as TechName} showLabel={true} />
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    {liveUrl && (
                                        <Link 
                                            href={liveUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="bg-white hover:bg-red-500 hover:text-white text-black px-6 py-3 font-medium transition-colors flex items-center justify-center gap-2 border-2 border-white rounded-sm"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            {viewLive}
                                        </Link>
                                    )}
                                    <Link 
                                        href={codeUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="border-2 border-white text-white py-2 px-4 rounded-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-medium cursor-pointer gap-2 flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        {viewCode}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}