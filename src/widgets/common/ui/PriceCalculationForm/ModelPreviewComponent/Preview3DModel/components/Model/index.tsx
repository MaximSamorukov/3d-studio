'use client';
import React, { useEffect, useMemo } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { getLoader } from '@/shared/utils/computeVolume';
import * as THREE from 'three';

type ModulePropsType = {
  url: string;
  fileName: string | null;
};
type ThreeContext = {
  camera: THREE.PerspectiveCamera;
};
type LoadedModel = THREE.BufferGeometry | THREE.Group | THREE.Mesh;

export const Model: React.FC<ModulePropsType> = ({ url, fileName }) => {
  const loader = useMemo(() => {
    return getLoader(fileName);
  }, [fileName]);
  console.log('asd', fileName);
  const geometry: LoadedModel | null = useLoader(loader, url) as LoadedModel;
  const meshRef = React.useRef<THREE.Mesh>(null);

  const { camera } = useThree() as unknown as ThreeContext;
  useEffect(() => {
    console.log('effect');
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

  if (geometry instanceof THREE.Mesh) {
    return (
      <primitive object={geometry} ref={meshRef}>
        <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
      </primitive>
    );
  }
  if (geometry instanceof THREE.Group) {
    return (
      <primitive object={geometry} ref={meshRef}>
        <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
      </primitive>
    );
  }
  if (geometry instanceof THREE.BufferGeometry) {
    return (
      <mesh geometry={geometry} ref={meshRef}>
        <meshStandardMaterial color="#ff6b00" metalness={0.2} roughness={0.5} />
      </mesh>
    );
  }
  return null;
};
