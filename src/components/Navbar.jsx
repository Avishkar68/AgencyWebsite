import { Link } from "react-router-dom";
import logoak from "../assets/logoak.png";

const Navbar = () => {
  return (
    <div className="font-basicfont h-[80px] flex justify-between px-4 py-2">
      <div className="flex items-center justify-center">
        <img src={logoak} className="w-[40px]" />
      </div>
      <div className="flex items-center justify-center gap-6 text-xl">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/pricing"
            className="px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 hover:cursor-pointer transition ease-in delay-50"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 hover:cursor-pointer transition ease-in delay-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
