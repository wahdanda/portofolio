import { memo } from "react";
import { Icon } from "@iconify/react";

const logos = [
{ name: "HTML", icon: "vscode-icons:file-type-html" },
{ name: "CSS", icon: "vscode-icons:file-type-css" },
{ name: "JavaScript", icon: "logos:javascript" },
{ name: "React", icon: "logos:react" },
{ name: "Tailwind", icon: "logos:tailwindcss-icon" },
{ name: "MySQL", icon: "logos:mysql" },
{ name: "Figma", icon: "logos:figma" },
{ name: "WordPress", icon: "skill-icons:wordpress" },
];

const skills = [
{
    title: "Frontend Development",
    percent: 95,
},
{
    title: "Backend Development",
    percent: 80,
},
{
    title: "UI / UX Design",
    percent: 90,
},
];

function CircularProgress({ percent }) {
const radius = 54;
const stroke = 8;

const normalizedRadius = radius - stroke / 2;
const circumference = normalizedRadius * 2 * Math.PI;

const strokeDashoffset =
    circumference - (percent / 100) * circumference;

return (
    <svg width="130" height="130" className="-rotate-90">
    <circle
        cx="65"
        cy="65"
        r={normalizedRadius}
        stroke="#2f2f40"
        strokeWidth={stroke}
        fill="transparent"
    />

    <circle
        cx="65"
        cy="65"
        r={normalizedRadius}
        stroke="#34D399"
        strokeWidth={stroke}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
    />

    <text
        x="65"
        y="72"
        textAnchor="middle"
        transform="rotate(90 65 65)"
        className="fill-white"
        style={{
        fontWeight: 700,
        fontSize: 20,
        }}
    >
        {percent}%
    </text>
    </svg>
);
}

function About() {
return (
    <>
    {/* Logo Marquee */}
    <div className="bg-black overflow-hidden group py-10">
        <div className="flex w-max animate-marquee group-hover:paused">
        {[...logos, ...logos].map((logo, index) => (
            <div
            key={index}
            className="mx-10 flex flex-col items-center"
            >
            <Icon
                icon={logo.icon}
                className="w-10 h-10"
            />

            <span className="mt-2 text-sm text-white">
                {logo.name}
            </span>
            </div>
        ))}
        </div>
    </div>

    {/* About */}
    <section
        id="About"
        className="bg-black text-white py-20 px-6 lg:px-20"
    >
        <p className="uppercase tracking-widest text-emerald-400 font-semibold text-sm text-center mb-7">
            About Me
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6">

        {/* Heading */}
        <div className="mb-20 text-start">
            

            <h2 className="font-inika text-4xl font-bold mt-2">
            Who I Am
            </h2>

            <p className="mt-6 text-gray-300 max-w-2xl leading-8">
            I am a vocational student majoring in Software Engineering
            (RPL) with a strong passion for web development. I enjoy
            turning ideas into modern, responsive, and user-friendly
            websites.

            <br />
            <br />

            My goal is to become a Full-Stack Developer and study in
            Australia to gain knowledge, experience, and build a better
            future.
            </p>
        </div>

        {/* Skills */}
        <div className="grid gap-10 md:grid-cols-2">
        {skills.map((skill, index) => (
            <div
            key={skill.title}
            className={`
                rounded-3xl
                border
                border-white/10
                bg-[#171526]
                p-1
                text-center
                transition
                duration-300
                hover:-translate-y-3
                hover:border-emerald-400
                hover:shadow-emerald-200

                ${
                index === 2
                    ? "md:col-span-2 md:w-1/2 md:mx-auto"
                    : ""
                }
            `}
            >
            <div className="flex justify-center">
                <CircularProgress percent={skill.percent} />
            </div>

            <h3 className="text-3xl font-bold mt-6 md:text-xl">
                {skill.title}
            </h3>

            <p className="mt-4 text-gray-400">
                {skill.desc}
            </p>
            </div>
        ))}
        </div>
        </div>
    </section>
    </>
);
}

export default memo(About);
