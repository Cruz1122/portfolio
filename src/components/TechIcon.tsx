'use client'

import {
    SiVite, SiReact, SiNodedotjs, SiJavascript, SiExpress, SiSocketdotio, SiDocker,
    SiGithubactions, SiPrisma, SiMongoose, SiPostgresql, SiMongodb, SiTailwindcss,
    SiNextdotjs, SiFramer, SiTypescript, SiDotnet, SiAngular, SiLoopback,
    SiMysql, SiPython, SiFlask, SiGit, SiGithub, SiAmazonwebservices, SiVercel,
    SiNginx, SiNetlify, SiRender, SiCss3, SiHtml5, SiTrello, SiJira, SiNotion, SiFigma, SiCanva,
    SiBootstrap, SiPythonanywhere
} from 'react-icons/si'
import { AiOutlineJava, AiOutlinePython } from 'react-icons/ai'
import { LuNetwork } from 'react-icons/lu'
import { FcScatterPlot } from 'react-icons/fc'
import { TbBrandThreejs } from 'react-icons/tb'

export type TechName =
    // Programming Languages
    | 'JavaScript' | 'TypeScript' | 'C#' | 'Python' | 'Java'
    // Frameworks and Technologies
    | 'React' | 'Next.js' | 'Node.js' | 'Angular' | 'ASP.NET' | 'Express' | 'Socket.IO' | 'Flask' | 'LoopBack'
    // Databases and ORMs
    | 'PostgreSQL' | 'MongoDB' | 'MySQL' | 'Prisma ORM' | 'Entity Framework' | 'Mongoose'
    // DevOps and Tools
    | 'Docker' | 'GitHub Actions' | 'Git' | 'Vite' | 'AWS' | 'Vercel' | 'Nginx' | 'Netlify' | 'Render'
    // Styling and UI/UX
    | 'Tailwind CSS' | 'Bootstrap' | 'MaterializeCSS' | 'Framer Motion' | 'Three.js' | 'CSS' | 'HTML'
    // Methodologies
    | 'Scrum' | 'Kanban' | 'Waterfall'
    // Version Control
    | 'GitHub' | 'Branching Strategies' | 'Pull Requests' | 'Merge Requests' | 'CI/CD'
    // Project Management
    | 'Trello' | 'Jira' | 'Notion' | 'Figma' | 'Canva'
    // Soft Skills (English)
    | 'Teamwork' | 'Effective Communication' | 'Problem Solving' | 'Continuous Learning' | 'Time Management'
    // Soft Skills (Spanish)
    | 'Trabajo en Equipo' | 'Comunicación Efectiva' | 'Resolución de Problemas' | 'Aprendizaje Continuo' | 'Gestión del Tiempo'
    // Soft Skills (French)
    | 'Travail en Équipe' | 'Communication Efficace' | 'Résolution de Problèmes' | 'Apprentissage Continu' | 'Gestion du Temps'
    // Additional technologies
    | 'ASP.NET Core' | 'Prisma' | 'Matplotlib' | 'NetworkX' | 'Pygame' | 'Tkinter';

interface TechIconProps {
    name: TechName;
    showLabel?: boolean;
    className?: string;
}

