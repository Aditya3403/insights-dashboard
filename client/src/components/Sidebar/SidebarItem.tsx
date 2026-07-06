import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  title: string;
  active?: boolean;
  mobile?: boolean;
}

const SidebarItem = ({
  icon: Icon,
  title,
  active,
  mobile = false,
}: SidebarItemProps) => {

  if (mobile) {
    return (
      <motion.button
        whileHover={{ x: 5 }}
        className={`w-full flex items-center gap-4 rounded-xl px-4 py-3 transition ${
          active
            ? "bg-[#1B2430] text-white"
            : "text-[#9CA3AF] hover:bg-[#1B2430] hover:text-white"
        }`}
      >
        <Icon size={22} />
        <span>{title}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition ${
        active
          ? "text-white shadow-lg"
          : "text-[#9CA3AF] hover:text-white"
      }`}
    >
      <Icon size={22} />

      <span className="absolute left-20 opacity-0 group-hover:opacity-100 whitespace-nowrap text-xs">
        {title}
      </span>
    </motion.button>
  );
};

export default SidebarItem;