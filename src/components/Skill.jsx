import { Icon } from "@iconify/react";

const skills = [
    {
        name: "HTML",
        icon: "vscode-icons:file-type-html",
        percent: 95,
    },
    {
        name: "CSS",
        icon: "vscode-icons:file-type-css",
        percent: 90,
    },
    {
        name: "JavaScript",
        icon: "logos:javascript",
        percent: 80,
    },
    {
        name: "React",
        icon: "logos:react",
        percent: 75,
    },
    {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
        percent: 90,
    },
    {
        name: "MySQL",
        icon: "logos:mysql",
        percent: 85,
    },
    {
        name: "UI Design",
        icon: "ph:code-bold",
        percent: 80,
    },
    {
        name:"WordPress",
        icon:"skill-icons:wordpress",
        percent:70,
    }
];

    function Skill() {
    return (
        <section
        id="Skill"
        className="bg-[#050816] min-h-screen px-10 py-24"
        >
        <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Skills
        </p>

        <h1 className="text-white text-5xl font-bold mt-2 mb-12 font-inika">
            My Technical Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {skills.map((skill) => (
            <div
                key={skill.name}
                className="bg-[#111827] border border-gray-700 rounded-2xl p-6 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
            >
                <div className="flex justify-center mb-5">
                <Icon
                    icon={skill.icon}
                    className="text-7xl"
                />
                </div>

                <h2 className="text-center text-white text-xl font-semibold mb-6">
                {skill.name}
                </h2>

                <div className="flex justify-between text-gray-300 text-sm mb-2">
                <span>Level</span>
                <span>{skill.percent}%</span>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: `${skill.percent}%` }}
                ></div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Skill;




