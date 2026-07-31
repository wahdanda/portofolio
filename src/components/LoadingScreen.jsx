import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ finish }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const duration = 5000; // 3.5 detik
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(value));

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setHide(true);

          setTimeout(() => {
            finish();
          }, 700); // animasi keluar
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [finish]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black flex flex-col justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Logo */}
          <motion.h1
            className="text-6xl font-bold text-white tracking-[10px]"
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
          >
            DH
          </motion.h1>

          <motion.p
            className="mt-3 text-gray-400 tracking-[6px] uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
          >
            Portfolio
          </motion.p>

          {/* Progress Bar */}
          <div className="w-72 h-1.25 rounded-full bg-white/10 mt-12 overflow-hidden">
            <motion.div
              className="h-full bg-emerald-400"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p
            className="mt-4 text-emerald-300 text-sm"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            Loading {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}