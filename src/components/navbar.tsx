import { motion } from "framer-motion";

export function NavBar() {
  return (
    //? Needs background Blur??
    <div className="w-full  sm:flex hidden justify-between px-44  text-slate-300  align-middle p-2 fixed top-0 z-50 bg-slate-950 bg-opacity-50 backdrop-blur-lg h-fit">
      <h2 className="my-auto relative text-lg">
        Victor Aragão 🧑🏽‍💻{" "}
        <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
          <svg width="74" height="16" viewBox="0 0 37 8" fill="none">
            <motion.path
              d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794C100 3.7794 110 3.7794 119 3.7794"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                strokeDasharray: 84.20591735839844,
                strokeDashoffset: 84.20591735839844,
              }}
              animate={{
                strokeDashoffset: 0,
              }}
              transition={{
                duration: 1,
              }}
            />
          </svg>
        </motion.div>
      </h2>

      <div className="flex gap-5">
        <button
          onClick={() => console.log("ae carai")}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Contact me
        </button>
      </div>
    </div>
  );
}
