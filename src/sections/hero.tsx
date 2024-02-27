import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
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
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium text-transparent md:text-7xl tracking-tight">
          Full Stack Developer
        </h1>{" "}
        <br />
        Ready to elevate your tech game? Let's make it happen{" "}
        <strong className="text-cyan-400">together</strong>! <br />{" "}
      </motion.h1>
    </LampContainer>
  );
}
