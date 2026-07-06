import { motion } from "framer-motion";
import {
  FiChevronUp,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Compass = () => {
  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32">

      {/* Outer Ring */}

      <div className="absolute inset-0 rounded-full bg-[#1B2430] shadow-2xl">

        <FiChevronUp
          size={14}
          className="absolute top-2 left-1/2 -translate-x-1/2 text-white opacity-80"
        />

        <FiChevronDown
          size={14}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white opacity-80"
        />

        <FiChevronLeft
          size={14}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white opacity-80"
        />

        <FiChevronRight
          size={14}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white opacity-80"
        />

      </div>

      {/* Inner Compass */}

      <div className="absolute inset-4 sm:inset-5 lg:inset-7 rounded-full bg-white flex items-center justify-center shadow-inner">

        <span className="absolute top-1 text-[8px] sm:text-[10px] lg:text-[13px] font-bold">N</span>
        <span className="absolute bottom-1 text-[8px] sm:text-[10px] lg:text-[13px] font-bold">S</span>
        <span className="absolute left-1 text-[8px] sm:text-[10px] lg:text-[13px] font-bold">W</span>
        <span className="absolute right-1 text-[8px] sm:text-[10px] lg:text-[13px] font-bold">E</span>

        <div className="absolute text-[3px] sm:text-[4px] lg:text-[5px] text-gray-400 font-semibold leading-3 text-center">
          N
          <br />
          KEY
        </div>

        <motion.div
          animate={{ rotate: 330 }}
          transition={{
            duration: 0,
          }}
          className="absolute"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 28 28"
          >
            <line
              x1="14"
              y1="14"
              x2="14"
              y2="4"
              stroke="#ef4444"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle
              cx="14"
              cy="14"
              r="3"
              fill="#1B2430"
            />
          </svg>
        </motion.div>

      </div>

    </div>
  );
};

export default Compass;