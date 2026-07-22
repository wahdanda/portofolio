import {
    memo,
    lazy,
    Suspense,
    useEffect,
    useState
} from "react";

import { Icon } from "@iconify/react";

import foto from "../assets/img/foto.webp";
import tali from "../assets/img/tali.webp";
import TextType from "./TextType";
import useInView from "../hooks/useInView";

const Lanyard = lazy(() => import("./Lanyard"));
const ColorBends = lazy(() => import("./ColorBends"));

function Hero() {

    const [heroRef, visible] = useInView();
    const [loadAnimation, setLoadAnimation] = useState(false);
    

    useEffect(() => {

        if (!visible) return;

        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(() => {
                setLoadAnimation(true);
            });
        } else {
            setTimeout(() => {
                setLoadAnimation(true);
            }, 200);
        }

    }, [visible]);

    return (
        <section
            ref={heroRef}
            id="Hero"
            aria-labelledby="hero-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            className="relative overflow-hidden bg-black text-white min-h-screen grid grid-cols-1 items-center pt-20 px-6 sm:grid-cols-2 sm:px-10 xl:px-20"
        >

            {/* Background */}
            <div className="absolute inset-0 -z-10">

                {loadAnimation && (
                    <Suspense fallback={<div className="w-full h-full rounded-3xl bg-neutral-900 animate-pulse" />}>
                        <ColorBends
                            colors={["#000eff"]}
                            rotation={90}
                            speed={0.2}
                            scale={1}
                            frequency={1}
                            warpStrength={1}
                            mouseInfluence={1}
                            noise={0.15}
                            parallax={0.5}
                            iterations={1}
                            intensity={1.5}
                            bandWidth={6}
                            transparent
                            autoRotate={0}
                            color="#000eff"
                        />
                    </Suspense>
                ) }
                    <div className="w-full h-full rounded-3xl bg-neutral-900 animate-pulse" />

            </div>

            {/* Left */}
            <div className=" md:text-start max-w-3xl">

                <p className="mb-4 mt-10 md:-mt-20 font-lato text-base sm:text-lg">
                    Hello, I'm
                </p>

                <h1
                    id="hero-title"
                    className="font-inika font-bold leading-tight text-4xl lg:text-5xl"
                >
                    Gusti Ngurah Danda Hasta
                </h1>

                <h2 className="mt-2 font-inika font-bold text-blue-500 text-3xl lg:text-4xl">

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

                <p className="mt-6 max-w-xl leading-8 text-gray-300">
                    I build responsive and modern websites using HTML, CSS,
                    Tailwind CSS, JavaScript, React and MySQL.
                </p>

                {/* Button */}

                <a
                    href="#Project"
                    aria-label="View My Projects"
                    className="inline-flex items-center gap-3 mt-10 bg-blue-500 px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:scale-105"
                >

                    View My Work

                    <Icon
                        icon="line-md:arrow-right"
                        width="24"
                        aria-hidden="true"
                    />

                </a>

                {/* Social */}

                <div className="flex gap-6 mt-10 justify-center md:justify-start">

                    <a
                        href="https://github.com/wahdanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition hover:text-blue-500 hover:scale-110"
                    >
                        <Icon
                            icon="mdi:github"
                            className="text-4xl"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gusti-ngurah-danda-hasta-7b59a1420"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition hover:text-blue-500 hover:scale-110"
                    >
                        <Icon
                            icon="prime:linkedin"
                            className="text-4xl"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="mailto:gstngrdandahasta@gmail.com"
                        aria-label="Email"
                        className="transition hover:text-blue-500 hover:scale-110"
                    >
                        <Icon
                            icon="mdi:gmail"
                            className="text-4xl"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/dandahasta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="transition hover:text-blue-500 hover:scale-110"
                    >
                        <Icon
                            icon="line-md:instagram"
                            className="text-4xl"
                            aria-hidden="true"
                        />
                    </a>

                </div>

            </div>

            {/* Right */}

            <div
                role="img"
                aria-label="Portrait of Gusti Ngurah Danda Hasta"
                className="w-full h-162.5 lg:h-175 xl:h-190"
            >

                {loadAnimation && (
                    
                        <div className="w-full h-full">
                            <Lanyard
                                position={[0, 0, 20]}
                                gravity={[0, -40, 0]}
                                frontImage={foto}
                                lanyardImage={tali}
                            />
                        </div>
                )}                

            </div>

        </section>
    );
}

export default memo(Hero);