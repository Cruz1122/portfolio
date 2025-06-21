import TechIcon, { TechName } from "./TechIcon";

interface SkillCategoryProps {
    title: string;
    skills: TechName[];
}

export default function SkillCategory({ title, skills }: Readonly<SkillCategoryProps>) {
    return (
        <div className="border border-white/20 rounded-lg p-6 bg-gray-900/50">
            <h3 className="text-xl font-bold text-white mb-4 text-center">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                    <TechIcon key={skill} name={skill} showLabel={true} />
                ))}
            </div>
        </div>
    )
}