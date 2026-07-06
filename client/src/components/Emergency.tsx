import { motion } from "framer-motion";
import { FaArrowsSpin } from "react-icons/fa6";

const Emergency = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(255,0,0,.2)",
          "0 0 25px rgba(255,0,0,.6)",
          "0 0 0px rgba(255,0,0,.2)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="relative w-18 h-18 sm:w-22 sm:h-22 lg:w-28 lg:h-28 rounded-full bg-yellow-400 flex items-center justify-center shadow-2xl"
    >
      <div className="absolute w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-red-600 border-4 border-white flex items-center justify-center">

        <FaArrowsSpin
          size={28}
          className="text-white"
        />

      </div>

    </motion.button>
  );
};

export default Emergency;