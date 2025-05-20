import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCards = ({ imageSrc, projectName, techStack }) => {
  return (
    <div className="flex justify-between items-center bg-[var(--primary-color)] p-2 rounded-md mt-2 text-lg text-[var(--text-color)]">
      <div className="p-2 max-w-md mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src={imageSrc}
            alt={projectName}
            className="rounded-full w-[15%] object-cover"
          />
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">{projectName}</h2>
            <p className="font-light text-sm">{techStack}</p>
          </div>
        </div>
      </div>
      <IoIosArrowForward size={25} />
    </div>
  );
};

const SkillsCard = ({ imageSrc, skillName }) => {
  return (
    <div className="flex justify-between items-center bg-[var(--primary-color)] p-2 rounded-md mt-2 text-lg">
      <div className="p-1 max-w-[55%]">
        <div className="flex items-center space-x-8">
          <img
            src={imageSrc}
            alt={skillName}
            className="rounded-full w-[15%] object-cover p-1 bg-gray-50"
          />
          <div className="space-y-1">
            <h2 className="text-xl">{skillName}</h2>
          </div>
        </div>
      </div>
      <IoIosArrowForward size={25} />
    </div>
  );
};


export {ProjectCards, SkillsCard};
