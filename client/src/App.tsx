import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Camera from "./components/Camera";

function App() {
  const [showCamera, setShowCamera] = useState(false);
  const [is3DView, setIs3DView] = useState(false);

  return (
    <div className="flex h-dvh overflow-hidden bg-[#F4F5F7]">

      <Sidebar />

      <main className="relative flex-1 overflow-hidden">

        <Map
          showCamera={showCamera}
          setShowCamera={setShowCamera}
          is3DView={is3DView}
          setIs3DView={setIs3DView}
        />

        <div className="absolute inset-0 z-20 flex flex-col">

          <Header />

          {!showCamera && (
            <div className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-30">
              <button
                onClick={() => setIs3DView(!is3DView)}
                className="
                  bg-[#2B3645]
                  text-white
                  rounded-xl
                  transition
                  hover:bg-[#1B2430]
                  px-4 py-2
                  text-sm
                  sm:px-6 sm:py-2
                  sm:text-base
                "
              >
                {is3DView ? "2D View" : "3D View"}
              </button>
            </div>
          )}

          <div className="relative flex-1">
            <Camera
              showCamera={showCamera}
              onOpen={() => setShowCamera(!showCamera)}
            />
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;