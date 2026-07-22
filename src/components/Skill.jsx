import { memo } from "react";
import { Icon } from "@iconify/react";
import TargetCursor from "./TargetCursor";

const skills = [
    { name: "HTML", icon: "vscode-icons:file-type-html", percent: 95 },
    { name: "CSS", icon: "vscode-icons:file-type-css", percent: 90 },
    { name: "JavaScript", icon: "logos:javascript", percent: 80 },
    { name: "React", icon: "logos:react", percent: 75 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", percent: 90 },
    { name: "MySQL", icon: "logos:mysql", percent: 85 },
    { name: "Figma", icon: "logos:figma", percent: 70 },
    { name: "WordPress", icon: "skill-icons:wordpress", percent: 70 },
];

function Skill() {
    return (
        <section
            id="Skill"
            aria-labelledby="skills-heading"
            className="relative target-cursor-area bg-[#050816] min-h-screen px-6 md:px-10 py-24"
        >
            <TargetCursor
                containerSelector="#Skill"
                targetSelector=".cursor-target"
                spinDuration={2}
                hideDefaultCursor
                parallaxOn
                hoverDuration={0.2}
                cursorColor="#ffffff"
                cursorColorOnTarget="#131ad5"
            />

            <div className="max-w-7xl mx-auto">
                <p className="text-blue-500 uppercase tracking-widest font-semibold text-sm">
                    Skills
                </p>

                <h2 id="skills-heading" className="text-white text-4xl md:text-5xl font-bold mt-2 mb-12 font-inika">
                    My Technical Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="cursor-target bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
                        >
                            <div className="flex justify-center mb-5 h-16 items-center">
                                <Icon
                                    icon={skill.icon}
                                    className="text-6xl"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="text-center text-white text-lg font-semibold mb-4">
                                {skill.name}
                            </h3>

                            <div className="flex justify-between text-gray-400 text-xs mb-2">
                                <span>Proficiency</span>
                                <span className="font-mono">{skill.percent}%</span>
                            </div>

                            <div 
                                className="w-full h-2 bg-gray-800 rounded-full overflow-hidden"
                                role="progressbar"
                                aria-valuenow={skill.percent}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`${skill.name} proficiency level`}
                            >
                                <div
                                    className="bg-linear-to-r from-blue-500 to-blue-500 h-full rounded-full transition-all duration-500"
                                    style={{ width: `${skill.percent}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Skill);