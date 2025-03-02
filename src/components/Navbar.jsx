import { Link } from "react-router-dom";
import logo from "../assets/logodark.png";

const Navbar = () => {
  return (
    <div className="font-basicfont h-[80px] flex justify-between px-4 py-2">
      <div className="flex items-center justify-center">
        <Link to="/">
        <img src={logo} className="w-[40px]" alt="Logo" />
        </Link>
       
      </div>
      <div className="flex items-center justify-center gap-6 text-xl">
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/pricing"
            className="px-3 py-1 rounded-lg font-medium text-primarytext hover:text-gray-900 hover:cursor-pointer transition ease-in delay-50"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="px-3 py-1 rounded-lg font-medium text-primarytext hover:text-gray-900 hover:cursor-pointer transition ease-in delay-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
