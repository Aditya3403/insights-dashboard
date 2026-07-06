import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import SidebarItem from "./SidebarItem";
import sidebarData from "./sidebarData";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-3 left-3 z-50 w-11 h-11 rounded-xl bg-[#06131F] text-white flex items-center justify-center shadow-lg"
      >
        <HiOutlineMenu size={22} />
      </button>

      {/* Desktop Sidebar */}

      <aside className="hidden lg:flex w-20 h-screen bg-[#06131F] flex-col items-center justify-between py-8 shadow-xl">

        <div className="flex flex-col items-center">

          <div className="w-16 h-16 mb-10">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-3">
            {sidebarData.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                active={item.active}
              />
            ))}
          </div>

        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#9CA3AF] hover:bg-red-500 hover:text-white"
        >
          <CiUser size={22} />
        </motion.button>

      </aside>

      {/* Mobile Sidebar */}

      <AnimatePresence>

        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: .5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: .25 }}
              className="fixed left-0 top-0 h-screen w-64 bg-[#06131F] z-50 flex flex-col justify-between py-6 px-5 lg:hidden"
            >

              <div>

                <div className="flex items-center justify-between mb-8">

                  <img
                    src={logo}
                    alt=""
                    className="w-24 object-contain"
                  />

                  <button
                    onClick={() => setOpen(false)}
                    className="text-white"
                  >
                    <HiOutlineX size={24} />
                  </button>

                </div>

                <div className="space-y-2">

                  {sidebarData.map((item) => (
                    <SidebarItem
                      key={item.id}
                      icon={item.icon}
                      title={item.title}
                      active={item.active}
                      mobile
                    />
                  ))}

                </div>

              </div>

              <button className="flex items-center gap-3 text-[#9CA3AF]">
                <CiUser size={22} />
                Profile
              </button>

            </motion.aside>
          </>
        )}

      </AnimatePresence>
    </>
  );
};

export default Sidebar;