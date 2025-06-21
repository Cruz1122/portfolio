import LowPolyBackground from '@/components/LowPolyBackground'
import ProjectCard from '@/components/ProjectCard'
import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i18n.config'

export default async function ProjectsPage({ params }: Readonly<{ params: Promise<{ lang: Locale }> }>) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    const { title, subtitle, projects, viewInfo, closeInfo, viewCode, viewLive, technologies } = dict.projectsPage

    return (
            <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <LowPolyBackground/>
            <div className="relative z-10 container mx-auto px-6 py-8 sm:py-16">

            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-4xl font-black text-white uppercase tracking-wider">
                    {title}
                </h1>
                <p className="mt-4 text-sm text-gray-400">{subtitle}</p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        imageUrl={project.imageUrl}
                        liveUrl={project.liveUrl}
                        codeUrl={project.codeUrl}
                        viewInfo={viewInfo}
                        closeInfo={closeInfo}
                        viewCode={viewCode}
                        viewLive={viewLive}
                        technologies={technologies}
                        highlightedTags={project.highlightedTags}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}