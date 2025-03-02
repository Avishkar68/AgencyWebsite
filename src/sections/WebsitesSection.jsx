import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image1,
  image2,
  image3,
  image4,
  source_code_link,
}) => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="rounded-lg"
    >

        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <img
            src={images[currentImageIndex]}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-all duration-500"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
          >
            ▶
          </button>

          {/* GitHub Icon */}
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={"https://i.ibb.co/KGBzX2v/github.png"}
                alt="source code"
                className="w-[30px] object-contain bg-black rounded-full"
              />
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default ProjectCard;
