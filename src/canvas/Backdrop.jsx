import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={2}
        radius={10}
        intensity={2.5}
        ambient={0.5}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={2}
        radius={6}
        intensity={0.50}
        ambient={0.2}
        position={[-5, 5, -9]}
      />
      
    </AccumulativeShadows>
  )
}

export default Backdrop