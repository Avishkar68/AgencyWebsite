import RotatingText from "../components/ui/RotatingText";

const HomePage = () => {
  return (
    <div className="min-h-screen mt-40">
      <div className=" flex flex-col gap-4 ">
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
    </div>
  );
};

export default HomePage;
