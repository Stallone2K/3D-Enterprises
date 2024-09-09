import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import gsap from "gsap";

export default function Chair(props) {
  const { nodes, materials } = useGLTF("/Chair.glb");
  // const ref = useRef();
  // const tl = useRef();

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   //tl Animation:
  //   tl.current.to(ref.current.position, {
  //     duration: 2,
  //     y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
  //   });
  // }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HUG_ARMCHAIRHUG_Armchair_602_014.geometry}
        material={materials.Base}
        position={[0, 0, 0]}
        scale={2.5}
      />
    </group>
  );
}

useGLTF.preload("/Chair.glb");
