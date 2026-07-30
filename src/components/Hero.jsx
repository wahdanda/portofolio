import { memo, useRef } from "react";
import { Icon } from "@iconify/react";

import TextType from "./TextType";
import Galaxy from "./Galaxy";

function Hero() {
    const heroRef = useRef(null);

    return (
        <section
            ref={heroRef}
            id="Hero"
            aria-labelledby="hero-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            className="relative overflow-hidden bg-black text-white min-h-screen flex items-center justify-center px-6 outline-1 sm:px-10 xl:px-20"
        >
            {/* Background Galaxy */}
            <div className="absolute inset-0 -z-10">
                <Galaxy
                    mouseRepulsion
                    mouseInteraction
                    density={1}
                    glowIntensity={0.3}
                    saturation={0}
                    hueShift={140}
                    twinkleIntensity={0.3}
                    rotationSpeed={0.1}
                    repulsionStrength={2}
                    autoCenterRepulsion={0}
                    starSpeed={0.5}
                    speed={1}
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-3xl">

                <p className="mb-4 font-lato text-base sm:text-lg">
                    Hello, I'm
                </p>

                <h1
                    id="hero-title"
                    className="font-inika font-bold text-4xl md:text-5xl lg:text-6xl"
                >
                    Gusti Ngurah Danda Hasta
                </h1>

                <h2 className="mt-3 font-inika font-bold text-blue-500 text-3xl md:text-4xl lg:text-5xl">
                    <TextType
                        text={["Web Developer"]}
                        typingSpeed={130}
                        deletingSpeed={130}
                        pauseDuration={1200}
                        showCursor={false}
                        cursorCharacter="|"
                        variableSpeedEnabled={false}
                    />
                </h2>

                <p className="mt-6 text-gray-300 leading-8 max-w-2xl mx-auto">
                    I build responsive and modern websites using HTML, CSS,
                    Tailwind CSS, JavaScript, React and MySQL.
                </p>

                <a
                    href="#Project"
                    aria-label="View My Projects"
                    className="inline-flex items-center gap-3 mt-10 bg-blue-500 px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:scale-105"
                >
                    View My Work

                    <Icon
                        icon="line-md:arrow-right"
                        width={24}
                        aria-hidden="true"
                    />
                </a>
            </div>
        </section>
    );
}

export default memo(Hero);