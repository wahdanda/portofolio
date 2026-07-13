import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Import gambar project
import project1 from "../assets/catur.png";
import undangan from "../assets/undangan.png"

const projects = [
    {
        title: "Cheas",
        image: project1,
        desc: "An interactive web-based chess game with official rules, move validation, a turn system, and a modern, responsive interface.",
        tech: ["HTML", "CSS", "JavaScrip"],
        link:"http://wahdanda.github.io/catur/catur.html",
    },
    {
        title: "invitation",
        image: undangan,
        desc: "Modern Digital Invitation Website with elegant design, smooth animation, background music, event countdown, photo gallery, Google Maps, RSVP, and responsive display on all devices.",
        tech: ["HTML","CSS","JavaScrip"],
        link:"https://wahdanda.github.io/gabungan-code-undangan/gabungan.html",
    }
];

function Project() {
    return (
        <section id="Project" className="bg-white text-black py-20 px-6 sm:px-10 lg:px-10 xl:px-2 xl:w-screen xl:-ml-48">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:ml-36 mb-12">
            <div>
                <p className="uppercase tracking-widest text-indigo-500 font-semibold sm:text-left">
                Projects
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                Featured Projects
                </h2>
            </div>
            </div>
            {/* Swiper */}
            <Swiper modules={[Navigation]} navigation speed={600} spaceBetween={24} slidesPerView={4} breakpoints={{
                0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
                },
                640: {
                slidesPerView: 1.5,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
                1280: {
                slidesPerView: 4,
                },
            }}
            >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl overflow-hidden outline-2 hover:-translate-y-2 duration-500 ml-0.5 mb-0.5">
                    <a href={project.link}>
                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
                    <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                        {project.title}
                    </h3>
                    <p className=" text-gray-500 mt-2 leading-7">
                        {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {project.tech.map((item, i) => (
                        <spa key={i} className=" px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm">
                            {item}
                        </spa>
                        ))}
                    </div>
                    </div>
                    </a>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    );
}

export default Project;