import React from "react";
import reactImage from "../assets/React.png";

import nodeImage from "../assets/NODE.png";

import expressImage from "../assets/NODE.png";

import mongodbIMAGE from "../assets/MONGODB.png";
import vueImage from "../assets/VUE.png";
const skills = [
  {
    name: "React.js",
    image: reactImage,
  },
  {
    name: "Node.js",
    image: nodeImage,
  },
  {
    name: "Express.js",
    image: expressImage,
  },
  {
    name: "MongoDB",
    image: mongodbIMAGE,
  },
  {
    name: "Vue",
    image: vueImage,
  },
];

const SkillCards = () => {
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 p-4'>
      {skills.map((skill, index) => (
        <div
          key={index}
          className='block w-full max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 hover:translate-y-7'
        >
          <img
            src={skill.image}
            alt={skill.name}
            className='h-20 w-20 object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center'>
            <h3 className='text-xl font-bold text-black'>{skill.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
