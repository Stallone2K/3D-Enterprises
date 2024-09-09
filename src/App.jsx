import { Canvas } from "@react-three/fiber";
import Chair from "./components/Chair";
import { Scroll, ScrollControls, Environment } from "@react-three/drei";
function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.2} />
        <spotLight
          position={[0, 25, 0]}
          angle={1.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <Environment preset="studio" />

        <ScrollControls pages={3} damping={0.1}>
          <Scroll>
            <Chair></Chair>
          </Scroll>
          <Scroll html>
            {/* Content HERE  */}
            <h1 className=" text-6xl font-bold">
              Transform Your Space With Timeless Furniture
            </h1>
            <h1 className="absolute top-[100vh] text-6xl font-bold">
              Explore Our Collection
            </h1>
            <h1 className="absolute top-[200vh] text-6xl font-bold">
              Crafting Timeless Elegance
            </h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
