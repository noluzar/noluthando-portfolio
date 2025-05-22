import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCards = ({ imageSrc, projectName, techStack }) => {
  return (
    <div className="flex justify-between items-center bg-[var(--primary-color)] p-4 rounded-lg shadow-md text-lg text-[var(--text-color)]">
      <div>
        <div className="flex items-center space-x-4">
             <img
            src={imageSrc}
            alt={projectName}
            className="rounded-full w-[15%] object-cover p-1 bg-gray-50"
          />
          <div>
            <h2 className="text-lg font-semibold">{projectName}</h2>
            <p className="font-light text-sm">{techStack}</p>
          </div>
        </div>
      </div>
      <IoIosArrowForward size={20} />
    </div>
  );
};

const SkillsCard = ({ imageSrc, skillName }) => {
  return (
    <div className="flex justify-between items-center bg-[var(--primary-color)] p-2 shadow-md rounded-md mt-2 text-lg text-[var(--text-color)]">
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
      <IoIosArrowForward size={15} />
    </div>
  );
};


export {ProjectCards, SkillsCard};
