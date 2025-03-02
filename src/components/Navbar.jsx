import logoak from "../assets/logoak.png";

const Navbar = () => {
  return (
    <div className="font-basicfont h-[80px] flex justify-between px-4 py-2">
      <div className=" flex items-center justify-center">
        <img src={logoak} className="w-[40px]" />
      </div>
      <div className=" flex items-center justify-center gap-6 text-xl">
        {/* <div className="flex gap-6">
          <div className="hover:cursor-pointer">Websites</div>
          <div className="hover:cursor-pointer">Images</div>
          <div className="hover:cursor-pointer">Videos</div>
          <div className="hover:cursor-pointer">Posters</div>
          <div className="hover:cursor-pointer">Wedding</div>
        </div> */}
        <div className=" flex items-center justify-center gap-4">
          <button className=" px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 hover:cursor-pointer transition ease-in delay-50">
            Pricing
          </button>
          <button className=" px-3 py-1 rounded-lg font-medium text-gray-300 hover:text-gray-200 hover:cursor-pointer transition ease-in delay-50">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
