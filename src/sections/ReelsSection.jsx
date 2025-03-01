import React from "react";
import Stack from "../components/ui/Stack";
import chodudharyfinalll from "../assets/chodudharyfinalll.mp4";

const ReelsSection = () => {
  const images = [
    {
      id: 1,
      img: chodudharyfinalll,
    },
    {
      id: 2,
      img: chodudharyfinalll,
    },
    {
      id: 3,
      img: chodudharyfinalll,
    },
    {
      id: 4,
      img: chodudharyfinalll,
    },
  ];
  return (
    <div className="w-screen min-h-screen border md:px-36">
      <div className="border w-screen md:w-full  h-screen">
        <div className="w-full border">Short Form Content</div>
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around ">
          <div className="">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={false}
              cardDimensions={{ width: 270, height: 480 }}
              cardsData={images}
            />
            <div className="border h-[50px] rounded-lg mt-4">dajb</div>
          </div>
          <div className="border">text</div>
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
