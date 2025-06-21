'use client'

// Icons remain the same
import {
    SiVite, SiReact, SiNodedotjs, SiJavascript, SiExpress, SiSocketdotio,
    SiDocker, SiGithubactions, SiPrisma, SiMongoose, SiPostgresql, SiMongodb, SiTailwindcss, SiNextdotjs, SiFramer, SiTypescript,
    SiDotnet,
    SiLoopback,
    SiMysql,
    SiAngular,
    SiSharp,
    SiBootstrap,
    SiCss3
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { TbBrandThreejs } from 'react-icons/tb'

// Type definition remains the same
export type TechName =
    | 'Vite' | 'React' | 'Node.js' | 'JavaScript' | 'Express' | 'Socket.IO'
    | 'Docker' | 'GitHub Actions' | 'Prisma' | 'Mongoose' | 'PostgreSQL'
    | 'MongoDB' | 'Tailwind CSS' | 'Next.js' | 'TypeScript' | 'Framer Motion'
    | 'Three.js' | 'i18n' | 'ASP.NET' | 'C#' | 'Entity Framework' | 'ASP.NET Core' | 'Angular' | 'MySQL' | 'LoopBack' | 'MaterializeCSS' | 'Bootstrap';

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
                return <FaReact {...iconProps} />;
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
            case 'Entity Framework':
                return <SiDotnet {...iconProps} />;
            case 'ASP.NET Core':
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
            default:
                return;
        }
    }

    if (showLabel) {
        // This is the "chip" view for the modal
        return (
            <div className="flex items-center gap-x-2 bg-white/20 text-white/80 text-sm font-medium px-3 py-1.5 rounded-full border border-white/20">
                {renderIcon()}
                <span>{name}</span>
            </div>
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