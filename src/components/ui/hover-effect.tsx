import { useState } from "react";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export const HoverContainer = ({
  items,
}: {
  items: {
    id: number;
    link: string;
    title: string;
    description: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-1/3 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground" // required for the background to follow
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
            <div className="relative z-50">
              <div className="p-4">
                <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                  {item.title}
                </h4>
                <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
