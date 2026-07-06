import { FaSignal } from "react-icons/fa";
import { HiBattery100 } from "react-icons/hi2";

const TopStats = () => {
  return (
    <div className="bg-[#1B2430] rounded-b-xl shadow-lg px-2 sm:px-5 lg:px-10 py-2 sm:py-4 mb-2 sm:mb-5 flex items-center gap-2 sm:gap-5 lg:gap-8 text-white overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">

      <div className="flex items-center gap-2 text-[11px] sm:text-[13px]">
        <span className="font-semibold">100%</span>
        <HiBattery100 className="text-green-400" size={18} />
      </div>

      <div className="flex items-center gap-2 text-[11px] sm:text-[13px]">
        <FaSignal className="text-gray-300" size={14} />
        <span className="text-gray-300">Strong</span>
      </div>

      <div className="hidden md:flex items-center gap-2 text-[13px]">
        <span className="text-gray-300">
          Failsafe <span className="text-white font-bold">Okay</span>
        </span>
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
      </div>

      <div className="hidden md:flex items-center gap-2 text-[13px]">
        <span className="text-gray-300">
          System <span className="text-white font-bold">Okay</span>
        </span>
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
      </div>

    </div>
  );
};

export default TopStats;