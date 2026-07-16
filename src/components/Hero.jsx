import { Icon } from "@iconify/react";
import Lanyard from "./Lanyard";
import foto from "../assets/img/foto.jpg";
import tali from "../assets/img/tali.png";
import ColorBends from './ColorBends';
import TextType from './TextType';


function Hero() {
    return (
        <>
        <section
        data-aos="fade-up"
        data-aos-duration="1200"
        id="Hero"
        className=" bg-black relative overflow-hidden  text-white min-h-screen grid grid-cols-1 pt-19 items-center px-6 sm:px-10 sm:gap-1 sm:grid-cols-2 sm:text-left lg:px-10 lg:justify-left xl:px-5 xl:justify-left xl:pl-20"
        >
        <div className="max-w-3xl">

            {/* Background Liquid Chrome */}
            <div className="absolute inset-0 -z-10">
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
            </div>

            <p className="mb-4 mt-10 font-lato text-base sm:text-lg">
            Hello, I'm
            </p>

            <h1 data-aos="fade-up" data-aos-duration="1300" className="font-inika font-bold leading-tight text-4xl sm:text-2xl lg:text-2xl">
            Gusti Ngurah Danda Hasta
            </h1>

            <h2 data-aos="fade-up" data-aos-duration="1400" className="font-inika text-blue-500 font-bold mt-2 text-4xl sm:text-2xl lg:text-2xl">
            <TextType 
            text={["Web Developer"]}
            typingSpeed={130}
            pauseDuration={1200}
            showCursor={false}
            cursorCharacter="|"
            texts={["Web Developer"]}
            deletingSpeed={130}
            variableSpeedEnabled={false}
            variableSpeedMin={80}
            variableSpeedMax={300}
            cursorBlinkDuration={1.3}
            />
            </h2>

            <p  data-aos="fade-up" data-aos-duration="1500" className="mt-6 text-gray-300 leading-8 max-w-xl text-base sm:text-xs">
            I build responsive and modern websites using HTML, CSS,
            Tailwind CSS, JavaScript, React and MySQL.
            </p>

            {/* Button */}
            <a data-aos="fade-up" data-aos-duration="1600"
            href="#Project"
            className="inline-flex items-center gap-3 mt-10 bg-blue-500 px-8 py-4 rounded-xl hover:bg-blue-600 hover:-translate-y-1 ease-in-out hover:scale-110 duration-300"
            >
            View My Work
            <Icon icon="line-md:arrow-right" width="24" />
            </a>

            {/* Social */}
            <div className="flex gap-6 mt-10  justify-center md:justify-start">

            <a
                href="https://github.com/wahdanda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:scale-110 duration-300"
            >
                <Icon icon="mdi:github" className="text-4xl sm:text-5xl" />
            </a>

            <a
                href="https://www.linkedin.com/in/gusti-ngurah-danda-hasta-7b59a1420"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:scale-110 duration-300"
            >
                <Icon icon="prime:linkedin" className="text-4xl sm:text-5xl" />
            </a>

            <a
                href="mailto:gstngrdandahasta@gmail.com"
                className="hover:text-blue-500 hover:scale-110 duration-300"
            >
                <Icon icon="mdi:gmail" className="text-4xl sm:text-5xl" />
            </a>

            <a
                href="https://www.instagram.com/dandahasta/"
                className="hover:text-blue-500 hover:scale-110 duration-300"
            >
                <Icon icon="line-md:instagram" className="text-4xl sm:text-5xl" />
            </a>

            </div>
        </div>
            <div className="  w-full  h-175 ">
                <Lanyard
                    position={[0, 0, 20]}
                    gravity={[0, -40, 0]}
                    frontImage={foto}
                    lanyardImage={tali}
                />
            </div>
        </section>
        </>
    );
}

export default Hero;