import { NavBar } from "./components/navbar";
import { LampContainer } from "./components/ui/lamp";
import { motion } from "framer-motion";

export function App() {
  return (
    <>
      <NavBar />
      {/* Change this to a Hero section to better responsiveness */}
      <LampContainer className="hidden sm:flex">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Victor Aragão <br />{" "}
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium text-transparent md:text-6xl tracking-wider">
            Full Stack Developer
          </h1>
        </motion.h1>

        {/* <TextGenerateEffect
          className="w-56 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl"
          words="With expertise in ReactJS, React Native, Node.js, and TypeScript, I bring a laser focus on frontend finesse and scalability. Let's team up to create stellar projects that captivate users and exceed expectations. Ready to elevate your tech game? Let's make it happen together!"
        /> */}
      </LampContainer>
      Carlos
    </>
  );
}
