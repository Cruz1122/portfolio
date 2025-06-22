'use client'

import { useState } from 'react';
import Image from 'next/image';
import SkillCategory from '@/components/SkillCategory';
import SkillModal from '@/components/SkillModal';

interface Skill {
    name: string;
    abilities: string[];
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

interface AboutPageData {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    skillsTitle: string;
    programmingLanguages: SkillCategory;
    frameworksTechnologies: SkillCategory;
    databases: SkillCategory;
    devOps: SkillCategory;
    styling: SkillCategory;
    methodologies: SkillCategory;
    versionControl: SkillCategory;
    projectManagement: SkillCategory;
    softSkills: SkillCategory;
}

interface HeroData {
    title: string;
}

interface AboutContentProps {
    aboutPage: AboutPageData;
    hero: HeroData;
}

export default function AboutContent({ aboutPage, hero }: Readonly<AboutContentProps>) {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const { title, subtitle, paragraph1, paragraph2, skillsTitle, ...skillCategories } = aboutPage;

    // Convert the skill categories object to an array for easier mapping
    const categoriesArray = Object.values(skillCategories).filter(category => 
        category && typeof category === 'object' && 'title' in category && 'skills' in category
    );

    return (
        <div className="container mx-auto px-6 py-16">
            {/* Hero Section */}
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

            {/* Skills Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">{skillsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categoriesArray.map((category) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            skills={category.skills}
                            onSkillClick={(skill) => setSelectedSkill(skill)}
                        />
                    ))}
                </div>
            </div>

            {/* The Modal */}
            <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        </div>
    );
}