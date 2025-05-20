import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCards = ({ imageSrc, projectName, techStack }) => {
  return (
    <div className="flex justify-between items-center bg-[var(--primary-color)] p-2 rounded-md mt-2 text-lg">
      <div className="p-3 max-w-md mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src={imageSrc}
            alt={projectName}
            className="rounded-full w-[15%] object-cover"
          />
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">{projectName}</h2>
            <p className="">{techStack}</p>
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
      <div className="p-3 max-w-md mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src={imageSrc}
            alt={skillName}
            className="rounded-full w-[15%] object-cover"
          />
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">{skillName}</h2>
          </div>
        </div>
      </div>
      <IoIosArrowForward size={25} />
    </div>
  );
};


export {ProjectCards, SkillsCard};
