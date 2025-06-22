'use client'

// Icons remain the same
import {
    SiVite, SiReact, SiNodedotjs, SiJavascript, SiExpress, SiSocketdotio, SiDocker,
    SiGithubactions, SiPrisma, SiMongoose, SiPostgresql, SiMongodb, SiTailwindcss,
    SiNextdotjs, SiFramer, SiTypescript, SiDotnet, SiAngular, SiLoopback,
    SiMysql, SiPython, SiFlask, SiGit, SiGithub, SiAmazonwebservices, SiVercel,
    SiNginx, SiNetlify, SiRender, SiCss3, SiHtml5, SiTrello, SiJira, SiNotion, SiFigma, SiCanva,
    SiBootstrap
} from 'react-icons/si'
import { AiOutlineJava } from 'react-icons/ai'
import { TbBrandThreejs } from 'react-icons/tb'

// Type definition updated to include all technology names from our dictionaries
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
    | 'ASP.NET Core' | 'Prisma';

interface TechIconProps {
    name: TechName;
    showLabel?: boolean;
    className?: string;
}

export default function TechIcon({ name, showLabel = false, className = "h-4 w-4" }: Readonly<TechIconProps>) {
    // We define the icon size here
    const iconProps = { className: className };

    const renderIcon = () => {
        switch (name) {
            case 'React':
                return <SiReact {...iconProps} />;
            case 'Next.js':
                return <SiNextdotjs {...iconProps} />;
            case 'Node.js':
                return <SiNodedotjs {...iconProps} />;
            case 'JavaScript':
                return <SiJavascript {...iconProps} />;
            case 'TypeScript':
                return <SiTypescript {...iconProps} />;
            case 'Express':
                return <SiExpress {...iconProps} />;
            case 'Socket.IO':
                return <SiSocketdotio {...iconProps} />;
            case 'PostgreSQL':
                return <SiPostgresql {...iconProps} />;
            case 'MongoDB':
                return <SiMongodb {...iconProps} />;
            case 'Mongoose':
                return <SiMongoose {...iconProps} />;
            case 'Prisma':
                return <SiPrisma {...iconProps} />;
            case 'Prisma ORM':
                return <SiPrisma {...iconProps} />;
            case 'Docker':
                return <SiDocker {...iconProps} />;
            case 'GitHub Actions':
                return <SiGithubactions {...iconProps} />;
            case 'Vite':
                return <SiVite {...iconProps} />;
            case 'Tailwind CSS':
                return <SiTailwindcss {...iconProps} />;
            case 'Framer Motion':
                return <SiFramer {...iconProps} />;
            case 'Three.js':
                return <TbBrandThreejs {...iconProps} />;
            case 'ASP.NET':
                return <SiDotnet {...iconProps} />;
            case 'ASP.NET Core':
                return <SiDotnet {...iconProps} />;
            case 'Entity Framework':
                return <SiDotnet {...iconProps} />;
            case 'Angular':
                return <SiAngular {...iconProps} />;
            case 'MySQL':
                return <SiMysql {...iconProps} />;
            case 'LoopBack':
                return <SiLoopback {...iconProps} />;
            case 'MaterializeCSS':
                return <SiCss3 {...iconProps} />;
            case 'Bootstrap':
                return <SiBootstrap {...iconProps} />;
            case 'C#':
                return <span className="text-white font-bold text-center text-xs m-0 p-0 flex items-center justify-center" style={{ width: '12px', height: '12px' }}>C#</span>;
            case 'Java':
                return <AiOutlineJava {...iconProps} />;
            case 'Flask':
                return <SiFlask {...iconProps} />;
            case 'Git':
                return <SiGit {...iconProps} />;
            case 'GitHub':
                return <SiGithub {...iconProps} />;
            case 'AWS':
                return <SiAmazonwebservices {...iconProps} />;
            case 'Vercel':
                return <SiVercel {...iconProps} />;
            case 'Nginx':
                return <SiNginx {...iconProps} />;
            case 'Netlify':
                return <SiNetlify {...iconProps} />;
            case 'Render':
                return <SiRender {...iconProps} />;
            case 'CSS':
                return <SiCss3 {...iconProps} />;
            case 'HTML':
                return <SiHtml5 {...iconProps} />;
            case 'Trello':
                return <SiTrello {...iconProps} />;
            case 'Jira':
                return <SiJira {...iconProps} />;
            case 'Notion':
                return <SiNotion {...iconProps} />;
            case 'Figma':
                return <SiFigma {...iconProps} />;
            case 'Canva':
                return <SiCanva {...iconProps} />;
            case 'Python':
                return <SiPython {...iconProps} />;
            default:
                // Fallback for technologies without specific icons (including soft skills)
                return <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
                </div>;
        }
    }

    if (showLabel) {
        // This is the "chip" view for the modal
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