import Chair from "./components/Chair";
import {
  Scroll,
  ScrollControls,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        className="font-poppins bg-slate-300 h-screen"
        camera={{ fov: 72, position: [2.3, 2.5, 2.3] }}
      >
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
        <ambientLight intensity={1} />
        <spotLight
          position={[0, 25, 0]}
          angle={1.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <Environment preset="studio" />
        <ScrollControls pages={4} damping={0.1}>
          <Scroll>
            {/* Model HERE */}
            <Chair></Chair>
          </Scroll>
          <Scroll html>
            {/* Content HERE  */}
            {/* NavBar  */}
            <div className="NavBar flex justify-around items-center  font-semibold p-5 absolute top-0 left-0 right-0">
              <div>
                <h1 className="text-xl font-bold cursor-pointer">
                  A.K. Enterprises
                </h1>
              </div>
              <div className="flex justify-center items-center gap-6 text-gray-600 text-lg">
                <h4 className="cursor-pointer">About</h4>
                <h4 className="cursor-pointer">Services</h4>
                <h4 className="cursor-pointer">Careers</h4>
              </div>
              <div>
                <button
                  type="button"
                  class="text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className=" flex justify-center items-center h-screen flex-col m-auto">
                <h1 className="text-9xl font-bold">
                  Empowering Your Brand Growth.
                </h1>
                <p className="text-lg font-bold">
                  Providing High-Impact Services For Your Business
                </p>
                <div className="flex justify-center items-center text-gray-600 text-lg">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <a href="/Gallery">Gallery</a>
                  </button>
                  <button
                    type="button"
                    className=" border-2 border-blue-700 text-blue-700 bg-white hover:bg-blue-600 hover:text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2"
                  >
                    <a href="/Brochure">Brochure</a>
                  </button>
                </div>
              </div>
              {/* 2 */}
              <div className="flex justify-center items-center h-screen flex-col max-w-[1240px] m-auto gap-4">
                <h1 className="top-[200vh] text-7xl font-bold">
                  Why Choose Us ?
                </h1>

                <div className="flex justify-center items-center ">
                  <div className="grid grid-cols-2 gap-4">{/* Grids  */}</div>
                  <div className="">{/* Image */}</div>
                </div>
              </div>
              {/* 3 */}
              <div className="h-screen flex justify-center items-center flex-col">
                <h1 className="top-[200vh] text-6xl font-bold">
                  Inspiration Collection
                </h1>
              </div>
              <div className="h-screen flex justify-center items-center flex-col">
                <h1 className="top-[200vh] text-6xl font-bold">
                  New In Store Now
                </h1>
                {/* <Cards></Cards> */}
              </div>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
