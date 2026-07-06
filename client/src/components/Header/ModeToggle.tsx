import { useState } from "react";
import { motion } from "framer-motion";

type Mode = "AUTO" | "MANUAL";

const ModeToggle = () => {
  const [mode, setMode] = useState<Mode>("AUTO");

  return (
    <div className="flex items-center bg-white rounded-full shadow-lg px-2 py-1 h-10 sm:h-12 lg:h-14 w-[140px] sm:w-[210px] lg:w-[270px]">

      <div className="w-12 sm:w-16 flex justify-center">
        <span className="text-[8px] sm:text-[13px] font-bold text-[#4B5563] self-center">
          MODE
        </span>
      </div>

      <div className="relative flex-1 h-8 sm:h-10 rounded-full bg-[#E5E7EB] overflow-hidden">

        <motion.div
          animate={{
            x: mode === "AUTO" ? "0%" : "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
          }}
          className="absolute top-0 left-0 w-1/2 h-full rounded-full bg-[#1B2430]"
        />

        <div className="relative z-10 flex h-full">

          <button
            onClick={() => setMode("AUTO")}
            className="flex-1 text-[9px] sm:text-[13px] font-semibold"
          >
            <span className={mode === "AUTO" ? "text-white" : "text-[#4B5563]"}>
              AUTO
            </span>
          </button>

          <button
            onClick={() => setMode("MANUAL")}
            className="flex-1 text-[9px] sm:text-[13px] font-semibold"
          >
            <span className={mode === "MANUAL" ? "text-white" : "text-[#4B5563]"}>
              MANUAL
            </span>
          </button>

        </div>

      </div>

    </div>
  );
};

export default ModeToggle;