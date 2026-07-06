import { useLoader } from "@react-three/fiber";
import { PCDLoader } from "three-stdlib";

const PointCloud = () => {
  const cloud = useLoader(PCDLoader, "/Map/room_scan1.pcd");

  cloud.rotation.set(-Math.PI / 2, 0, 0);

  cloud.scale.setScalar(2);

  cloud.position.set(0, 0, 0);

  return <primitive object={cloud} />;
};

export default PointCloud;