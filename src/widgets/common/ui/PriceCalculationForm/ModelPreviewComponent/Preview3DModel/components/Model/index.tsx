'use client';
import React, { useEffect } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type ModulePropsType = {
  url: string;
};
type ThreeContext = {
  camera: THREE.PerspectiveCamera;
};
export const Model: React.FC<ModulePropsType> = ({ url }) => {
  const geometry = useLoader(STLLoader, url);
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { camera } = useThree() as unknown as ThreeContext;

  useEffect(() => {
    if (meshRef.current) {
      const box = new THREE.Box3().setFromObject(meshRef.current);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      box.getCenter(center);
      box.getSize(size);

      meshRef.current.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

      camera.position.set(cameraZ, cameraZ, cameraZ); // изометрический угол
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [geometry, camera]);
  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
    </mesh>
  );
};
