import RotatingText from "../components/ui/RotatingText";
import PhotoSection from "../sections/PhotoSection";
import ReelsSection from "../sections/ReelsSection";
import Testimonial from "../sections/Testimonial";
import ThumbnailSection from "../sections/ThumbnailSection";
import YoutubeCarousel from "../sections/YoutubeCorousel";

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
    <div className="w-screen flex items-center justify-center text-[36px] md:text-[64px] font-bold ">Youtube Thumbnails</div>
    <PhotoSection />
    <YoutubeCarousel/>
    <Testimonial/>
    </div>
  );
};

export default HomePage;
