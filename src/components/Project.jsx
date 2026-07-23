import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import project1 from "../assets/img/catur.webp";
import undangan from "../assets/img/undangan.webp";
import savings from "../assets/img/savings.webp";
import electra from "../assets/img/electra-tama.webp"

const projects = [
    {
        title: "Chess Game",
        image: project1,
        desc: "An interactive web-based chess game with official rules, move validation, a turn system, and a modern, responsive interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://wahdanda.github.io/catur/catur.html",
    },
    {
        title: "Digital Invitation",
        image: undangan,
        desc: "Modern Digital Invitation Website with elegant design, smooth animation, background music, event countdown, photo gallery, RSVP, and responsive display.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://wahdanda.github.io/gabungan-code-undangan/gabungan.html",
    },
    {
        title: "Savings Tracker",
        image: savings,
        desc: "Manage your income and expenses easily, monitor your balance, and build better financial habits every day.",
        tech: ["React", "Tailwind",],
        link: "https://wahdanda.github.io/Buku-Tabungan/",
    },
    {
        title: "Elektra Tama",
        image: electra ,
        desc:"Elektra Tama is here to accompany your digital lifestyle. Since the beginning, we've focused on providing selected tech gadgets and accessories—from earbuds and smartwatches to gaming gear—with proven quality and reasonable prices. Every product we sell goes through a rigorous selection process, is backed by an official warranty, and our customer service is ready to help at any time.",
        tech: ["HTML","Tailwind","JavaScript"],
        link: "https://wahdanda.github.io/slicing-web/",
    },
];

function Project() {
    return (
        <section
            id="Project"
            aria-labelledby="projects-heading"
            className="bg-white py-20 px-6 sm:px-10 lg:px-10 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="uppercase tracking-widest text-indigo-600 font-semibold text-sm">
                        Projects
                    </p>
                    <h2 id="projects-heading" className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                        Featured Projects
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    speed={400}
                    slidesPerView={1}
                    spaceBetween={24}
                    watchOverflow
                    className="w-full pb-8"
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 3 },
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.title}>
                            <article>
                                <a href={project.link} className="w-full max-w-sm mx-auto bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-120">
                                <div className="relative w-full h-48 bg-gray-100 overflow-hidden shrink-0">
                                    <img
                                        src={project.image}
                                        alt={`Screenshot preview of ${project.title}`}
                                        loading="lazy"
                                        decoding="async"
                                        width="384"
                                        height="192"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        <a
                                            
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-500 transition-colors focus:outline-none focus:underline"
                                        >
                                            {project.title}
                                        </a>
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3 flex-1">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-gray-100">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-full bg-indigo-50 text-blue-500 text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                </a>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default memo(Project);