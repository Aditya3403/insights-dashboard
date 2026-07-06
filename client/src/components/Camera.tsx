type Props = {
  onOpen: () => void;
  showCamera: boolean;
};

const Camera = ({
  onOpen,
  showCamera,
}: Props) => {
  return (
    <div
      onClick={onOpen}
      className="
        group
        absolute
        left-3
        sm:left-15
        lg:left-15
        bottom-3
        sm:bottom-8
        lg:bottom-8
        w-[130px]
        h-[75px]
        sm:w-[220px]
        sm:h-[125px]
        md:w-[260px]
        md:h-[145px]
        lg:w-[320px]
        lg:h-[180px]
        rounded-lg
        overflow-hidden
        shadow-2xl
        cursor-pointer
        z-30
        "
    >
      {!showCamera ? (
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source
            src="/camera-recording.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#ECECEC]">
          <img
            src="/Map/map_rotated.png"
            alt=""
            className="object-contain -rotate-[8deg] scale-[0.40]"
          />
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <span className="px-2 sm:px-4 py-1 sm:py-2 rounded-md bg-[#1B2430] text-white text-[10px] sm:text-xs lg:text-sm font-semibold shadow-lg">
          Click to enter camera view
        </span>
      </div>
    </div>
  );
};

export default Camera;