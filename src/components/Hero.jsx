import { memo, useEffect, useState, lazy, Suspense } from "react";
import { Icon } from "@iconify/react";
import TextType from "./TextType";

const Galaxy = lazy(() => import("./Galaxy"));

function Hero() {
  const [showGalaxy, setShowGalaxy] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      setShowGalaxy(true);
      return;
    }

    const timeout = setTimeout(() => {
      setShowGalaxy(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="Hero"
      className="relative overflow-hidden bg-black text-white min-h-[100svh] flex items-center justify-center px-6 sm:px-10 xl:px-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* Galaxy */}
      {showGalaxy && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 -z-10">
            <Galaxy
              mouseRepulsion={window.innerWidth >= 768}
              mouseInteraction={window.innerWidth >= 768}
              density={window.innerWidth < 768 ? 0.45 : 1}
              glowIntensity={0.25}
              saturation={0}
              hueShift={140}
              twinkleIntensity={0.2}
              rotationSpeed={0.05}
              repulsionStrength={1}
              autoCenterRepulsion={0}
              starSpeed={0.35}
              speed={0.6}
            />
          </div>
        </Suspense>
      )}

      {/* Hero */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="mb-4 font-lato text-base sm:text-lg">
          Hello, I'm
        </p>

        <h1 className="font-inika font-bold text-4xl md:text-5xl lg:text-6xl">
          Gusti Ngurah Danda Hasta
        </h1>

        <h2 className="mt-3 font-inika font-bold text-emerald-400 text-3xl md:text-4xl lg:text-5xl">
          <TextType
            text={["Web Developer"]}
            typingSpeed={130}
            deletingSpeed={130}
            pauseDuration={1200}
            showCursor={false}
          />
        </h2>

        <p className="mt-6 text-gray-300 leading-8 max-w-2xl mx-auto">
          I build responsive and modern websites using HTML, CSS,
          Tailwind CSS, JavaScript, React and MySQL.
        </p>

        <a
          href="#Project"
          className="inline-flex items-center gap-3 mt-10 bg-emerald-400 text-zinc-900 font-bold px-8 py-4 rounded-xl hover:bg-emerald-500 transition"
        >
          View My Work

          <Icon
            icon="line-md:arrow-right"
            width={24}
          />
        </a>
      </div>
    </section>
  );
}

export default memo(Hero);