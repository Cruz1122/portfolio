// src/app/[lang]/about/page.tsx
import Image from 'next/image';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n.config';
import Navbar from '@/components/Navbar';
import SkillCategory from '@/components/SkillCategory';
import LowPolyBackground from '@/components/LowPolyBackground';

export default async function AboutPage({
    params,
}: Readonly<{
    params: Promise<{ lang: Locale }>;
}>) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const { title, subtitle, paragraph1, paragraph2, ...skillCategories } = dict.aboutPage;
    const { hero } = dict;

    return (
        <div>
            <div className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
                <LowPolyBackground />
                <div className="relative z-10 container mx-auto px-6 py-8 sm:py-16">


                {/* Sección Hero de "About Me" */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1 flex justify-center">
                        <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                            <Image
                                src="/images/foto.png"
                                alt={`Foto de ${hero.title}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider">{title}</h1>
                        <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
                        <div className="mt-6 space-y-4 text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <p dangerouslySetInnerHTML={{ __html: paragraph1 }} />
                            <p dangerouslySetInnerHTML={{ __html: paragraph2 }} />
                        </div>
                    </div>
                </div>

                {/* Sección de Habilidades por Categoría */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {Object.values(skillCategories)
                            .filter((category): category is { title: string; skills: string[] } => 
                                typeof category === 'object' && category !== null && 'title' in category && 'skills' in category
                            )
                            .map((category) => (
                                <SkillCategory
                                    key={category.title}
                                    title={category.title}
                                    skills={category.skills as any}
                                />
                            ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}