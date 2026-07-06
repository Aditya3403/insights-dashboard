import type { IconType } from "react-icons";
import { CiLocationOn } from "react-icons/ci";
import { FiMap } from "react-icons/fi";

import { IoGrid } from "react-icons/io5";
import { LuCrosshair } from "react-icons/lu";
import { MdShowChart } from "react-icons/md";
import { PiBoundingBoxThin } from "react-icons/pi";

export interface SidebarData {
  id: number;
  title: string;
  icon: IconType;
  active?: boolean;
}

const sidebarData: SidebarData[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: IoGrid,
    active: true,
  },
  {
    id: 2,
    title: "Map",
    icon: FiMap,
  },
  {
    id: 3,
    title: "Location",
    icon: CiLocationOn,
  },
  {
    id: 4,
    title: "Box",
    icon: PiBoundingBoxThin,
  },
  {
    id: 5,
    title: "Crosshair",
    icon: LuCrosshair,
  },
  {
    id: 6,
    title: "Chart",
    icon: MdShowChart,
  },

];

export default sidebarData;