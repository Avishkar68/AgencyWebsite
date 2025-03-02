import RotatingText from "../components/ui/RotatingText";
import PhotoSection from "../sections/PhotoSection";
import ReelsSection from "../sections/ReelsSection";
import Testimonial from "../sections/Testimonial";
import ThumbnailSection from "../sections/ThumbnailSection";
import YoutubeCarousel from "../sections/YoutubeCorousel";
import ProjectCard from "../sections/WebsitesSection";
import projects from "../data/project.js"
const HomePage = () => {
  return (
    <div>

    {/* <div className="min-h-[400px] mt-40">
      <div className="border flex flex-col gap-4 ">
        <div className="flex items-center justify-center gap-6 text-[48px] font-semibold font-basicfont">
          We do{" "}
          <RotatingText
            texts={[
              "Web Development",
              "Content Writing",
              "YouTube Video Editing",
              "Reel Editing",
              "Wedding Card Designing ",
              "Banner Designing  ",
              "Post Designing   ",
              "Visiting Card Designing ",
            ]}
            mainClassName=" text-textcolor overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <div className="font-basicfont flex items-center justify-center tracking-[1px] text-2xl font-semibold text-secondarytext">
          Professional Websites, Stunning Edits, Engaging Content – All in One
          Place!
        </div>
      </div>
    </div> */}
    <ReelsSection/>
    <ThumbnailSection />
    <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold ">Our Clicks</div>
    <PhotoSection />
    <YoutubeCarousel/>
    <div className="mt-40">

      <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold ">
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
