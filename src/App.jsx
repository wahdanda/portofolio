import { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";

// ⚡ LAZY LOAD komponen
const About = lazy(() => import("./components/About"));
const Skill = lazy(() => import("./components/Skill"));
const Project = lazy(() => import("./components/Project"));
const Footer = lazy(() => import("./components/Footer"));

// ⚡ LOADING FALLBACK
const ComponentFallback = () => (
  <div className="w-full min-h-50 bg-linear-to-b from-black to-gray-900 animate-pulse" />
);

function App() {
  const [loading, setLoading] = useState(true);

  // 1. ⚡ Optimize Lenis - Smooth Scroll dengan Cleanup RAF
  useEffect(() => {
    const isLowPerformance =
      !navigator.deviceMemory || navigator.deviceMemory <= 4;

    if (isLowPerformance) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Clean up sempurna saat unmount
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // 2. ⚡ Optimize & Init AOS
  useEffect(() => {
    const aosTimer = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        easing: "ease-in-out",
        disable: window.innerWidth < 768 ? "mobile" : false,
        offset: 100,
        delay: 50,
      });
    }, 100);

    return () => clearTimeout(aosTimer);
  }, []);

  // 3. ⚡ Refresh AOS saat loading selesai agar posisi elemen terdeteksi ulang
  useEffect(() => {
    if (!loading) {
      // Buka penundaan kecil agar komponen lazy sempat dimuat ke DOM
      const refreshTimer = setTimeout(() => {
        AOS.refresh();
      }, 300);

      return () => clearTimeout(refreshTimer);
    }
  }, [loading]);

  // 4. ⚡ Loading State Timer
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <>
      {loading && <LoadingScreen finish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <Hero />

          {/* ⚡ Lazy load components */}
          <Suspense fallback={<ComponentFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<ComponentFallback />}>
            <Skill />
          </Suspense>

          <Suspense fallback={<ComponentFallback />}>
            <Project />
          </Suspense>

          <Suspense fallback={<ComponentFallback />}>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}
