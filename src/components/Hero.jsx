import { memo, useRef, lazy, Suspense, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import TextType from "./TextType";

const Galaxy = lazy(() => import("./Galaxy"));

function Hero() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      ref={heroRef}
      id="Hero"
      aria-labelledby="hero-title"
      data-aos="fade-up"
      data-aos-duration="1200"
      className="relative overflow-hidden bg-black text-white min-h-screen flex items-center justify-center px-6 sm:px-10 xl:px-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">

        {/* Desktop */}
        {!isMobile && (
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
            }
          >
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
          </Suspense>
        )}

        {/* Mobile */}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black">
            <div className="absolute w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] left-1/2 -translate-x-1/2 top-20" />
            <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] right-0 bottom-0" />
          </div>
        )}
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

        <h2 className="mt-3 font-inika font-bold text-emerald-400 text-3xl md:text-4xl lg:text-5xl">
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
          I build responsive and modern websites using HTML, CSS, Tailwind CSS,
          JavaScript, React and MySQL.
        </p>

        <a
          href="#Project"
          className="inline-flex items-center gap-3 mt-10 bg-emerald-400 text-zinc-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-emerald-600 hover:-translate-y-1 hover:scale-105"
        >
          View My Work
          <Icon icon="line-md:arrow-right" width={24} />
        </a>
      </div>
    </section>
  );
}

export default memo(Hero);