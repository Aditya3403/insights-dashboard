import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

const Zoom = () => {
  const [zoom, setZoom] = useState(100);

  const increase = () => {
    if (zoom < 200) setZoom((z) => z + 10);
  };

  const decrease = () => {
    if (zoom > 50) setZoom((z) => z - 10);
  };

  return (
    <div className="bg-gray-300/60 py-2 rounded-2xl shadow-xl w-6 sm:w-7 backdrop-blur-sm flex flex-col items-center gap-2 backdrop-blur-sm">

      <button
        onClick={increase}
        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full text-white bg-[#1B2430] flex items-center justify-center transition"
      >
        <FiPlus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
      </button>

      <div className="w-1 h-20 sm:h-24 lg:h-27 rounded-full bg-[#1B2430] relative overflow-hidden">

        <div
          className="absolute bottom-0 left-0 w-full bg-[#1B2430] rounded-full transition-all"
          style={{
            height: `${zoom / 2}%`,
          }}
        />

      </div>

      <button
        onClick={decrease}
        className="w-5 h-5 rounded-full text-white bg-[#1B2430] flex items-center justify-center transition"
      >
        <FiMinus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
      </button>

    </div>
  );
};

export default Zoom;