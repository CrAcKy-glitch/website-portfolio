import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingModelProps {
  modelPath: string;
  position: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

export default function FloatingModel({
  modelPath,
  position,
  scale,
  rotation = [0, 0, 0],
}: FloatingModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, modelRef);

  // Play all animations
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.play();
      });
    }
  }, [actions]);

  // Floating movement & smooth rotation
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        position[1] + Math.sin(clock.elapsedTime) * 0.05; // Floating effect
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={position}
      scale={scale || [0.5, 0.5, 0.5]}
      rotation={rotation}
    />
  );
}
