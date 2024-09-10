import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";

export default function Chair(props) {
  const { nodes, materials } = useGLTF("/Chair.glb");

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
