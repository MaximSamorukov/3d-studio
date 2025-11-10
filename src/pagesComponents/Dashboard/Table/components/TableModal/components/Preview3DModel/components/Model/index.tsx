'use client';
import React, { useEffect } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { computeVolume } from './utils';

type ModulePropsType = {
  url: string;
  setDimensions: (arg: { x: number; y: number; z: number }) => void;
  setVolume: (arg: { volume: string }) => void;
};
type ThreeContext = {
  camera: THREE.PerspectiveCamera;
};
export const Model: React.FC<ModulePropsType> = ({
  url,
  setDimensions,
  setVolume,
}) => {
  const geometry = useLoader(STLLoader, url); //'/models/Celtic_Dragon.stl');
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { camera } = useThree() as unknown as ThreeContext;
  React.useEffect(() => {
    const volume = computeVolume(geometry);
    setVolume({ volume: volume.toFixed(2) });
  }, [geometry]);

  useEffect(() => {
    if (meshRef.current) {
      // Вычисляем границы модели
      const box = new THREE.Box3().setFromObject(meshRef.current);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      setDimensions(size);
      box.getCenter(center);
      box.getSize(size);

      // Центрируем модель
      meshRef.current.position.sub(center);

      // Подстраиваем камеру — чтобы вся модель влезала
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
