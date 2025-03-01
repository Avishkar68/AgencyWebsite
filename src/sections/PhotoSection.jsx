import React from "react";
import CircularGallery from "../components/ui/CircularGallery ";

const PhotoSection = () => {
  return (

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
  );
};

export default PhotoSection;