export default function TechIcon({ name, showLabel = false, className = "h-4 w-4" }: Readonly<TechIconProps>) {
    // We define the icon size here
    const iconProps = { className: className };

    // Icon mapping object instead of switch statement
    const iconMap: Record<TechName, React.ReactNode> = {
        'React': <SiReact {...iconProps} />,
        'Next.js': <SiNextdotjs {...iconProps} />,
        'Node.js': <SiNodedotjs {...iconProps} />,
        'JavaScript': <SiJavascript {...iconProps} />,
        'TypeScript': <SiTypescript {...iconProps} />,
        'Express': <SiExpress {...iconProps} />,
        'Socket.IO': <SiSocketdotio {...iconProps} />,
        'PostgreSQL': <SiPostgresql {...iconProps} />,
        'MongoDB': <SiMongodb {...iconProps} />,
        'Mongoose': <SiMongoose {...iconProps} />,
        'Prisma': <SiPrisma {...iconProps} />,
        'Prisma ORM': <SiPrisma {...iconProps} />,
        'Docker': <SiDocker {...iconProps} />,
        'GitHub Actions': <SiGithubactions {...iconProps} />,
        'Vite': <SiVite {...iconProps} />,
        'Tailwind CSS': <SiTailwindcss {...iconProps} />,
        'Framer Motion': <SiFramer {...iconProps} />,
        'Three.js': <TbBrandThreejs {...iconProps} />,
        'ASP.NET': <SiDotnet {...iconProps} />,
        'ASP.NET Core': <SiDotnet {...iconProps} />,
        'Entity Framework': <SiDotnet {...iconProps} />,
        'Angular': <SiAngular {...iconProps} />,
        'MySQL': <SiMysql {...iconProps} />,
        'LoopBack': <SiLoopback {...iconProps} />,
        'MaterializeCSS': <SiCss3 {...iconProps} />,
        'Bootstrap': <SiBootstrap {...iconProps} />,
        'C#': <span className="text-white font-bold text-center text-xs m-0 p-0 flex items-center justify-center" style={{ width: '12px', height: '12px' }}>C#</span>,
        'Java': <AiOutlineJava {...iconProps} />,
        'Flask': <SiFlask {...iconProps} />,
        'Git': <SiGit {...iconProps} />,
        'GitHub': <SiGithub {...iconProps} />,
        'AWS': <SiAmazonwebservices {...iconProps} />,
        'Vercel': <SiVercel {...iconProps} />,
        'Nginx': <SiNginx {...iconProps} />,
        'Netlify': <SiNetlify {...iconProps} />,
        'Render': <SiRender {...iconProps} />,
        'CSS': <SiCss3 {...iconProps} />,
        'HTML': <SiHtml5 {...iconProps} />,
        'Trello': <SiTrello {...iconProps} />,
        'Jira': <SiJira {...iconProps} />,
        'Notion': <SiNotion {...iconProps} />,
        'Figma': <SiFigma {...iconProps} />,
        'Canva': <SiCanva {...iconProps} />,
        'Python': <SiPython {...iconProps} />,
        'Matplotlib': <FcScatterPlot {...iconProps} />,
        'NetworkX': <LuNetwork {...iconProps} />,
        'Pygame': <SiPythonanywhere {...iconProps} />,
        'Tkinter': <AiOutlinePython {...iconProps} />,
        // Soft skills and methodologies use fallback
        'Scrum': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">S</span></div>,
        'Kanban': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">K</span></div>,
        'Waterfall': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">W</span></div>,
        'Branching Strategies': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">B</span></div>,
        'Pull Requests': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">P</span></div>,
        'Merge Requests': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">M</span></div>,
        'CI/CD': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">C</span></div>,
        'Teamwork': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">T</span></div>,
        'Effective Communication': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">E</span></div>,
        'Problem Solving': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">P</span></div>,
        'Continuous Learning': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">C</span></div>,
        'Time Management': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">T</span></div>,
        // Spanish soft skills
        'Trabajo en Equipo': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">T</span></div>,
        'Comunicación Efectiva': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">C</span></div>,
        'Resolución de Problemas': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">R</span></div>,
        'Aprendizaje Continuo': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">A</span></div>,
        'Gestión del Tiempo': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">G</span></div>,
        // French soft skills
        'Travail en Équipe': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">T</span></div>,
        'Communication Efficace': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">C</span></div>,
        'Résolution de Problèmes': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">R</span></div>,
        'Apprentissage Continu': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">A</span></div>,
        'Gestion du Temps': <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center"><span className="text-white text-xs font-bold">G</span></div>,
    };

    const renderIcon = () => {
        return iconMap[name] || (
            <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
            </div>
        );
    };

    if (showLabel) {
        return (
            <button
                type="button"
                className="flex items-center gap-x-2 bg-white/20 text-white/80 text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
                {renderIcon()}
                <span>{name}</span>
            </button>
        );
    }

    return (
        <div className="relative group flex justify-center">
            {renderIcon()}
            <span className="absolute top-10 scale-0 transition-all rounded bg-black/80 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}