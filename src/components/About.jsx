import { memo } from "react";
import { Icon } from "@iconify/react";

const aboutItems = [
    {
        icon: "material-symbols:school-outline",
        title: "Education",
        description: ["Vocational High School", "Software Engineering (RPL)"],
    },
    {
        icon: "mdi:map-marker-outline",
        title: "Location",
        description: ["Bali", "Indonesia"],
    },
    {
        icon: "mdi:target",
        title: "Goal",
        description: ["Study in Australia", "Become Full-Stack Developer"],
    },
    {
        icon: "mdi:heart-outline",
        title: "Passion",
        description: ["Coding", "Problem Solving", "Building Websites"],
    },
];

const logos = [
    { name: "HTML", icon: "vscode-icons:file-type-html", percent: 95 },
    { name: "CSS", icon: "vscode-icons:file-type-css", percent: 90 },
    { name: "JavaScript", icon: "logos:javascript", percent: 80 },
    { name: "React", icon: "logos:react", percent: 75 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", percent: 90 },
    { name: "MySQL", icon: "logos:mysql", percent: 85 },
    { name: "Figma", icon: "logos:figma", percent: 70 },
    { name: "WordPress", icon: "skill-icons:wordpress", percent: 70 },
];

function About() {
    return (
        <>
        <div className="overflow-hidden group py-10">
            <div className="flex w-max animate-marquee group-hover:paused">
                {[...logos, ...logos].map((logo, index) => (
                <div
                    key={index}
                    className="mx-9 flex flex-col items-center md:mx-19"
                >
                    <Icon className="w-10" icon={logo.icon} />
                    <span className="mt-2 text-sm">
                    {logo.name}
                    </span>
                </div>
                ))}
            </div>
        </div>
        <section
            id="About"
            aria-labelledby="about-title"
            className="bg-black text-white py-20 px-6 sm:px-10 lg:px-10 xl:px-20"
        >

            <div className="max-w-7xl mx-auto">
                <p
                    id="about-title"
                    className="text-blue-600 font-semibold uppercase tracking-widest mb-2 text-sm"
                >
                    About Me
                </p>

                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between text-start">
                    {/* Left Text */}
                    <div className="lg:w-1/2">
                        <h2 className="font-inika text-3xl sm:text-4xl font-bold mb-4 ">
                            Who I Am
                        </h2>

                        <p className=" leading-relaxed max-w-lg mb-6">
                            I am a vocational student majoring in Software Engineering (RPL) with a strong passion for web development. I enjoy turning ideas into real websites that are useful, modern, and user-friendly.
                        </p>

                        <p className=" leading-relaxed max-w-lg">
                            My goal is to become a Full-Stack Developer and study in Australia to gain knowledge, experience, and build a better future.
                        </p>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-gray-900">
                        {aboutItems.map((item, index) => (
                            <article
                                key={item.title}
                                className={`
                                    flex gap-4 p-6 transition-colors duration-200 hover:bg-gray-50
                                    ${index === 0 ? "border-b sm:border-r border-gray-200" : ""}
                                    ${index === 1 ? "border-b border-gray-200" : ""}
                                    ${index === 2 ? "border-b sm:border-r sm:border-b-0 border-gray-200" : ""}
                                `}
                            >
                                <Icon
                                    icon={item.icon}
                                    className="text-blue-600 text-4xl shrink-0 mt-1"
                                    aria-hidden="true"
                                />

                                <div>
                                    <h3 className="font-bold text-lg mb-1">
                                        {item.title}
                                    </h3>

                                    <div className="text-sm space-y-1">
                                        {item.description.map((text) => (
                                            <p key={text}>{text}</p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default memo(About);