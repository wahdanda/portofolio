import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Import gambar project
import project1 from "../assets/img/catur.png";
import undangan from "../assets/img/undangan.png"

const projects = [
    {
        title: "Cheas",
        image: project1,
        desc: "An interactive web-based chess game with official rules, move validation, a turn system, and a modern, responsive interface.",
        tech: ["HTML", "CSS", "JavaScrip"],
        link:"http://wahdanda.github.io/catur/catur.html",
        aos: "fade-up",
        delay: 0,
    },
    {
        title: "invitation",
        image: undangan,
        desc: "Modern Digital Invitation Website with elegant design, smooth animation, background music, event countdown, photo gallery, Google Maps, RSVP, and responsive display on all devices.",
        tech: ["HTML","CSS","JavaScrip"],
        link:"https://wahdanda.github.io/gabungan-code-undangan/gabungan.html",
        aos: "fade-up",
        delay: 100,
    }
];

function Project() {
    return (
        <section id="Project" data-aos="fade-up"
        data-aos-duration="1200" className="bg-white text-black py-20 px-6 sm:px-10 lg:px-10 xl:px-">
        <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="text-center">
                <p data-aos="fade-up"
        data-aos-duration="1300" className="uppercase tracking-widest text-indigo-500 font-semibold sm:text-center">
                Projects
                </p>
                <h2  data-aos="fade-up"
        data-aos-duration="1400"className="text-4xl md:text-5xl font-bold mt-2">
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
                <SwiperSlide key={index} className="p-2">
                <div data-aos={project.aos}
                data-aos-delay={project.delay}
                data-aos-duration="800" className=" bg-white rounded-3xl overflow-hidden outline-2 hover:-translate-y-2 duration-500 h-full flex flex-col ">
                    <a href={project.link}>
                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
                    <div className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-gray-800">
                        {project.title}
                    </h3>
                    <div className="mt-4 h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-transparent pr-2">
                        <p className="text-gray-500 leading-7">
                            {project.desc}
                        </p>
                    </div>
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