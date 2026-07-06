import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import StatusCard from "./StatusCard";
import TopStats from "./TopStats";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-start px-2 sm:px-4 lg:px-6 pt-0 pb-2 gap-2">

      {/* Left */}

      <div className="flex flex-col items-start gap-1 sm:gap-3 mt-2 sm:mt-3 shrink-0">

        <StatusCard />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="h-10 sm:h-12 px-3 sm:px-4 rounded-full bg-white shadow-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">

            <span className="text-[11px] sm:text-[13px] uppercase">
              Quick Goal
            </span>

            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1B2430] text-white flex items-center justify-center">
              <FaArrowRight size={12} />
            </div>

          </div>
        </motion.button>

      </div>

      {/* Center */}

      <div className="flex-1 flex justify-center min-w-0">
        <TopStats />
      </div>

      {/* Right */}

      <div className="flex flex-col items-end gap-1 sm:gap-3 mt-2 sm:mt-3 shrink-0">

        <ModeToggle />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="h-10 sm:h-12 px-3 sm:px-4 rounded-full bg-white shadow-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-2 sm:gap-3">

            <span className="text-[11px] sm:text-[13px] uppercase">
              Initiate
            </span>

            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1B2430] text-white flex items-center justify-center">
              <FaArrowRight size={12} />
            </div>

          </div>
        </motion.button>

      </div>

    </header>
  );
};

export default Header;