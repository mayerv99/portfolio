import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  function scrollTo(divId: string) {
    const element = document.getElementById(divId);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `flex w-2/3 fixed top-10 inset-x-0 mx-auto  border-transparent justify-between 
          dark:border-white/[0.2] rounded-md dark:bg-black bg-slate-950 
          bg-opacity-30 backdrop-blur-xl 
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
          z-[5000] pr-2 pl-8 py-2  items-center space-x-4`,
          className
        )}
      >
        <div>
          <h2 className="my-auto relative text-lg">Victor Aragão 🧑🏽‍💻 </h2>
        </div>
        <div className="flex gap-3 justify-center m-0">
          {navItems.map(
            (
              navItem: { name: string; link: string; icon?: JSX.Element },
              idx: number
            ) => (
              <span
                className="cursor-pointer hover:text-slate-400 mx-10"
                key={idx}
                onClick={() => scrollTo(navItem.link)}
              >
                {navItem.name}
              </span>
            )
          )}
        </div>
        <button
          onClick={() =>
            (window.location.href =
              "mailto:mayerv99@gmail.com?subject=I%20would%20like%20to%20get%20in%20touch%20about%20a%20project")
          }
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Contact me
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
