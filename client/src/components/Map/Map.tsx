import Robot from "../Robot";
import Zoom from "../Zoom";
import Compass from "../Compass";
import Emergency from "../Emergency";
import PointCloudViewer from "./PointCloudViewer";

type Props = {
  showCamera: boolean;
  setShowCamera: React.Dispatch<React.SetStateAction<boolean>>;
  is3DView: boolean;
  setIs3DView: React.Dispatch<React.SetStateAction<boolean>>;
};

const Map = ({
  showCamera,
  is3DView,
}: Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#ECECEC]">

      {/* Map / Camera / 3D */}

      {showCamera ? (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/camera-recording.mp4" type="video/mp4" />
        </video>
      ) : is3DView ? (
        <div className="absolute inset-0">
          <PointCloudViewer />
        </div>
      ) : (
        <img
          src="/Map/map_rotated.png"
          alt=""
          className="
            absolute
            left-1/2
            top-1/2
            h-[70%]
            sm:h-[78%]
            lg:h-[90%]
            max-w-none
            -translate-x-1/2
            -translate-y-1/2
            -rotate-[8deg]
            select-none
            pointer-events-none
          "
        />
      )}

      {!showCamera && !is3DView && <Robot />}

      {/* Zoom */}

      <div className="absolute left-3 sm:left-5 lg:left-6 bottom-4 sm:bottom-6 lg:bottom-8">
        <Zoom />
      </div>

      {/* Compass */}

      <div className="absolute right-3 sm:right-5 lg:right-6 bottom-2 sm:bottom-4 lg:bottom-6">
        <Compass />
      </div>

      {/* Emergency */}

      <div className="absolute right-3 sm:right-5 lg:right-8 bottom-20 sm:bottom-32 lg:bottom-44">
        <Emergency />
      </div>

    </div>
  );
};

export default Map;