import { Icon } from "@iconify/react";

const skills = [
    {
        name: "HTML",
        icon: "vscode-icons:file-type-html",
        percent: 95,
        aos: "fade-up",
        delay: 0,
    },
    {
        name: "CSS",
        icon: "vscode-icons:file-type-css",
        percent: 90,
        aos: "fade-up",
        delay: 100,
    },
    {
        name: "JavaScript",
        icon: "logos:javascript",
        percent: 80,
        aos: "fade-up",  
        delay: 200,
    },
    {
        name: "React",
        icon: "logos:react",
        percent: 75,
        aos: "fade-up",
        delay: 300,
    },
    {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
        percent: 90,
        aos: "fade-up",
        delay: 400,
    },
    {
        name: "MySQL",
        icon: "logos:mysql",
        percent: 85,
        aos: "fade-up",
        delay: 500,
    },
    {
        name: "UI Design",
        icon: "ph:code-bold",
        percent: 80,
        aos: "fade-up",
        delay: 600,
    },
    {
        name: "WordPress",
        icon: "skill-icons:wordpress",
        percent: 70,
        aos: "fade-up",
        delay: 700,
    },
];

function Skill() {
    return (
        <section
        id="Skill"
        data-aos="fade-up"
        data-aos-duration="1200"
        className="bg-[#050816] min-h-screen px-6 md:px-10 py-24"
        >
        {/* Heading */}
        <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Skills
        </p>

        <h1 className="text-white text-4xl md:text-5xl font-bold mt-2 mb-12 font-inika">
            My Technical Skills
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
            <div
                key={skill.name}
                data-aos={skill.aos}
                data-aos-delay={skill.delay}
                data-aos-duration="800"
                className="bg-[#111827] border border-gray-700 rounded-2xl p-6 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                <Icon
                    icon={skill.icon}
                    className="text-7xl"
                />
                </div>

                {/* Skill Name */}
                <h2 className="text-center text-white text-xl font-semibold mb-6">
                {skill.name}
                </h2>

                {/* Percentage */}
                <div className="flex justify-between text-gray-300 text-sm mb-2">
                <span>Level</span>
                <span>{skill.percent}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percent}%` }}
                />
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Skill;