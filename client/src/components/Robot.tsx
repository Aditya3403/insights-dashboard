import { FaRobot } from "react-icons/fa";

const Robot = () => {
  return (
    <div
      className="absolute z-20"
      style={{
        left: "38%",
        top: "42%",
      }}
    >
      <FaRobot
        size={22}
        className="text-[#1B2430] drop-shadow-md w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
      />
    </div>
  );
};

export default Robot;