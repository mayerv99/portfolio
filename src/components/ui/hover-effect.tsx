import { useState } from "react";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { AnimatedTooltip } from "./animated-tooltip";

import { ArrowCircleUpRight } from "@phosphor-icons/react";

export const HoverContainer = ({
  items,
}: {
  items: {
    id: number;
    link: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: {
      id: number;
      name: string;
      designation: string;
      image: string;
    }[];
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 min-h-56 max-h-fit w-1/2  "
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
          {/* The card itselfs */}

          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
            <div className="relative z-50">
              <div className="p-4">
                <div className="flex justify-between w-full align-bottom">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                    {item.title}
                  </h4>
                  {item.link && (
                    <div className="mt-auto cursor-pointer">
                      <ArrowCircleUpRight
                        size={24}
                        onClick={() => window.open(item.link)}
                      />
                    </div>
                  )}
                </div>
                <h5>{item.subtitle}</h5>

                <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm ">
                  {item.description}
                </p>
                <div className="flex gap-10 mt-8 w-fit max-w-full mx-auto justify-center align-center techs-wrapper">
                  {item.technologies && (
                    <AnimatedTooltip items={item.technologies} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* End of card */}
        </div>
      ))}
    </>
  );
};
