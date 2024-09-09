import { Canvas } from "@react-three/fiber";
import Chair from "./components/Chair";
import {
  Scroll,
  ScrollControls,
  Environment,
  OrbitControls,
} from "@react-three/drei";
// import Cards from "./components/Cards";
// import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Canvas
        className="font-poppins bg-slate-300"
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
            <div className="text-center">
              <div className=" flex justify-center items-center h-screen flex-col m-10">
                <h1 className="text-9xl font-bold">
                  Empowering Your Brand Growth.
                </h1>
                <p className="text-lg font-bold">
                  Providing High-Impact Services For Your Business
                </p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <a href="https://dreamhomestore.co.uk/">Get In Touch</a>
                </button>
              </div>
              {/* 2 */}
              <div className="flex justify-center items-center h-screen flex-col">
                <h1 className="top-[100vh] text-6xl font-bold">About Us</h1>
                {/* <Cards></Cards> */}
              </div>
              {/* 3 */}
              <div className="h-screen flex justify-center items-center flex-col">
                <h1 className="top-[200vh] text-6xl font-bold">Why Us ?</h1>
                {/* <Cards></Cards> */}
              </div>
              <div className="h-screen flex justify-center items-center flex-col">
                <h1 className="top-[200vh] text-6xl font-bold">Services</h1>
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
