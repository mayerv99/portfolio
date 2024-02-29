import { LampContainer } from "@/components/ui/lamp";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter";
import { motion } from "framer-motion";

export function HeroSection() {
  const words = [
    { text: "Ready" },
    { text: "to" },
    { text: "elevate" },
    { text: "your" },
    { text: "tech" },
    { text: "game?" },
    { text: "Let's" },
    { text: "make" },
    { text: "it" },
    { text: "happen", className: "text-cyan-400 font-bold" },
    { text: "!" },
  ];

  return (
    <div id="home">
      <LampContainer className="hidden sm:flex">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-larger text-transparent md:text-4xl"
        >
          <strong className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium text-transparent md:text-7xl tracking-tight">
            Full Stack Developer
          </strong>
          <TypewriterEffectSmooth words={words} />
        </motion.h1>
      </LampContainer>
    </div>
  );
}
