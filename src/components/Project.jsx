import { memo } from "react";

import Radar from './Radar';

import project1 from "../assets/img/catur.webp";
import undangan from "../assets/img/undangan.webp";
import savings from "../assets/img/savings.webp";
import electra from "../assets/img/electra-tama.webp"

const projects = [
    {
        title: "Chess Game",
        image: project1,
        desc: "An interactive web-based chess game with official rules, move validation, a turn system, and a modern responsive interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://wahdanda.github.io/catur/catur.html",
    },
    {
        title: "Digital Invitation",
        image: undangan,
        desc: "Modern Digital Invitation Website with elegant design, smooth animation, background music, countdown, gallery and RSVP.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://wahdanda.github.io/gabungan-code-undangan/gabungan.html",
    },
    {
        title: "Savings Tracker",
        image: savings,
        desc: "Manage your income and expenses easily, monitor your balance, and build better financial habits every day.",
        tech: ["React", "Tailwind"],
        link: "https://wahdanda.github.io/Buku-Tabungan/",
    },
    {
        title: "Elektra Tama",
        image: electra,
        desc: "Modern technology ecommerce landing page with responsive design.",
        tech: ["HTML", "Tailwind", "JavaScript"],
        link: "https://wahdanda.github.io/slicing-web/",
    },
    ];

    function Project() {
    return (
        <section
        id="Project"
        className="relative overflow-hidden bg-black py-20"
        >
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Radar
            speed={1}
            scale={0.5}
            ringCount={10}
            spokeCount={10}
            ringThickness={0.05}
            spokeThickness={0.01}
            sweepSpeed={1}
            sweepWidth={2}
            sweepLobes={1}
            color="#ffffff"
            backgroundColor="#000000"
            brightness={1}
            enableMouseInteraction={false}
            />
        </div>

        <div className="relative z-10">

            <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-emerald-500 font-semibold">
                Projects
            </p>

            <h2 className="text-5xl font-bold text-white mt-2">
                Featured Projects
            </h2>
            </div>

            {/* Infinite Project */}
        <div className="overflow-hidden group h-225 md:h-auto">
    <div className="flex flex-col md:flex-row gap-8 w-max md:w-max animate-project">

                {[...projects, ...projects].map((project, index) => (

                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-90
                    rounded-3xl
                    overflow-hidden
                    border
                    border-white/10
                    bg-[#111827]/90
                    backdrop-blur-md
                    shadow-xl
                    transition
                    duration-300
                    hover:-translate-y-3
                    hover:border-emerald-400
                    hover:shadow-cyan-500/30
                    shrink-0
                    "
                >

                    <div className="h-52 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />
                    </div>

                    <div className="p-6 h-72 flex flex-col">

                    <h3 className="text-2xl font-bold text-white">
                        {project.title}
                    </h3>

                    <p className="mt-4 text-gray-300 flex-1 leading-7">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">

                        {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="
                            px-3
                            py-1
                            rounded-full
                            bg-cyan-500/10
                            border
                            border-emerald-500/30
                            text-emerald-300
                            text-xs
                            "
                        >
                            {tech}
                        </span>
                        ))}

                    </div>

                    </div>

                </a>

                ))}

            </div>

            </div>

        </div>
        </section>
    );
}


export default memo(Project);