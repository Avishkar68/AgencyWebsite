import RotatingText from "../components/ui/RotatingText";
import PhotoSection from "../sections/PhotoSection";
import ReelsSection from "../sections/ReelsSection";
import Testimonial from "../sections/Testimonial";
import ThumbnailSection from "../sections/ThumbnailSection";
import YoutubeCarousel from "../sections/YoutubeCorousel";
import ProjectCard from "../sections/WebsitesSection";
import projects from "../data/project.js"
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>

<div className="relative flex flex-col items-center justify-center min-h-[600px] bg-gray-100 px-6 text-center">
      
      {/* Main Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 font-basicfont"
      >
        Hey there! 
      </motion.h1>
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl font-medium"
      >
         <span className="font-bold "></span>We turn{" "}
        <span className=" font-bold">pixels into magic</span>,{" "}
        <span className="font-bold">words into impact</span>, and{" "}
        <span className=" font-bold">ideas into unforgettable brands</span>. 
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl font-medium"
      >
        If you're looking for something <span className="italic font-bold">ordinary</span>...
        you're in the wrong place.
        <br />
        <br />
        But if you want{" "}
        <span className=" font-bold">scroll-stopping</span>,{" "}
        <span className=" font-bold">jaw-dropping</span>,{" "}
        <span className="font-bold">mind-blowing</span> creative services,
        buckle up! 
      </motion.p>

      {/* CTA Button */}
      
    </div>
    <ReelsSection/>
    <ThumbnailSection />
    <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold text-primarytext ">Our Clicks</div>
    <PhotoSection />
    <YoutubeCarousel/>
    <div className="mt-40">

      <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold text-primarytext ">
        Websites we build
      </div>
      <div className="min-h-[80vh] w-[90vw] mx-auto p-[3vw] flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
      </div>

    <Testimonial/>
    </div>
  );
};

export default HomePage;
