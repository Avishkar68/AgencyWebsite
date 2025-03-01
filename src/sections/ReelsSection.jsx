import React, { useState } from "react";
import Stack from "../components/ui/Stack";
import chodudharyfinalll from "../assets/chodudharyfinalll.mp4";
import free from "../assets/free.mp4";
import Mumbai from "../assets/Mumbai.mp4";
import laptopFinal from "../assets/laptopvalafinallll.mp4";
import { GrLike } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const ReelsSection = () => {
  const reels = [
    {
      id: 1,
      img: chodudharyfinalll,
      title: "Capturing the beauty of rajasthan",
      description: "A glimpse of days spent well in rajanthan ",
      software: "DaVinci Resolve",
      engagement: { views: "2K", likes: "74", engagementRate: "10%" },
    },
    {
      id: 2,
      img: free,
      title: "The urge to leave everything behind...",
      description: "This portrays the urge to leave. ",
      software: "DaVinci Resolve",
      engagement: { views: "355", likes: "16", engagementRate: "11%" },
    },
    {
      id: 3,
      img: laptopFinal,
      title: "The transition we all need ",
      description: "Showcasing the transition from work life to peace.",
      software: "Premere pro ,DaVinci Resolve ",
      engagement: { views: "980", likes: "51", engagementRate: "13%" },
    },
    {
      id: 4,
      img: Mumbai,
      title: "Life of Mumbaikars",
      description: "Portrays the strange but fun life of mumbai",
      software: "DaVinci Resolve , Premere pro",
      engagement: { views: "314", likes: "12", engagementRate: "9%" },
    },
  ];

  const [activeReel, setActiveReel] = useState(reels[reels.length - 1]); // Last reel is initially top
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleActiveReelChange = (topReelId) => {
    const newActiveReel = reels.find((reel) => reel.id === topReelId);
    if (newActiveReel) setActiveReel(newActiveReel);
  };

  return (
    <div className="w-screen min-h-screen md:px-36">
      <div className=" w-screen md:w-full h-screen">
        <div className="w-full text-3xl font-semibold py-2 font-heading">
          Short Form Content
        </div>
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around">
          <div>
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 270, height: 480 }}
              cardsData={reels}
              onActiveCardChange={handleActiveReelChange} // Update active reel
              isPlaying={isPlaying} // Pass state to control playback
              isMuted={isMuted} // Pass mute state
            />
            <div className=" h-[50px] rounded-lg mt-4 flex items-center justify-center space-x-4">
              <button
                className="px-4 py-1 border  text-white rounded-lg"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="px-4 py-1 border text-white rounded-lg"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
          <div className="font-basicfont p-4 w-lg ">
            <h2 className="text-2xl font-bold">{activeReel.title}</h2>
            <p className="text-xl text-gray-200">{activeReel.description}</p>

            <span className="flex items-center gap-2">
            <HiOutlineDesktopComputer className="text-gray-400" />
            <p className="text-xl text-gray-400">{activeReel.software}</p>
            </span>

            {/* <p className="text-xl text-gray-600">{activeReel.engagement.engagementRate}</p> */}
            <span className="flex items-center gap-2">
              <FaRegEye className="text-gray-400"/>
              <p className="text-xl text-gray-400">
                {activeReel.engagement.views}
              </p>
            </span>

            <span className="flex items-center gap-2">
              <GrLike className="text-gray-400" />
              <p className="text-xl text-gray-400">
                {activeReel.engagement.likes}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
