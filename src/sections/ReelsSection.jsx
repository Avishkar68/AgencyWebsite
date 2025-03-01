import React, { useState } from "react";
import Stack from "../components/ui/Stack";
import chodudharyfinalll from "../assets/chodudharyfinalll.mp4";
import free from "../assets/free.mp4"
import Mumbai from "../assets/Mumbai.mp4"
import laptopFinal from "../assets/laptopvalafinallll.mp4"
const ReelsSection = () => {
  const reels = [
    {
      id: 1,
      img: chodudharyfinalll,
      title: "Reel 1",
      description: "This is an engaging reel about design.",
      software: "Adobe Premiere Pro",
      engagement: { views: "12K", likes: "1.2K", engagementRate: "10%" },
    },
    {
      id: 2,
      img: free,
      title: "Reel 2",
      description: "A creative animation using After Effects.",
      software: "After Effects",
      engagement: { views: "8.5K", likes: "900", engagementRate: "11%" },
    },
    {
      id: 3,
      img: laptopFinal,
      title: "Reel 3",
      description: "Showcasing UI/UX transitions.",
      software: "Figma & After Effects",
      engagement: { views: "15K", likes: "2K", engagementRate: "13%" },
    },
    {
      id: 4,
      img: Mumbai,
      title: "Reel 4",
      description: "Motion graphics with smooth transitions.",
      software: "DaVinci Resolve",
      engagement: { views: "7K", likes: "700", engagementRate: "9%" },
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
    <div className="w-screen min-h-screen border md:px-36">
      <div className="border w-screen md:w-full h-screen">
        <div className="w-full border text-3xl font-semibold py-2 font-heading">
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
            <div className="border h-[50px] rounded-lg mt-4 flex items-center justify-center space-x-4">
              <button
                className="px-4 py-1 bg-blue-500 text-white rounded-lg"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="px-4 py-1 bg-gray-700 text-white rounded-lg"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
          <div className="border p-4 w-72">
            <h2 className="text-xl font-bold">{activeReel.title}</h2>
            <p className="text-sm text-gray-600">{activeReel.description}</p>
            <p className="text-sm text-gray-600">{activeReel.software}</p>
            <p className="text-sm text-gray-600">{activeReel.engagement.engagementRate}</p>
            <p className="text-sm text-gray-600">{activeReel.engagement.views}</p>
            <p className="text-sm text-gray-600">{activeReel.engagement.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
