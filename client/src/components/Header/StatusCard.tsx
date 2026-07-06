import { FiPause } from "react-icons/fi";
import { motion } from "framer-motion";

const StatusCard = () => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-full shadow-lg h-12 sm:h-14 px-4 sm:px-5 flex items-center justify-between w-[135px] sm:w-[220px] lg:min-w-[270px]"
    >
      <div className="flex items-center gap-2 sm:gap-4">

        <span className="text-[8px] sm:text-[12px] text-gray-400">
          Status
        </span>

        <span className="text-[8px] sm:text-xs lg:text-sm font-semibold text-gray-800">
          On Mission 1234
        </span>

      </div>

      <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1B2430] text-white flex items-center justify-center">
        <FiPause size={14} />
      </button>

    </motion.div>
  );
};

export default StatusCard;