import { AnimatedTooltip } from "./animated-tooltip";
import { Meteors } from "./meteors";

import starIcon from "@/assets/star.svg";

type CardProps = {
  item: ItemType;
};

type ItemType = {
  id: number;
  link: string;
  title: string;
  skills: string[];
  icon: string;
  isFavorite?: boolean;
};

export const MeteorCard = ({ item }: CardProps) => {
  const tooltip = [
    {
      id: 1,
      name: "Favorite",
      designation: "Highest Proficiency",
      image: starIcon,
      size: "md",
    },
  ];

  return (
    <div className=" h-[45rem] w-1/3 align-top">
      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {item.icon && (
            <div className="h-5 w-5 rounded-full  flex items-center justify-center mb-4 ">
              <img src={item.icon} />
            </div>
          )}

          {item.isFavorite ? (
            <h1 className="font-bold text-xl flex align-middle text-white mb-4 relative z-50 gap-5 leading-6">
              {item.title}
              {item.isFavorite && <AnimatedTooltip items={tooltip} />}
            </h1>
          ) : (
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {item.title}
            </h1>
          )}

          <p className="font-normal text-left text-base ml-4 text-slate-500 relative z-50 mb-auto">
            <ul className="list-disc">
              {item.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </p>

          {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button> */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={10} />
        </div>
      </div>
    </div>
  );
};
