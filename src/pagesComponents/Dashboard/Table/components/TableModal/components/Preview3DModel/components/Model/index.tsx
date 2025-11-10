'use client';
import React, { useEffect } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { computeVolume } from './utils';
import { observer } from 'mobx-react-lite';

type ModulePropsType = {
  url: string;
  setDimensions: (arg: any) => void;
  setVolume: (arg: any) => void;
};
export const Model: React.FC<ModulePropsType> = ({
  url,
  setDimensions,
  setVolume,
}) => {
  const geometry = useLoader(STLLoader, url); //'/models/Celtic_Dragon.stl');
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { camera, controls } = useThree() as any;
  React.useEffect(() => {
    const volume = computeVolume(geometry);
    setVolume(volume.toFixed(2));
    //console.log('Объем модели:', volume.toFixed(2), 'куб.единиц');
  }, [geometry]);

  useEffect(() => {
    if (meshRef.current) {
      // Вычисляем границы модели
      const box = new THREE.Box3().setFromObject(meshRef.current);
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      //console.log('Размеры модели:', size);
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

      if (controls) {
        controls.target.set(0, 0, 0);
        controls.update();
      }
    }
  }, [geometry, camera, controls]);
  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
    </mesh>
  );
};
