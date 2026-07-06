import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PointCloud from "./PointCloud";

const PointCloudViewer = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{
        position: [0, 15, 25],
        fov: 60,
      }}
    >
      <ambientLight intensity={3} />

      <pointLight position={[20, 20, 20]} />

      <PointCloud />

      <OrbitControls
        makeDefault
        enablePan
        enableZoom
        enableRotate
      />
    </Canvas>
  );
};

export default PointCloudViewer;