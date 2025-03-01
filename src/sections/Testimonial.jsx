import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service was amazing! Highly recommend to anyone.",
    position: "CEO, XYZ Corp",
  },
  {
    name: "Jane Smith",
    feedback: "Very professional and high-quality work. Would use again.",
    position: "Marketing Manager, ABC Ltd.",
  },
  {
    name: "Michael Brown",
    feedback: "Exceptional experience, exceeded my expectations!",
    position: "Founder, Startup Inc.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative bg-white shadow-lg rounded-2xl p-6 w-80 md:w-96 text-center">
        <p className="text-gray-600 italic">"{testimonials[index].feedback}"</p>
        <h3 className="mt-4 font-semibold text-lg">{testimonials[index].name}</h3>
        <p className="text-sm text-gray-500">{testimonials[index].position}</p>

        <div className="absolute top-1/2 -left-5 transform -translate-y-1/2">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
          <button
            onClick={nextTestimonial}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
