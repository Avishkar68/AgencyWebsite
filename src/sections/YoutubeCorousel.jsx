// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const videos = [
//   "https://www.youtube.com/embed/dQw4w9WgXcQ",
//   "https://www.youtube.com/embed/3JZ_D3ELwOQ",
//   "https://www.youtube.com/embed/tgbNymZ7vqY"
// ];

// const VideoCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     centerMode: true,
//     centerPadding: "0px",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           arrows: true,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto text-center py-10 mt-40  relative ">
//       <h2 className="text-3xl font-semibold mb-6">Youtube Videos</h2>
//       <Slider {...settings} className="relative ">
//         {videos.map((video, index) => (
//           <div key={index} className="flex justify-center items-center w-full">
//             <iframe
//               className="mx-auto md:w-full md:max-w-3xl h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 "
//               src={video}
//               title={`YouTube Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VideoCarousel;