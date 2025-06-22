import TechIcon from "./TechIcon";

interface Skill {
    name: string;
    abilities: string[];
}

interface SkillCategoryProps {
    title: string;
    skills?: Skill[];
    onSkillClick: (skill: Skill) => void;
}

export default function SkillCategory({ title, skills, onSkillClick }: Readonly<SkillCategoryProps>) {
    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <div className="border border-white/20 rounded-lg p-6 bg-gray-900/50">
            <h3 className="text-xl font-bold text-white mb-4 text-center">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                    <div 
                        key={skill.name}
                        onClick={() => onSkillClick(skill)}
                        className="cursor-pointer hover:scale-110 transition-transform duration-200"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                onSkillClick(skill);
                            }
                        }}
                    >
                        <TechIcon
                            name={skill.name as any}
                            showLabel={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}